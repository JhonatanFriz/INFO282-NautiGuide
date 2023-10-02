import { Router } from "express";
import {
  createSubcomponente,
  getSubcomponente,
  updateSubcomponente,
  deleteSubcomponente,
} from "../controllers/subcomponente.controller.js";

const router = Router();

// Routes
router.post("/", createSubcomponente);
router.put("/:id", updateSubcomponente);
router.delete("/:id", deleteSubcomponente);
router.get("/:id", getSubcomponente);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;