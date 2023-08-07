import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import routes from "./controller/index.routes";

//Configuracion
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/api", routes);

export default app;
