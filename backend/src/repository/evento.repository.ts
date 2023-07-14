import { Evento } from "../model/Evento";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Evento[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("evento")
    .from(Evento, "evento");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); //trae array de objeto del tipo beneficio + cantidad de registros en total
} //usamos la palabra clave "await" para esperar a que la promesa se resuelva
//antes de devolver el resultado de la función "getAll".

export async function getById(id: number): Promise<Evento | null> {
  return await Evento.findOneBy({
    id_evento: id, //trae registro del tipo de beneficio por id
  });
}

export async function create(evento: Evento): Promise<Evento> {
  return await evento.save();
}

export async function update(
  id_evento: number,
  evento: Evento
): Promise<Evento> {
  const EventoFind = await getById(id_evento);

  if (!EventoFind) {
    throw new Error("Evento no encontrado");
  }

  return await evento.save();
}

export async function remove(id_evento: number): Promise<Evento | null> {
  const evento = await getById(id_evento);

  // Si el usuario existe lo eliminamos
  if (!evento) {
    throw new Error("Evento con id" + id_evento + "no encontrado");
  }

  return await evento.remove();
}

// Crear rama con contenido de otra rama comando de git
// git checkout -b <nombre de la nueva rama> <rama de la que se copia el contenido>
