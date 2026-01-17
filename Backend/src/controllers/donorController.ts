import  type { Request, Response } from "express"
import pool from "../db/index.js"

const donorController = {

  // POST /donor/create
  createDonation: async (req: Request, res: Response) => {
    try {
      const { donorId, foodName, foodCategory, quantity } = req.body

      if (!donorId || !foodName || !foodCategory || !quantity) {
        return res.status(400).json({ message: "Missing required fields" })
      }

      const query = `
        INSERT INTO donate_food (donor_id, food_name, food_category, quantity)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `

      const values = [donorId, foodName, foodCategory, quantity]

      const result = await pool.query(query, values)

      return res.status(201).json({
        message: "Donation created successfully",
        donation: result.rows[0]
      })

    } catch (err) {
      console.error("createDonation error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  },

  // GET /donor/donations/:donorId
  getDonorDonations: async (req: Request, res: Response) => {
    try {
      const { donorId } = req.params

      const query = `
        SELECT id, food_name, food_category, quantity, status, created_at
        FROM donate_food
        WHERE donor_id = $1
        ORDER BY created_at DESC
      `

      const result = await pool.query(query, [donorId])

      return res.status(200).json({
        donations: result.rows
      })

    } catch (err) {
      console.error("getDonorDonations error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

}

export default donorController
