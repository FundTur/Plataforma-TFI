import { DataSource } from "typeorm";

export const AppSource = new DataSource({
  type: "mysql",
  host: "192.168.100.70",
  username: "root",
  password: "root",
  database: "development",
  port: 3306,
  entities: ["./src/model/*.ts"],
  synchronize: true,
  logging: true,
});
