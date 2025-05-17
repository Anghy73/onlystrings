import express from 'express'
import notesController from '../controllers/notesController'

const router = express.Router()

router.get("/", notesController.consultar)
router.post("/", notesController.ingresar)

router.route("/:noteId")
  .get(notesController.consultarNota)
  .put(notesController.actualizar)
  .delete(notesController.borrar)

export default router