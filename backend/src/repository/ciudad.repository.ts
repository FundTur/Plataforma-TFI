import { Ciudad } from "../model/Ciudad";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Ciudad[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("ciudad")
    .from(Ciudad, "ciudad");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Ciudad | null> {
  return await Ciudad.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(ciudad: Ciudad): Promise<Ciudad> {
  return await ciudad.save();
}

export async function update(id: number, ciudad: Ciudad): Promise<Ciudad> {
  const ciudadFind = await getById(id);

  if (!ciudadFind) {
    throw new Error("Ciudad no encontrada");
  }

  return await ciudad.save();
}

export async function remove(id: number): Promise<Ciudad | null> {
  const ciudad = await getById(id);

  // Si la categoria existe lo eliminamos
  if (!ciudad) {
      throw new Error("Ciudad no encontrada");
  }

  return await ciudad.remove();
}

