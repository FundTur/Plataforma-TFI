import { Router } from "express";
import { uploadPost } from "../service/uploadimages.service";
import { upload } from "../middlewares/uploadimages.middlewares";

const router = Router();
router.post("/",upload, uploadPost);

export default router; 