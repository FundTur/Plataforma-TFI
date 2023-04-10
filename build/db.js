"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppSource = new typeorm_1.DataSource({
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
