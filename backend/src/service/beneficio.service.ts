import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import DBError from "../dto/errors/DbError";
import { getAll, getById, create, update, remove } from "../repository/beneficio.repository";
import OutData from "../dto/outDataDTO";
import { Beneficio } from "../model/Beneficio";


export const getAllBeneficios = async (req: Request, res: Response) => {
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
    const [beneficio, totalCount] = await getAll(page, limit);

    // Asignamos los datos de salida
    outData.data = beneficio;

    // Si el limite es -1 significa que no se aplico ningun limite
    if (limit === -1) {
      outData.metadata = {
        totalCount: beneficio.length,
        filterCount: beneficio.length,
      };
    }
    // Si el limite es diferente de -1 significa que se aplico un limite de items para la consulta
    else {
      outData.metadata = {
        totalCount: totalCount,
        filterCount: beneficio.length,
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

export const getBeneficio = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const BeneficioId = parseInt(req.params.id as string);

    // Obtenemos los datos de la base de datos y los añadimos al contenedor de datos de salida
    const benef: any[] = [await getById(BeneficioId)];

    outData.data = benef;

    res.status(200).json(outData);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: error.message, stack: error.stack, name: error.name });
    }
  }
};

export const createBeneficio = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const beneficio = plainToClass(Beneficio, req.body);

    // Creamos el usuario
    const beneficioCreated = await create(beneficio);

    // Asignamos los datos de salida
    outData.data = [beneficioCreated];
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

export const updateBeneficio = async (req: Request, res: Response) => {
  try {
    // Creamos el contenedor de datos de salida
    const outData = new OutData();

    // Obtenemos los datos de la peticion
    const beneficioId = parseInt(req.params.id as string);
    const beneficio = plainToClass(Beneficio, req.body);

    // Actualizamos el usuario
    const beneficioUpdated = await update(beneficioId, beneficio);

    // Asignamos los datos de salida
    outData.data = [beneficioUpdated];
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

export const deleteBeneficio = async (req: Request, res: Response) => {
  try {
    // Obtenemos los datos de la peticion
    const beneficioId = parseInt(req.params.id as string);

    // Eliminamos el usuario
    await remove(beneficioId);

    res.status(200).send("Beneficio eliminada");
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



