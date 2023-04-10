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
exports.Pago = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
const Plan_1 = require("./Plan");
let Pago = class Pago {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pago.prototype, "dateCreated", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pago.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (usuario) => usuario.pagos),
    __metadata("design:type", Usuario_1.Usuario)
], Pago.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plan_1.Plan, (plan) => plan.pagos),
    __metadata("design:type", Plan_1.Plan)
], Pago.prototype, "plan", void 0);
Pago = __decorate([
    (0, typeorm_1.Entity)("pago")
], Pago);
exports.Pago = Pago;
