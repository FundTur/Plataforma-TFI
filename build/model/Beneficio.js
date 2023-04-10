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
exports.Beneficio = void 0;
const typeorm_1 = require("typeorm");
const Convocatoria_1 = require("./Convocatoria");
let Beneficio = class Beneficio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Beneficio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Beneficio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Beneficio.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Convocatoria_1.Convocatoria, (convocatoria) => convocatoria.beneficios),
    __metadata("design:type", Convocatoria_1.Convocatoria)
], Beneficio.prototype, "convocatoria", void 0);
Beneficio = __decorate([
    (0, typeorm_1.Entity)('beneficio')
], Beneficio);
exports.Beneficio = Beneficio;
