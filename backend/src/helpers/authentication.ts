import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

dotenv.config()

export function generateToken(email: string) {
  return jwt.sign({ email }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: "3h" })
}

// para las rutas protejidas validar 
export function verificarToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'Token requerido' });
  }

  // res.status(400).json({ msg: "validando token!", token })
  if (token != null) {
    try {
      // const dataToken = jwt.verify(token, `${process.env.JWT_TOKEN_SECRET}`);
      // console.log(dataToken);
      // req.emailConect = dataToken.email;
      next();
    } catch (e) {
      res.status(401).json({ error: 'Token no válido' });
    }
  }


}