"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let EditComponent = class EditComponent {
    constructor(_router, _route, _coursesService) {
        this._router = _router;
        this._route = _route;
        this._coursesService = _coursesService;
        this.course = {};
    }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let courseId = params['courseId'];
            this._coursesService.read(courseId).subscribe(course => {
                this.course = course;
            }, error => this._router.navigate(['/courses']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._coursesService.update(this.course).subscribe(savedCourse => this._router.navigate(['/courses', savedCourse._id]), error => this.errorMessage =
            error);
    }
};
EditComponent = __decorate([
    core_1.Component({
        selector: 'edit',
        templateUrl: 'app/courses/edit/edit.template.html'
    })
], EditComponent);
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map