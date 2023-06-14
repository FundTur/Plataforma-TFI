import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../repository/observacion.repository";
import OutData from "../dto/outDataDTO";
import { Observacion } from "../model/Observacion";

export const getAllObservaciones = async (req: Request, res: Response) => {
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
    const [observaciones, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = observaciones;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: observaciones.length,
        filterCount: observaciones.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: observaciones.length,
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

export const getObservacion = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const observacionId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const observacion: any[] = [await getById(observacionId)];

    outData.data = observacion;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createObservacion = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const observacion = plainToClass(Observacion, req.body);

    // Creamos el usuario
    const observacionCreated = await create(observacion);

    // Asignamos los datos de salida
    outData.data = [observacionCreated];
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

export const updateObservacion = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const observacionId = parseInt(req.params.id as string);
    const observacion = plainToClass(Observacion, req.body);

    // Actualizamos el usuario
    const observacionUpdated = await update(observacionId, observacion);

    // Asignamos los datos de salida
    outData.data = [observacionUpdated];
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

export const deleteObservacion = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const observacionId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(observacionId);

    res.status(200).send("Observacion eliminada");
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
