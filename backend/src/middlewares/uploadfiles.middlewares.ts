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

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const fileTypes = ["document/xlsx", "document/xlsm", "document/xlsb", "image/xltx"];

    if(fileTypes.some((fileType) => fileType === file.mimetype)){
        return cb(null,true)
    }
    return cb(null, false)

};

const maxSize = process.env.MAXSIZE;
//const maxSize = 10000000; enviado al .env
export const upload = (req: Request, res: Response, next: NextFunction) => {
    return multer({
        storage,
        limits: {fileSize: Number(maxSize)},
        fileFilter,
    }).single("document")(req, res, (err) => {
        
        if(err instanceof multer.MulterError)
        {
            return res.status(400).json({
                message: "Max file size 1GB allowed!"
            });
        };

        if(err) return res.status(400).json(err.message);

        if(!req.file){
            res.status(400).json({
                message: "No file has been uploaded, remember that u can only upload xlsx, xlsm, xlsb, xltx types!"
            })
        }

        next();

        })

    }