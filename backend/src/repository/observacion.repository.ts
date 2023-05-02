import { Observacion } from "../model/Observacion";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Observacion[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("observacion")
    .from(Observacion, "observacion");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Observacion | null> {
  return await Observacion.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(observacion: Observacion): Promise<Observacion> {
  return await observacion.save();
}

export async function update(id: number, observacion: Observacion): Promise<Observacion> {
  const observacionFind = await getById(id);

  if (!observacionFind) {
    throw new Error("Observación no encontrada");
  }

  return await observacion.save();
}

export async function remove(id: number): Promise<Observacion | null> {
  const observacion = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!observacion) {
      throw new Error("Observación no encontrada");
  }

  return await observacion.remove();
}

// A6051