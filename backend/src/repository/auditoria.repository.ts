import { Auditoria } from "../model/Auditoria";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Auditoria[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("auditoria")
    .from(Auditoria, "beneficio");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount(); 
} 

export async function getById(id: number): Promise<Auditoria | null> {
  return await Auditoria.findOneBy({
    id_auditoria: id, 
  });
}

export async function create(auditoria: Auditoria): Promise<Auditoria> {
  return await auditoria.save();
}

export async function update(
  id_auditoria: number,
  auditoria: Auditoria
): Promise<Auditoria> {
  const AuditoriaFind = await getById(id_auditoria);

  if (!AuditoriaFind) {
    throw new Error("Auditoría no encontrado");
  }

  return await auditoria.save();
}

export async function remove(id_auditoria: number): Promise<Auditoria | null> {
  const auditoria = await getById(id_auditoria);

 
  if (!auditoria) {
    throw new Error("Auditoría con id" + id_auditoria + "no encontrada");
  }

  return await auditoria.remove();
}


