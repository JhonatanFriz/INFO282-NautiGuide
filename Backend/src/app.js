import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from 'dotenv';

//init
dotenv.config();
const app = express();

// Import routes
import userRoutes from "./routes/users.routes.js";
import paperRoutes from "./routes/papers.routes.js";
import barcoRoutes from "./routes/barco.routes.js";
import componenteBarcoRoutes from "./routes/componenteBarco.routes.js";
import subcomponenteRoutes from "./routes/subcomponente.routes.js";


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configura CORS
app.use(
  cors({
    origin: [process.env.ORIGIN, process.env.ORIGIN1],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/papers", paperRoutes);
app.use("/api/barco", barcoRoutes);
app.use("/api/barco", componenteBarcoRoutes);
app.use("/api/barco", subcomponenteRoutes);

export default app;
