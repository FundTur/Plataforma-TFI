import { Router } from "express";
import {
  getAllConvocatorias,
  getConvocatorias,
  createConvocatorias,
  updateConvocatorias,
  deleteConvocatorias,
} from "../service/convocatoria.service";

const router = Router();

router.get("/", (req, res) => getAllConvocatorias(req, res));

router.get("/:id", (req, res) => getConvocatorias(req, res));

router.post("/", (req, res) => createConvocatorias(req, res));

router.put("/:id", (req, res) => updateConvocatorias(req, res));

router.delete("/:id", (req, res) => deleteConvocatorias(req, res));

export default router;
