import { Imagen } from "../model/Imagen";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Imagen[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("imagen")
    .from(Imagen, "imagen");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); //trae array de objeto del tipo beneficio + cantidad de registros en total
} //usamos la palabra clave "await" para esperar a que la promesa se resuelva
//antes de devolver el resultado de la función "getAll".

export async function getById(id: number): Promise<Imagen | null> {
  return await Imagen.findOneBy({
    uuid_imagen: id, //trae registro del tipo de beneficio por id
  });
}

export async function create(imagen: Imagen): Promise<Imagen> {
  return await imagen.save();
}

export async function update(
  uuid_imagen: number,
  imagen: Imagen
): Promise<Imagen> {
  const ImagenFind = await getById(uuid_imagen);

  if (!ImagenFind) {
    throw new Error("Imagen no encontrada");
  }

  return await imagen.save();
}

export async function remove(uuid_imagen: number): Promise<Imagen | null> {
  const imagen = await getById(uuid_imagen);

  // Si el usuario existe lo eliminamos
  if (!imagen) {
    throw new Error("Imagen con id" + uuid_imagen + "no encontrado");
  }

  return await imagen.remove();
}

// Crear rama con contenido de otra rama comando de git
// git checkout -b <nombre de la nueva rama> <rama de la que se copia el contenido>
