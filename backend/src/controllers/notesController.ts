import { Request, Response } from "express";

class notesController {
  constructor() { }

  consultar(req: Request, res: Response) {
    res.json({ msg: "Consultar notas" })
  }

  consultarNota(req: Request, res: Response) {
    res.json({ msg: "Consultar una nota" })
  }

  ingresar(req: Request, res: Response) {
    res.json({ msg: "Ingresar nota" })
  }

  actualizar(req: Request, res: Response) {
    res.json({ msg: "Actualizar nota" })
  }

  borrar(req: Request, res: Response) {
    res.json({ msg: "Borrar nota" })
  }
}
export default new notesController()