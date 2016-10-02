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
var core_1 = require('@angular/core');
var students_data_1 = require('../datas/students.data');
var StudentService = (function () {
    function StudentService() {
    }
    StudentService.prototype.getStudents = function () {
        return Promise.resolve(students_data_1.STUDENTS);
    };
    // Ajout d'une fonction récupérant l’ID de la route : à propos des routes dynamiques https://goo.gl/Qe53YN
    StudentService.prototype.getStudent = function (id) {
        // Définition des variables à utiliser dans la route dynamique
        return this.getStudents().then(function (students) { return students.find(function (singleStudent) { return singleStudent.id === id; }); });
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
;
//# sourceMappingURL=students.service.js.map