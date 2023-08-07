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

  return await query.getManyAndCount(); 
} 

export async function getById(id: number): Promise<Evento | null> {
  return await Evento.findOneBy({
    id_evento: id,
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

 
  if (!evento) {
    throw new Error("Evento con id" + id_evento + "no encontrado");
  }

  return await evento.remove();
}


