import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../repository/pais.repository";
import OutData from "../dto/outDataDTO";
import { Pais } from "../model/Pais";

export const getAllPaises = async (req: Request, res: Response) => {
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
    const [paises, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = paises;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: paises.length,
        filterCount: paises.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: paises.length,
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

export const getPais = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const paisId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const pais: any[] = [await getById(paisId)];

    outData.data = pais;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createPais = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const pais = plainToClass(Pais, req.body);

    // Creamos el usuario
    const paisCreated = await create(pais);

    // Asignamos los datos de salida
    outData.data = [paisCreated];
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

export const updatePais = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const paisId = parseInt(req.params.id as string);
    const pais = plainToClass(Pais, req.body);

    // Actualizamos el usuario
    const paisUpdated = await update(paisId, pais);

    // Asignamos los datos de salida
    outData.data = [paisUpdated];
    outData.metadata = {
      totalCount: 1,
      filterCount: 1,
    };

    // Devolvemos el usuario actualizado
    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof DBError) {
      res
        .status(404)
        .json({ error: error.message, stack: error.stack, name: error.name });
      return;
    }

    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const deletePais = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const paisId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(paisId);

    res.status(200).send("Pais eliminado");
  } catch (error) {
    if (error instanceof DBError) {
      res
        .status(404)
        .json({ error: error.message, stack: error.stack, name: error.name });
      return;
    }

    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};
