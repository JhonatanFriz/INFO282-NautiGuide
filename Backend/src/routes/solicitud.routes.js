import { Router } from "express";

import {
    createSolicitud,
    getSolicitud,
    deleteSolicitud,
    getSolicitudes,
    getSolicitudUsuario,
} from "../controllers/solicitud.controller.js";

const router = Router();

router.post("/", createSolicitud);
router.delete("/:id", deleteSolicitud);
router.get("/", getSolicitudes);
router.get("/:id", getSolicitud);
router.get("/usuarios/:uderId", getSolicitudUsuario);

export default router;

