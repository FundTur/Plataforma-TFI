import { Router } from "express";
import { getAllBeneficios, getBeneficio, createBeneficio, updateBeneficio, deleteBeneficio } from "../service/beneficio.service";

const router = Router();

router.get("/", (req, res) => getAllBeneficios(req, res));

router.get("/:id", (req, res) => getBeneficio(req, res));

router.post("/", (req, res) => createBeneficio(req, res));

router.put("/:id", (req, res) => updateBeneficio(req, res));

router.delete("/:id", (req, res) => deleteBeneficio(req, res));

export default router;