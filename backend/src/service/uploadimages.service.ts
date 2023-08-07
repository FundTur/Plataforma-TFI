import { Request, Response } from "express";
import path from "path";

export const uploadPost = (req: Request, res: Response) =>{
    res.status(201).json({
        message: "Image upload successful",
        file: req.file as Express.Multer.File
    });

   
}