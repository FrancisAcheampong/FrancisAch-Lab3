"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SigninComponent = class SigninComponent {
    constructor(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.credentials = {};
    }
    //handle any value event with the
    //first arrow function and any error with the second arrow function
    signin() {
        this._authenticationService.signin(this.credentials).subscribe(result => this._router.navigate(['/']), error => this.errorMessage = error);
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'signin',
        templateUrl: 'app/authentication/signin/signin.template.html',
        styleUrls: ['app/authentication/signin/signin.template.css']
    })
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map