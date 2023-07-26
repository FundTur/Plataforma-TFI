import { Resolucion } from "../model/Resolucion";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Resolucion[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("resolucion")
    .from(Resolucion, "resolucion");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); 
} 

export async function getById(id: number): Promise<Resolucion | null> {
  return await Resolucion.findOneBy({
    id: id,
  });
}

export async function create(resolucion: Resolucion): Promise<Resolucion> {
  return await resolucion.save();
}

export async function update(
  id: number,
  resolucion: Resolucion
): Promise<Resolucion> {
  const ResolucionFind = await getById(id);

  if (!ResolucionFind) {
    throw new Error("Resolucion no encontrada");
  }

  return await resolucion.save();
}

export async function remove(id: number): Promise<Resolucion | null> {
  const resolucion = await getById(id);

 
  if (!resolucion) {
    throw new Error("Resolucion con id" + id + "no encontrado");
  }

  return await resolucion.remove();
}
