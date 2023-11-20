import { Router } from "express";

import {
  createPaper,
  getPapers,
  updatePaper,
  deletePaper,
  getPaper,
} from "../controllers/paper.controller.js";

const router = Router();

// Routes
router.post("/", createPaper);
router.put("/:id", updatePaper);
router.delete("/:id", deletePaper);
router.get("/", getPapers);
router.get("/:id", getPaper);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;
