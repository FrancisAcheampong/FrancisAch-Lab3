"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
const Observable_1 = require("rxjs/Observable");
const core_1 = require("@angular/core");
let CoursesService = class CoursesService {
    constructor(_http) {
        this._http = _http;
        this._baseURL = 'api/courses';
    }
    create(course) {
        return this._http
            .post(this._baseURL, course)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    read(courseId) {
        return this._http
            .get(`${this._baseURL}/${courseId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    update(course) {
        return this._http
            .put(`${this._baseURL}/${course._id}`, course).map((res) => res.json())
            .catch(this.handleError);
    }
    delete(courseId) {
        return this._http
            .delete(`${this._baseURL}/${courseId}`)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    list() {
        return this._http
            .get(this._baseURL)
            .map((res) => res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    }
};
CoursesService = __decorate([
    core_1.Injectable()
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map