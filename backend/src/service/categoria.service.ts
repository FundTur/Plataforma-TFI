import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../repository/categoria.repository";
import OutData from "../dto/outDataDTO";
import { Categoria } from "../model/Categoria";

export const getAllCategorias = async (req: Request, res: Response) => {
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
    const [categorias, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = categorias;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: categorias.length,
        filterCount: categorias.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: categorias.length,
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

export const getCategoria = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const CategoriaId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const categoria: any[] = [await getById(CategoriaId)];

    outData.data = categoria;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createCategoria = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const categoria = plainToClass(Categoria, req.body);

    // Creamos el usuario
    const categoriaCreated = await create(categoria);

    // Asignamos los datos de salida
    outData.data = [categoriaCreated];
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

export const updateCategoria = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const categoriaId = parseInt(req.params.id as string);
    const categoria = plainToClass(Categoria, req.body);

    // Actualizamos el usuario
    const categoriaUpdated = await update(categoriaId, categoria);

    // Asignamos los datos de salida
    outData.data = [categoriaUpdated];
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

export const deleteCategoria = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const categoriaId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(categoriaId);

    res.status(200).send("Categoria eliminada");
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
