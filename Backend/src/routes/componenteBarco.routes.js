import { Router } from "express";
import {
  createComponenteBarco,
  getComponenteBarco,
  updateComponenteBarco,
  deleteComponenteBarco,
} from "../controllers/componenteBarco.controller.js";

const router = Router();

// Routes
router.post("/", createComponenteBarco);
router.put("/:id", updateComponenteBarco);
router.delete("/:id", deleteComponenteBarco);
router.get("/:id", getComponenteBarco);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;
