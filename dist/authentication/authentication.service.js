"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
    }
    isLoggedIn() {
        return (!!this.user);
    }
    signin(credentials) {
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError);
    }
    signup(user) {
        let body = JSON.stringify(user);
        let headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(res => this.user = res.json())
            .catch(this.handleError);
    }
    handleError(error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message ||
            'Server error');
    }
};
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map