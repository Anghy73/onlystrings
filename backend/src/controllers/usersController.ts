import { Request, Response } from "express"

class usersController {
  constructor(){}

  register(req: Request, res: Response) {
    res.json({ msg: "user register" })
  }

  login(req: Request, res: Response) {
    res.json({ msg: "user login" })
  }
}

export default new usersController()