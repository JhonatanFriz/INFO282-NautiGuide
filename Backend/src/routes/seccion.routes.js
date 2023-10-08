import { Router } from "express";
import {
  createSeccion,
  getSeccion,
  updateSeccion,
  deleteSeccion,
  getSeccionComponentes,
} from "../controllers/seccion.controller.js";

const router = Router();

// Routes
router.post("/", createSeccion);
router.put("/:id", updateSeccion);
router.delete("/:id", deleteSeccion);
router.get("/:id", getSeccion);

// Metodos, se definen los endpoints, cómo voy a pedir la información

router.get("/:id/componentes", getSeccionComponentes);

export default router;
