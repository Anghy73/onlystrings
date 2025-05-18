import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export function generateToken (email: string) {
  return jwt.sign({ email }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: "3h" })
}

// para las rutas protejidas validar 
// export function verificarToken(req, res, next) {

//     const token = req.header('Authorization')?.replace('Bearer ', '');

//     if (!token) {
//         return res.status(401).json({ error: 'Token requerido' });
//     }

//     try {
//         const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
//         req.emailConectado = dataToken.email;
//         next();
//     } catch (e) {
//         res.status(401).json({ error: 'Token no válido' });
//     }

// }