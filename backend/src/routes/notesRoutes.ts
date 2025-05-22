import express from 'express'
import notesController from '../controllers/notesController'
import { verificarToken } from '../helpers/authentication'

const router = express.Router()


router.get("/:userId", verificarToken, notesController.consultar)
router.post("/:userId", verificarToken, notesController.ingresar)

router.get("/note/:noteId", notesController.consultarNota)


// router.route("/:noteId")
//   .put(notesController.actualizar)
//   .delete(notesController.borrar)

export default router