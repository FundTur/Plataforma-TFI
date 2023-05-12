import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import { getAll, getById, create, update, remove } from "../repository/rol.repository";
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
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const rol = plainToClass(Rol, req.body);

    // Creamos el usuario
    const RolCreated = await create(rol);

    // Asignamos los datos de salida
    outData.data = [RolCreated];
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

export const updateRol = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const rolId = parseInt(req.params.id as string);
    const rol = plainToClass(Rol, req.body);

    // Actualizamos el usuario
    const rolUpdated = await update(rolId, rol);

    // Asignamos los datos de salida
    outData.data = [rolUpdated];
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

export const deleteRol = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const rolId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(rolId);

    res.status(200).send("Rol eliminado");
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