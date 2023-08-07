import { Archivo } from "../model/Archivo";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Archivo[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("archivo")
    .from(Archivo, "archivo");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); 
} 

export async function getById(id: number): Promise<Archivo | null> {
  return await Archivo.findOneBy({
    id: id,
  });
}

export async function create(archivo: Archivo): Promise<Archivo> {
  return await archivo.save();
}

export async function update(
  id: number,
  archivo: Archivo
): Promise<Archivo> {
  const ArchivoFind = await getById(id);

  if (!ArchivoFind) {
    throw new Error("Archivo no encontrado");
  }

  return await archivo.save();
}

export async function remove(id: number): Promise<Archivo | null> {
  const archivo = await getById(id);

 
  if (!archivo) {
    throw new Error("Archivo con id" + id + "no encontrado");
  }

  return await archivo.remove();
}