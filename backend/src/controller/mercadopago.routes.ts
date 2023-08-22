import { Router } from "express";
import { mercadopago } from "../service/mercadopago.service";

const router = Router();

router.put("/",mercadopago);

router.post("/",mercadopago);


export default router;