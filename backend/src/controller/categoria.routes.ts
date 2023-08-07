import { Router } from "express";
import {
  getAllCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../service/categoria.service";

const router = Router();

router.get("/", (req, res) => getAllCategorias(req, res));

router.get("/:id", (req, res) => getCategoria(req, res));

router.post("/", (req, res) => createCategoria(req, res));

router.put("/:id", (req, res) => updateCategoria(req, res));

router.delete("/:id", (req, res) => deleteCategoria(req, res));
// Faltan los endpoints de update, delete, create

export default router;
