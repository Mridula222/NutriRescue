import type { Request, Response } from "express"
import pool from "../db/index.js"

const locationController = {

  // GET /location/states
  getStates: async (_: Request, res: Response) => {
    try {
      const query = `
        SELECT DISTINCT state
        FROM users
        WHERE state IS NOT NULL
        ORDER BY state
      `

      const result = await pool.query(query)

      const states = result.rows.map(row => row.state)

      return res.status(200).json({ states })

    } catch (err) {
      console.error("getStates error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  },

  // GET /location/cities?state=
  getCities: async (req: Request, res: Response) => {
    try {
      const { state } = req.query

      if (!state) {
        return res.status(400).json({ message: "State is required" })
      }

      const query = `
        SELECT DISTINCT city
        FROM users
        WHERE state = $1
          AND city IS NOT NULL
        ORDER BY city
      `

      const result = await pool.query(query, [state])

      const cities = result.rows.map(row => row.city)

      return res.status(200).json({ cities })

    } catch (err) {
      console.error("getCities error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

}

export default locationController
