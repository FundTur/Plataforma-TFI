import { Router } from "express";
import { getAllCategorias, getCategoria } from "../service/categoria.service";

const router = Router();

router.get("/", (req, res) => getAllCategorias(req, res));

router.get("/:id", (req, res) => getCategoria(req, res));

// Faltan los endpoints de update, delete, create

export default router;