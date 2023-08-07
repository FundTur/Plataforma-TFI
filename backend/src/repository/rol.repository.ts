import { Rol } from "../model/Rol";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Rol[], number]> {
  const query = AppSource.createQueryBuilder().select("rol").from(Rol, "rol");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Rol | null> {
  return await Rol.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(rol: Rol): Promise<Rol> {
  return await rol.save();
}

export async function update(id: number, rol: Rol): Promise<Rol> {
  const rolFind = await getById(id);

  if (!rolFind) {
    throw new Error("Rol no encontrado");
  }

  return await rol.save();
}

export async function remove(id: number): Promise<Rol | null> {
  const rol = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!rol) {
    throw new Error("Rol no encontrado");
  }

  return await rol.remove();
}

// A6051
