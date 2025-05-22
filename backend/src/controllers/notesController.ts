import { Request, Response } from "express";
import { AppDataSource } from "../db/conexion";
import Notes from "../models/notesModel";
import User from "../models/usersModel";

const notesRepository = AppDataSource.getRepository(Notes)
const userRepository = AppDataSource.getRepository(User)

class notesController {
  constructor() { }

  async consultar(req: Request, res: Response) {
    console.log(req.params);

    const { userId } = req.params
    console.log(userId);

    try {
      const userRegistro = await userRepository.findOne({ where: { id: Number(userId) }, relations: ["notes"] })
      if (!userRegistro) {
        res.status(400).json({ error: "El ususario no existe" })
      }

      const notes = userRegistro?.notes
      res.status(200).json({ notes })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    // res.json({ msg: "Consultar notas" })
  }

  async consultarNota(req: Request, res: Response) {
    console.log(req.params);
    
    const { noteId } = req.params
    console.log(noteId);
    
    try {
      const note = await notesRepository.find({ where: { id:  Number(noteId)} })
      if (note.length == 0) {
        res.status(400).json({ error: "La nota no existe" })
      }
      console.log(note);
      
      res.status(200).json({ note })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    // res.json({ msg: "Consultar una nota" })
  }

  async ingresar(req: Request, res: Response) {
    const { userId } = req.params
    console.log(userId);

    try {
      const userRegistro = await userRepository.findOne({ where: { id: Number(userId) }, relations: ["notes"] })
      if (!userRegistro) {
        res.status(400).json({ error: "El ususario no existe" })
      }

      const note = notesRepository.create(req.body)
      await notesRepository.save(note)

      res.status(201).json({ msg: "note created", user: userRegistro })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  actualizar(req: Request, res: Response) {
    res.json({ msg: "Actualizar nota" })
  }

  borrar(req: Request, res: Response) {
    res.json({ msg: "Borrar nota" })
  }
}
export default new notesController()