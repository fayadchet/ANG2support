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
// Création du service : à propos des services https://goo.gl/uz1cpM
var core_1 = require('@angular/core');
var students_data_1 = require('../datas/students.data');
// Injecter le service dans l'application
var StudentService = (function () {
    function StudentService() {
    }
    // Création d'un fonction pour charger les données
    StudentService.prototype.getStudents = function () {
        return students_data_1.STUDENTS;
    };
    ;
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
;
//# sourceMappingURL=students.service.js.map