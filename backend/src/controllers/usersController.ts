import { Request, Response } from "express"
import User from "../models/usersModel"
import { AppDataSource } from "../db/conexion"

const userRepository = AppDataSource.getRepository(User)

class usersController {
  constructor(){}

  async register(req: Request, res: Response) {
    const { email } = req.body
    try {
      const userValid = await userRepository.findOne({ where: { email: email } })
      
      if (userValid) {
        res.status(400).json({ error: "Usuario ya existe" })
      }
      const userRegistro = userRepository.create(req.body)
      await userRepository.save(userRegistro)

      res.status(201).json({ msg: "Usuario creado" })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    // res.json({ msg: "user register" })
  }

  login(req: Request, res: Response) {
    res.json({ msg: "user login" })
  }
}

export default new usersController()