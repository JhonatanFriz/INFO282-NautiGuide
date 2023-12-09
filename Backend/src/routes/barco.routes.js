import { Router } from "express";
import {
  getBarcos,
  createBarco,
  getBarco,
  deleteBarco,
  getBarcoSecciones,
  updateBarco,
} from "../controllers/barco.controller.js";

const router = Router();

// Routes
router.post("/", createBarco);
router.get("/", getBarcos);
router.get("/:id", getBarco);
router.delete("/:id", deleteBarco);
router.get("/:id/secciones", getBarcoSecciones);
router.put("/:id", updateBarco);



export default router;
