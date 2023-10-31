import { Router } from "express";
import {
  getBarcos,
  createBarco,
  getBarco,
  deleteBarco,
  getBarcoSecciones,
} from "../controllers/barco.controller.js";

const router = Router();

// Routes
router.post("/", createBarco);
router.get("/", getBarcos);
router.get("/:id", getBarco);
router.delete("/:id", deleteBarco);
router.get("/:id/secciones", getBarcoSecciones);



export default router;
