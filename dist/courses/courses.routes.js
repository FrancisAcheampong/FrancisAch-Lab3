"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_component_1 = require("./courses.component");
const create_component_1 = require("./create/create.component");
const list_component_1 = require("./list/list.component");
const view_component_1 = require("./view/view.component");
const edit_component_1 = require("./edit/edit.component");
exports.CoursesRoutes = [{
        path: 'courses',
        component: courses_component_1.CoursesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':courseId', component: view_component_1.ViewComponent },
            { path: ':courseId/edit', component: edit_component_1.EditComponent }
        ],
    }];
//# sourceMappingURL=courses.routes.js.map