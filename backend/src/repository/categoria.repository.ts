import { Categoria } from "../model/Categoria";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Categoria[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("categoria")
    .from(Categoria, "categoria");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Categoria | null> {
  return await Categoria.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(categoria: Categoria): Promise<Categoria> {
  return await categoria.save();
}

export async function update(
  id: number,
  categoria: Categoria
): Promise<Categoria> {
  const categoriaFind = await getById(id);

  if (!categoriaFind) {
    throw new Error("Categoría no encontrada");
  }

  return await categoria.save();
}

export async function remove(id: number): Promise<Categoria | null> {
  const categoria = await getById(id);

  // Si la categoria existe lo eliminamos
  if (!categoria) {
    throw new Error("Categoría no encontrada");
  }

  return await categoria.remove();
}
