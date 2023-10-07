import { Router } from "express";
import {
    createPunto,
    getPunto,
    updatePunto,
    deletePunto,
} from "../controllers/punto.controller.js";

const router = Router();

// Routes
router.post("/", createPunto);
router.get("/:id", getPunto);
router.put("/:id", updatePunto);
router.delete("/:id", deletePunto);

export default router;