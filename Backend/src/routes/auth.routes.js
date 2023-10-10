import { Router } from "express";
import { login, logout } from "../controllers/auth.controller.js";


const router = Router();

// Routes
router.post("/login", login);
router.post("/logout", logout);

export default router;
