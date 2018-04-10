"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ViewComponent = class ViewComponent {
    //
    constructor(_router, _route, _authenticationService, _coursesService) {
        this._router = _router;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._coursesService = _coursesService;
        this.allowEdit = false;
    }
    //
    ngOnInit() {
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['courseId'];
            this._coursesService
                .read(articleId)
                .subscribe(article => {
                this.course = article;
                this.allowEdit = (this.user && this.user._id === this.
                    course.creator._id);
            }, error => this._router.navigate(['/courses']));
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
    delete() {
        this._coursesService.delete(this.course._id).
            subscribe(deletedCourse => this._router.navigate(['/courses']), error => this.errorMessage = error);
    }
};
ViewComponent = __decorate([
    core_1.Component({
        selector: 'view',
        templateUrl: 'app/courses/view/view.template.html',
    })
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map