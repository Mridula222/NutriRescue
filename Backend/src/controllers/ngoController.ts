import type { Request, Response } from "express"
import pool from "../db/index.js"

// Food category → max safe hours
const FOOD_SAFETY_HOURS: Record<string, number> = {
  DAIRY: 24,
  MEAT: 12,
  VEGETABLES: 24,
  RICE_GRAINS: 36,
  LENTILS_LEGUMES: 24,
  BREADS: 48,
  FRIED_FASTFOOD: 24,
  SWEETS: 24,
  FRUITS_RAW: 0,
  PICKLES_CONDIMENTS: 168
}

const ngoController = {

  // GET /ngo/available-food?state=&city=
  getAvailableFood: async (req: Request, res: Response) => {
    try {
      const { state, city } = req.query

      if (!state || !city) {
        return res.status(400).json({ message: "State and city are required" })
      }

      const query = `
        SELECT
          d.id,
          d.donor_id,
          d.food_name,
          d.food_category,
          d.quantity,
          d.created_at,
          u.name AS donor_name,
          u.address
        FROM donate_food d
        JOIN users u ON d.donor_id = u.id
        WHERE
          d.status = 'POSTED'
          AND u.role = 'DONOR'
          AND u.state = $1
          AND u.city = $2
        ORDER BY d.created_at ASC
      `

      const result = await pool.query(query, [state, city])

      const now = new Date()

      const safeFood = result.rows.filter(food => {
        const maxHours = FOOD_SAFETY_HOURS[food.food_category]
        if (!maxHours) return false

        const createdAt = new Date(food.created_at)
        const expiryTime = new Date(createdAt.getTime() + maxHours * 60 * 60 * 1000)

        return now < expiryTime
      })

      return res.status(200).json({ donations: safeFood })

    } catch (err) {
      console.error("getAvailableFood error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  },

  // POST /ngo/claim
 toggleClaim: async (req: Request, res: Response) => {
  try {
    const { donationId } = req.body

    if (!donationId) {
      return res.status(400).json({ message: "donationId is required" })
    }

    // Get current status
    const findQuery = `
      SELECT status
      FROM donate_food
      WHERE id = $1
    `
    const findResult = await pool.query(findQuery, [donationId])

    if (findResult.rowCount === 0) {
      return res.status(404).json({ message: "Donation not found" })
    }

    const currentStatus = findResult.rows[0].status

    // Decide new status
    let newStatus
    if (currentStatus === "POSTED") {
      newStatus = "CLAIMED"
    } else if (currentStatus === "CLAIMED") {
      newStatus = "POSTED"
    } else {
      return res.status(400).json({
        message: "Donation cannot be toggled"
      })
    }

    // Update status
    const updateQuery = `
      UPDATE donate_food
      SET status = $1
      WHERE id = $2
      RETURNING *
    `
    const updateResult = await pool.query(updateQuery, [newStatus, donationId])

    return res.status(200).json({
      message: `Donation ${newStatus === "CLAIMED" ? "claimed" : "unclaimed"} successfully`,
      donation: updateResult.rows[0]
    })

  } catch (err) {
    console.error("toggleClaim error:", err)
    return res.status(500).json({ message: "Internal server error" })
  }
}


}

export default ngoController
