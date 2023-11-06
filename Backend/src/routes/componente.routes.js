import { Router } from "express";
import {
  createComponente,
  getComponente,
  updateComponente,
  deleteComponente,
} from "../controllers/componente.controller.js";

const router = Router();

// Routes
router.post("/:seccionId", createComponente);
router.put("/:id", updateComponente);
router.delete("/:id", deleteComponente);
router.get("/:seccionId", getComponente);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;