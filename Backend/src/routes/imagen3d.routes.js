import { Router } from "express";

import {
    createImagen3d,
    getImagen3d,
    deleteImagen3d,
    updateImagen3d
} from "../controllers/imagen3d.controller.js";

const router = Router();

router.post("/", createImagen3d);
router.put("/:id", updateImagen3d);
router.delete("/:id", deleteImagen3d);
router.get("/:seccionId", getImagen3d);

export default router;