import { Router } from "express";
import { getAllPaises, getPais } from "../service/pais.service";

const router = Router();

router.get("/", (req, res) => getAllPaises(req, res));

router.get("/:id", (req, res) => getPais(req, res));

// Faltan los endpoints de update, delete, create

export default router;