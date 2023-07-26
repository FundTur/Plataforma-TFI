import { Notificacion } from "../model/Notificacion";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Notificacion[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("notificacion")
    .from(Notificacion, "notificacion");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); 
} 

export async function getById(id: number): Promise<Notificacion | null> {
  return await Notificacion.findOneBy({
    id: id,
  });
}

export async function create(notificacion: Notificacion): Promise<Notificacion> {
  return await notificacion.save();
}

export async function update(
  id: number,
  notificacion: Notificacion
): Promise<Notificacion> {
  const NotificacionFind = await getById(id);

  if (!NotificacionFind) {
    throw new Error("Notificacion no encontrado");
  }

  return await notificacion.save();
}

export async function remove(id: number): Promise<Notificacion | null> {
  const notificacion = await getById(id);

 
  if (!notificacion) {
    throw new Error("Notificacion con id" + id + "no encontrada");
  }

  return await notificacion.remove();
}

