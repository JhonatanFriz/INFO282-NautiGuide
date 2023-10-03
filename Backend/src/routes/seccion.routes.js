import { Router } from "express";
import {
  createSeccion,
  getSeccion,
  updateSeccion,
  deleteSeccion,
} from "../controllers/seccion.controller.js";

const router = Router();

// Routes
router.post("/", createSeccion);
router.put("/:id", updateSeccion);
router.delete("/:id", deleteSeccion);
router.get("/:id", getSeccion);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;
