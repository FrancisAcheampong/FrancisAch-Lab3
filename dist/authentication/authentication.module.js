"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const authentication_routes_1 = require("./authentication.routes");
const authentication_component_1 = require("./authentication.component");
const signin_component_1 = require("./signin/signin.component");
const signup_component_1 = require("./signup/signup.component");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            router_1.RouterModule.forChild(authentication_routes_1.AuthenticationRoutes),
        ],
        declarations: [
            authentication_component_1.AuthenticationComponent,
            signin_component_1.SigninComponent,
            signup_component_1.SignupComponent,
        ]
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map