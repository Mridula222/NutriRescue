import type{ Request, Response } from "express"
import pool from "../db/index.js"

const userController = {

  // POST /user/create
  createUser: async (req: Request, res: Response) => {
    try {
      const { name, role, state, city, address } = req.body

      // minimal validation
      if (!name || !role) {
        return res.status(400).json({ message: "Name and role are required" })
      }

      if (!["DONOR", "NGO"].includes(role)) {
        return res.status(400).json({ message: "Invalid role" })
      }

      const query = `
        INSERT INTO users (name, role, state, city, address)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `

      const values = [
        name,
        role,
        state || null,
        city || null,
        address || null
      ]

      const result = await pool.query(query, values)

      return res.status(201).json({
        message: "User created successfully",
        user: result.rows[0]
      })

    } catch (err) {
      console.error("createUser error:", err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

}

export default userController
