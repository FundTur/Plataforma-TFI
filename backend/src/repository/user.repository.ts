import { Usuario } from "../model/Usuario";
import { AppSource } from "../db";
import DBError from "../dto/errors/DbError";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Usuario[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("usuario")
    .from(Usuario, "usuario");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Usuario | null> {
  const userFind = await Usuario.findOneBy({ id: id });

  if (!userFind) {
    throw new DBError("Usuario no encontrado");
  }

  return userFind;
}

// Mutaciones
export async function create(usuario: Usuario): Promise<Usuario> {
  return await usuario.save();
}

export async function update(id: number, usuario: Usuario): Promise<Usuario> {
  const usuarioFind = await getById(id);

  if (!usuarioFind) {
    throw new DBError("Usuario no encontrado");
  }

  // Actualizamos los datos
  usuario.id = id;

  return await usuario.save();
}

export async function remove(id: number): Promise<Usuario | null> {
  const usuario = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!usuario) {
    throw new DBError("Usuario no encontrado");
  }

  return await usuario.remove();
}

// A6051
