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

  return await query.getManyAndCount(); 
 }

export async function getById(id: number): Promise<Imagen | null> {
  return await Imagen.findOneBy({
    id: id, 
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


  if (!imagen) {
    throw new Error("Imagen con id" + uuid_imagen + "no encontrado");
  }

  return await imagen.remove();
}


// Crear rama con contenido de otra rama comando de git
// git checkout -b <nombre de la nueva rama> <rama de la que se copia el contenido
