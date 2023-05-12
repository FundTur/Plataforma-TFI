import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import { getAll, getById, create, update, remove } from "../repository/ciudad.repository";
import OutData from "../dto/outDataDTO";
import { Ciudad } from "../model/Ciudad";


export const getAllCiudades = async (req: Request, res: Response) => {
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
    const [ciudades, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = ciudades;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: ciudades.length,
        filterCount: ciudades.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: ciudades.length,
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

export const getCiudad = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const CiudadId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const ciudad: any[] = [await getById(CiudadId)];

    outData.data = ciudad;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createCiudad = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const ciudad = plainToClass(Ciudad, req.body);

    // Creamos el usuario
    const ciudadCreated = await create(ciudad);

    // Asignamos los datos de salida
    outData.data = [ciudadCreated];
    outData.metadata = {
      totalCount: 1,
      filterCount: 1,
    };
    
    // Devolvemos el usuario creado
    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const updateCiudad = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const ciudadId = parseInt(req.params.id as string);
    const ciudad = plainToClass(Ciudad, req.body);

    // Actualizamos el usuario
    const ciudadUpdated = await update(ciudadId, ciudad);

    // Asignamos los datos de salida
    outData.data = [ciudadUpdated];
    outData.metadata = {
      totalCount: 1,
      filterCount: 1,
    };

    // Devolvemos el usuario actualizado
    res.status(200).json(outData);

  } catch (error) {
    if(error instanceof DBError){
      res.status(404).json({ error: error.message, stack: error.stack, name: error.name });
      return;
    }

    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const deleteCiudad = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const ciudadId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(ciudadId);

    res.status(200).send("Ciudad eliminada");
  } catch (error) {
    if(error instanceof DBError){
      res.status(404).json({ error: error.message, stack: error.stack, name: error.name });
      return;
    }

    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

