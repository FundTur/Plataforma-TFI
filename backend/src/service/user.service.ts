import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";

import {
  getAll,
  getById,
  create,
  remove,
  update,
} from "../repository/user.repository";
import OutData from "../dto/outDataDTO";
import { Usuario } from "../model/Usuario";

export const getAllUsers = async (req: Request, res: Response) => {
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
    const [usuarios, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = usuarios;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: usuarios.length,
        filterCount: usuarios.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: usuarios.length,
      };
    }

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const userId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const userFind = await getById(userId);

    // Llenamos el contenedor de datos de salida
    outData.data = [userFind];

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

export const createUser = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const usuario = plainToClass(Usuario, req.body);

    // Creamos el usuario
    const usuarioCreated = await create(usuario);

    // Asignamos los datos de salida
    outData.data = [usuarioCreated];
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const userId = parseInt(req.params.id as string);
    const usuario = plainToClass(Usuario, req.body);

    // Actualizamos el usuario
    const usuarioUpdated = await update(userId, usuario);

    // Asignamos los datos de salida
    outData.data = [usuarioUpdated];
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

export const deleteUser = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const userId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(userId);

    res.status(200).send("Usuario eliminado");
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
