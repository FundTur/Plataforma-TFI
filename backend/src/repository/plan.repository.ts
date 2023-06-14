import { Plan } from "../model/Plan";
import { AppSource } from "../db";

// Consultas
export async function getAll(
  page: number,
  limit: number
): Promise<[Plan[], number]> {
  const query = AppSource.createQueryBuilder()
    .select("plan")
    .from(Plan, "plan");

  if (limit != -1) {
    query.skip((page - 1) * limit);
    query.take(limit);
  }

  return await query.getManyAndCount();
}

export async function getById(id: number): Promise<Plan | null> {
  return await Plan.findOneBy({
    id: id,
  });
}

// Mutaciones
export async function create(plan: Plan): Promise<Plan> {
  return await plan.save();
}

export async function update(id: number, plan: Plan): Promise<Plan> {
  const PlanFind = await getById(id);

  if (!PlanFind) {
    throw new Error("Plan no encontrado");
  }

  return await plan.save();
}

export async function remove(id: number): Promise<Plan | null> {
  const plan = await getById(id);

  // Si el usuario existe lo eliminamos
  if (!plan) {
    throw new Error("Plan no encontrado");
  }

  return await plan.remove();
}

// A6051
