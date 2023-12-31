import { Router } from "express";
import {
  createSeccion,
  getSecciones,
  getSeccion,
  updateSeccion,
  deleteSeccion,
  getSeccionComponentes,
  unir_barco_seccion,
  llamar_barco_seccion,
} from "../controllers/seccion.controller.js";

const router = Router();

// Routes
router.post("/", createSeccion);
router.put("/:id", updateSeccion);
router.delete("/:id", deleteSeccion);
router.get("/", getSecciones)
router.get("/:id", getSeccion);

// Metodos, se definen los endpoints, cómo voy a pedir la información

router.get("/:id/componentes", getSeccionComponentes);

router.post("/:barcoId/seccion", unir_barco_seccion);
router.get("/:barcoId/seccion", llamar_barco_seccion);

export default router;
