import { Request, Response } from "express";
import UploadExcelData from "../dto/interfaces/UploadExcelFileData";

var XLSX = require("xlsx");
import path from "path";
export const uploadPost = (req: Request, res: Response) =>{
    res.status(201).json({
        message: "File upload successful",
        file: req.file as Express.Multer.File
    });

    if (uploadPost != null)
    {
        const ExceltoJSON = () => {
            const excel = XLSX.readFile(
                path.join(__dirname, "../public/uploads")
            );
            var idsheet = excel.SheetNames;
            let datos = XLSX.utils.sheets_to_json(excel.Sheets[idsheet[0]]); //TENGO QUE CORREGIR ESA D 
            const datosformat = datos.map((d: UploadExcelData)=>{
                return({
                    'id':d.id,
                    'nombre':d.nombre,
                    //como se supone que trabajo una subida de imagenes dentro de una subida de excel en formato JSON?
                    'imagen':d.imagen,
                    'descripcion':d.descripcion,
                    'pais':d.pais,
                    'idioma':d.idioma,
                    'valorFinanciamiento':d.valorFinanciamiento,
                    'beneficios':d.beneficios,
                    'participantes':d.participantes,
                    'moneda':d.moneda,
                    'requisitos':d.requisitos,
                    'categoria': d.categoria,
                    'observaciones': d.observaciones,
                    'fechaInicio':new Date((d.fecha -(25567+ 2))*86400*1000), 
                    'fechaFin':new Date((d.fecha -(25567+ 2))*86400*1000), 
                    'estado': d.estado,
                    'isPremium': d.isPremium,
                })
            });
            console.log(datos);
        };
        ExceltoJSON();
    }
}