import { Router } from "express";
import { getAllPlanes, getPlanes } from "../service/plan.service";

const router = Router();

router.get("/", (req, res) => getAllPlanes(req, res));

router.get("/:id", (req, res) => getPlanes(req, res));

export default router;
