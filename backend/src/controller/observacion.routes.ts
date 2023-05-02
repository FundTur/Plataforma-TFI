import { Router } from "express";
import { getAllObservaciones, getObservacion } from "../service/observacion.service";

const router = Router();

router.get("/", (req, res) => getAllObservaciones(req, res));

router.get("/:id", (req, res) => getObservacion(req, res));

export default router;