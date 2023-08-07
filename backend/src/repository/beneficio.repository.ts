import { Beneficio } from "../model/Beneficio";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Beneficio[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("beneficio")
    .from(Beneficio, "beneficio");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); //trae array de objeto del tipo beneficio + cantidad de registros en total
} //usamos la palabra clave "await" para esperar a que la promesa se resuelva
//antes de devolver el resultado de la función "getAll".

export async function getById(id: number): Promise<Beneficio | null> {
  return await Beneficio.findOneBy({
    id: id, //trae registro del tipo de beneficio por id
  });
}

export async function create(beneficio: Beneficio): Promise<Beneficio> {
  return await beneficio.save();
}

export async function update(
  id: number,
  beneficio: Beneficio
): Promise<Beneficio> {
  const BeneficioFind = await getById(id);

  if (!BeneficioFind) {
    throw new Error("Beneficio no encontrado");
  }

  return await beneficio.save();
}

export async function remove(id: number): Promise<Beneficio | null> {
  const beneficio = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!beneficio) {
    throw new Error("Beneficio con id" + id + "no encontrado");
  }

  return await beneficio.remove();
}

// Crear rama con contenido de otra rama comando de git
// git checkout -b <nombre de la nueva rama> <rama de la que se copia el contenido>
