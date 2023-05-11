import { Request, Response } from "express";
import { create, getAll, getById } from "../repository/rol.repository";
import OutData from "../dto/outDataDTO";
import { Rol } from "../model/Rol";

export const getAllRoles = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const page = parseInt(
      (req.query.page as string) || (process.env.REQUEST_PAGE_NUMBER as string)
    );
    const limit = parseInt(
      (req.query.limit as string) || (process.env.REQUEST_PAGE_LIMIT as string)
    );

    // Obtenemos los datos de la base de datos
    const [roles, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = roles;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: roles.length,
        filterCount: roles.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: roles.length,
      };
    }

    res.status(200).json(outData);
  } catch (error) {
    // TODO: Crear una forma general de mostrar errores
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const getRol = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const rolId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const rol: any[] = [await getById(rolId)];

    outData.data = rol;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createRol = async (req: Request, res: Response) => {
      
  try{
    
    //const rol: any = await create(rol);
    
  }
  catch(error){
    if(error instanceof Error){
      res
      .status(500)
      .json({ error: error.message, stack: error.stack, name: error.name });
    }
}
};



