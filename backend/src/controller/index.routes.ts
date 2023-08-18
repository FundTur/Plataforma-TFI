import { Router } from "express";

import userRouter from "./user.routes";
import rolRouter from "./rol.routes";
import planRouter from "./plan.routes";
import paisRouter from "./pais.routes";
import pagoRouter from "./pago.routes";
import observacionRouter from "./observacion.routes";
import convocatoriaRouter from "./convocatoria.routes";
import ciudadRouter from "./ciudad.routes";
import categoriaRouter from "./categoria.routes";
import beneficioRouter from "./beneficio.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/rol", rolRouter);
routes.use("/plan", planRouter);
routes.use("/pais", paisRouter);
routes.use("/pago", pagoRouter);
routes.use("/observacion", observacionRouter);
routes.use("/convocatoria", convocatoriaRouter);
routes.use("/ciudad", ciudadRouter);
routes.use("/categoria", categoriaRouter);
routes.use("/beneficio", beneficioRouter);

export default routes;
