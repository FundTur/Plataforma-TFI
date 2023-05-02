import { Pago } from "../model/Pago";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Pago[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("pago")
    .from(Pago, "pago");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Pago | null> {
  return await Pago.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(pago: Pago): Promise<Pago> {
  return await pago.save();
}

export async function update(id: number, pago: Pago): Promise<Pago> {
  const pagoFind = await getById(id);

  if (!pagoFind) {
    throw new Error("Pago con id" + id + "no encontrado");
  }

  return await pago.save();
}

export async function remove(id: number): Promise<Pago | null> {
  const pago = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!pago) {
      throw new Error("Pago no encontrado");
  }

  return await pago.remove();
}

// A6051