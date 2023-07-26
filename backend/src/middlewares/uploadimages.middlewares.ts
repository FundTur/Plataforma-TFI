import multer, { FileFilterCallback } from "multer";
import crypto from "crypto";
import {Request, Response, NextFunction} from "express";
import path from "path";


const storage = multer.diskStorage({

    destination: path.join(__dirname, "../public/uploads"),
    filename: function(req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void
    ){
        const uuid = crypto.randomUUID();
        callback(null, uuid + file.originalname.substring(file.originalname.lastIndexOf(".")));
}});

const fileFilter = (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
    const fileTypes = ["image/png", "image/jpg", "image/jpeg"];

    if(fileTypes.some((fileType) => fileType === file.mimetype)){
        return callback(null,true)
    }
    return callback(null, false)

};

const maxSize = process.env.MAXSIZE; //originalmente es tamaño * ancho * alto
// se manejaria con respecto a la tabla resoluciones 
export const upload = (req: Request, res: Response, next: NextFunction) => {
    return multer({
        storage,
        limits: {fileSize: Number(maxSize)},
        fileFilter,
    }).single("image")(req, res, (err) => {
        
        if(err instanceof multer.MulterError)
        {
            return res.status(400).json({
                message: "Max image size 1GB allowed!"
            });
        };

        if(err) return res.status(400).json(err.message);

        if(!req.file){
            res.status(400).json({
                message: "No image has been uploaded, remember that u can only upload jpg, png, jpeg types!"
            })
        }

        next();

        })

    }