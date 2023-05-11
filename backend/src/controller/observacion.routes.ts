import { Router } from "express";
import { getAllObservaciones, getObservacion, createObservacion, updateObservacion,deleteObservacion } from "../service/observacion.service";

const router = Router();

router.get("/", (req, res) => getAllObservaciones(req, res));

router.get("/:id", (req, res) => getObservacion(req, res));

router.post("/", (req, res) => createObservacion(req, res));

router.put("/:id", (req, res) => updateObservacion(req, res));

router.delete("/:id", (req, res) => deleteObservacion(req, res));
// Faltan los endpoints de update, delete, create

export default router;