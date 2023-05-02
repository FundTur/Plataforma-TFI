import { Router } from "express";
import { getAllBeneficios, getBeneficio } from "../service/beneficio.service";

const router = Router();

router.get("/", (req, res) => getAllBeneficios(req, res));

router.get("/:id", (req, res) => getBeneficio(req, res));

export default router;