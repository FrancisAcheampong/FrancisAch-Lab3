"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const courses_routes_1 = require("./courses.routes");
const courses_component_1 = require("./courses.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const view_component_1 = require("./view/view.component");
const edit_component_1 = require("./edit/edit.component");
let CoursesModule = class CoursesModule {
};
CoursesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(courses_routes_1.CoursesRoutes),
        ],
        declarations: [
            courses_component_1.CoursesComponent,
            create_component_1.CreateComponent,
            list_component_1.ListComponent,
            view_component_1.ViewComponent,
            edit_component_1.EditComponent,
        ]
    })
], CoursesModule);
exports.CoursesModule = CoursesModule;
//# sourceMappingURL=courses.module.js.map