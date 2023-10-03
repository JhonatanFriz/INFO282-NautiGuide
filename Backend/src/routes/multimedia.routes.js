import { Router } from "express";
import {
  createMultimedia,
  getMultimedia,
  updateMultimedia,
  deleteMultimedia,
} from "../controllers/multimedia.controller.js";

const router = Router();

// Routes
router.post("/", createMultimedia);
router.put("/:id", updateMultimedia);
router.delete("/:id", deleteMultimedia);
router.get("/:id", getMultimedia);

// Metodos, se definen los endpoints, cómo voy a pedir la información


export default router;