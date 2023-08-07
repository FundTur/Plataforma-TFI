import { Convocatoria } from "../model/Convocatoria";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Convocatoria[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("convocatoria")
    .from(Convocatoria, "convocatoria");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Convocatoria | null> {
  return await Convocatoria.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(
  convocatoria: Convocatoria
): Promise<Convocatoria> {
  return await convocatoria.save();
}

export async function update(
  id: number,
  convocatoria: Convocatoria
): Promise<Convocatoria> {
  const convocatoriaFind = await getById(id);

  if (!convocatoriaFind) {
    throw new Error("Convocatoria no encontrada");
  }

  return await convocatoria.save();
}

export async function remove(id: number): Promise<Convocatoria | null> {
  const convocatoria = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!convocatoria) {
    throw new Error("Convocatoria no encontrada");
  }

  return await convocatoria.remove();
}

// A6051
