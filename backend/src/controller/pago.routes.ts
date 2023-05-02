import { Router } from "express";
import { getAllPagos, getPago } from "../service/pago.service";

const router = Router();

router.get("/", (req, res) => getAllPagos(req, res));

router.get("/:id", (req, res) => getPago(req, res));

export default router;