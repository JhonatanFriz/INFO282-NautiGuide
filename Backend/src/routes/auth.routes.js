import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";


const router = Router();

// Routes
router.post("/login", login);

// Ruoutes protected
router.get("/logout", logout); //falta agregar token

export default router;
