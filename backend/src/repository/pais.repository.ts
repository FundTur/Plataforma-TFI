import { Pais } from "../model/Pais";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Pais[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("pais")
    .from(Pais, "pais");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Pais | null> {
  return await Pais.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(pais: Pais): Promise<Pais> {
  return await pais.save();
}

export async function update(id: number, pais: Pais): Promise<Pais> {
  const paisFind = await getById(id);

  if (!paisFind) {
    throw new Error("Pais no encontrado");
  }

  return await pais.save();
}

export async function remove(id: number): Promise<Pais | null> {
  const pais = await getById(id);

  // Si el pais existe lo eliminamos
  if (!pais) {
    throw new Error("Pais no encontrado");
  }

  return await pais.remove();
}
