import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../repository/convocatoria.repository";
import OutData from "../dto/outDataDTO";
import { Convocatoria } from "../model/Convocatoria";

export const getAllConvocatorias = async (req: Request, res: Response) => {
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
    const [convocatorias, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = convocatorias;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: convocatorias.length,
        filterCount: convocatorias.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: convocatorias.length,
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

export const getConvocatorias = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const convocatoriaId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const convocatoria: any[] = [await getById(convocatoriaId)];

    outData.data = convocatoria;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createConvocatorias = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const convocatoria = plainToClass(Convocatoria, req.body);

    // Creamos el usuario
    const convocatoriaCreated = await create(convocatoria);

    // Asignamos los datos de salida
    outData.data = [convocatoriaCreated];
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

export const updateConvocatorias = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const convocatoriaId = parseInt(req.params.id as string);
    const convocatoria = plainToClass(Convocatoria, req.body);

    // Actualizamos el usuario
    const convocatoriaUpdated = await update(convocatoriaId, convocatoria);

    // Asignamos los datos de salida
    outData.data = [convocatoriaUpdated];
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

export const deleteConvocatorias = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const convocatoriaId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(convocatoriaId);

    res.status(200).send("Convocatoria eliminada");
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
