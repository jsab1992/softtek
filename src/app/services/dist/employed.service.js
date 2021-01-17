"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployedService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var EmployedService = /** @class */ (function () {
    function EmployedService(http) {
        this.http = http;
        this.baseURL = 'https://softtek-54956-default-rtdb.firebaseio.com/';
    }
    EmployedService.prototype.createEmpleado = function (empleado) {
        return this.http.post(this.baseURL + "/empleados.json", empleado).pipe(operators_1.map(function (resp) {
            empleado.id = resp.name;
            return empleado;
        }));
    };
    EmployedService.prototype.putEmpleado = function (empleado) {
        var empleadoTemp = __assign({}, empleado);
        delete empleadoTemp.id;
        return this.http.put(this.baseURL + "/empleados/" + empleado.id + ".json", empleadoTemp);
    };
    EmployedService.prototype.borrarEmpleado = function (id) {
        return this.http["delete"](this.baseURL + "/empleados/" + id + ".json");
    };
    EmployedService.prototype.getEmpleados = function (id) {
        return this.http.get(this.baseURL + "/empleados/" + id + ".json");
    };
    EmployedService.prototype.getEmpleado = function () {
        return this.http
            .get(this.baseURL + "/empleados.json")
            .pipe(operators_1.map(this.crearArreglo, operators_1.delay(1500)));
    };
    EmployedService.prototype.crearArreglo = function (empleadoObj) {
        var empleados = [];
        Object.keys(empleadoObj).forEach(function (key) {
            var empleado = empleadoObj[key];
            empleado.id = key;
            empleados.push(empleado);
        });
        return empleados;
    };
    EmployedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployedService);
    return EmployedService;
}());
exports.EmployedService = EmployedService;
