import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import User from "../models/usersModel"
import { AppDataSource } from "../db/conexion"
import { generateToken } from "../helpers/authentication"

const userRepository = AppDataSource.getRepository(User)

class usersController {
  constructor() { }

  async consultar(req: Request, res: Response) {
    try {
      const users = await userRepository.find({ relations: ["notes"] })
      res.status(200).json({ users, msg: "todo bem" })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async register(req: Request, res: Response) {
    console.log(req.body);
    
    const { name, email, password } = req.body
    try {
      const userExists = await userRepository.findOne({ where: { email: email } })

      if (userExists) {
        res.status(400).json({ error: "Usuario ya existe" })
      }
      const encryptedPassword = await bcrypt.hash(password, 6)
      const userRegistro = userRepository.create({
        name,
        email,
        password: encryptedPassword
      })
      await userRepository.save(userRegistro)
      res.status(201).json({ msg: "Usuario creado" })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const userExists = await userRepository.findOne({ where: { email: email }, relations: ["notes"] })
      console.log(userExists);
      
      if (!userExists) {
        res.status(400).json({ error: "Usuario no existe" })
      }

      if (!email || !password) {
        res.status(400).json({ error: "Faltan Campos" })
      }

      const correctPassword = await bcrypt.compare(password, userExists?.password as string)

      if (!correctPassword) {
        res.status(400).json({ error: "Password Incorret" })
      }

      const token = generateToken(email)
      
      const user = {
        id: userExists?.id,
        name: userExists?.name,
        email: userExists?.email,
        notes: userExists?.notes,
        token
      }

      res.status(200).json({ msg: "usuario correcto", user })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}

export default new usersController()