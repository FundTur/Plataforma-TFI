import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./controller/index.routes";

//Configuracion
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", routes);

export default app;
