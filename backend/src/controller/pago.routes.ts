import { Router } from "express";
import {
  getAllPagos,
  getPago,
  createPago,
  updatePago,
  deletePago,
} from "../service/pago.service";

const router = Router();

router.get("/", (req, res) => getAllPagos(req, res));

router.get("/:id", (req, res) => getPago(req, res));

router.post("/", (req, res) => createPago(req, res));

router.put("/:id", (req, res) => updatePago(req, res));

router.delete("/:id", (req, res) => deletePago(req, res));
// Faltan los endpoints de update, delete, create

export default router;
