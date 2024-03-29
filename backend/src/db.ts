import { DataSource } from "typeorm";

//Begin entities
import { Beneficio } from "./model/Beneficio";
import { Categoria } from "./model/Categoria";
import { Ciudad } from "./model/Ciudad";
import { Convocatoria } from "./model/Convocatoria";
import { Observacion } from "./model/Observacion";
import { Pago } from "./model/Pago";
import { Pais } from "./model/Pais";
import { Plan } from "./model/Plan";
import { Rol } from "./model/Rol";
import { Usuario } from "./model/Usuario";
import { Auditoria } from "./model/Auditoria";
import { Evento } from "./model/Evento";
import { Imagen } from "./model/Imagen";
import { Archivo } from "./model/Archivo";
import { Resolucion } from "./model/Resolucion";
import { Notificacion } from "./model/Notificacion";

//End entities

// Dotenv configuration
require("dotenv").config();

export const AppSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
  entities: [
    Beneficio,
    Categoria,
    Ciudad,
    Convocatoria,
    Observacion,
    Pago,
    Pais,
    Plan,
    Rol,
    Usuario,
    Auditoria,
    Evento,
    Imagen,
    Archivo,
    Resolucion,
    Notificacion
  ],
  synchronize: true,
  logging: true,
});
