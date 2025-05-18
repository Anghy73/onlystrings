import express from 'express'
import usersController from '../controllers/usersController'

const router = express.Router()

router.get("/", usersController.consultar)
router.post("/register", usersController.register)
router.post("/login", usersController.login)

export default router