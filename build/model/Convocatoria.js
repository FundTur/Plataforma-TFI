"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convocatoria = void 0;
const typeorm_1 = require("typeorm");
const Pais_1 = require("./Pais");
const Beneficio_1 = require("./Beneficio");
const Usuario_1 = require("./Usuario");
const Categoria_1 = require("./Categoria");
const Observacion_1 = require("./Observacion");
let Convocatoria = class Convocatoria {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Convocatoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pais_1.Pais, (pais) => pais.convocatorias),
    __metadata("design:type", Pais_1.Pais)
], Convocatoria.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "idioma", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Convocatoria.prototype, "valorFinanciamiento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Beneficio_1.Beneficio, (beneficio) => beneficio.convocatoria),
    __metadata("design:type", Array)
], Convocatoria.prototype, "beneficios", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Usuario_1.Usuario),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Convocatoria.prototype, "participantes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "moneda", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "requisitos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Categoria_1.Categoria, (categoria) => categoria.convocatorias),
    __metadata("design:type", Categoria_1.Categoria)
], Convocatoria.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Observacion_1.Observacion, (observacion) => observacion.convocatoria),
    __metadata("design:type", Array)
], Convocatoria.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Convocatoria.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Convocatoria.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Convocatoria.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Convocatoria.prototype, "isPremium", void 0);
Convocatoria = __decorate([
    (0, typeorm_1.Entity)("convocatoria")
], Convocatoria);
exports.Convocatoria = Convocatoria;
