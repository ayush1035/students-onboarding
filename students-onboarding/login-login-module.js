(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/core/guards/auth-guard-for-login.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/guards/auth-guard-for-login.service.ts ***!
  \*************************************************************/
/*! exports provided: AuthGuardForLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardForLoginService", function() { return AuthGuardForLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/core/services/shared.service.ts");




var AuthGuardForLoginService = /** @class */ (function () {
    function AuthGuardForLoginService(_router, sharedService) {
        this._router = _router;
        this.sharedService = sharedService;
    } // initializing the router
    AuthGuardForLoginService.prototype.canActivate = function (next, state) {
        if (!this.sharedService.checkLogin()) {
            return true; // allow the access of the page
        }
        else {
            this._router.navigate(['/student-onboard']); // redirect to login page
        }
    };
    AuthGuardForLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], AuthGuardForLoginService);
    return AuthGuardForLoginService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _core_guards_auth_guard_for_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/guards/auth-guard-for-login.service */ "./src/app/core/guards/auth-guard-for-login.service.ts");





var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_core_guards_auth_guard_for_login_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardForLoginService"]]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin\r\n{\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n}\r\n.form-signin .form-signin-heading, .form-signin .checkbox\r\n{\r\n    margin-bottom: 10px;\r\n}\r\n.form-signin .checkbox\r\n{\r\n    font-weight: normal;\r\n}\r\n.form-signin .form-control\r\n{\r\n    position: relative;\r\n    font-size: 16px;\r\n    height: auto;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus\r\n{\r\n    z-index: 2;\r\n}\r\n.form-signin input[type=\"text\"]\r\n{\r\n    margin-bottom: -1px;\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n}\r\n.form-signin input[type=\"password\"]\r\n{\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n.account-wall\r\n{\r\n    margin-top: 20px;\r\n    padding: 40px 0px 20px 0px;\r\n    background-color: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.login-title\r\n{\r\n    color: #555;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    display: block;\r\n}\r\n.profile-img\r\n{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n.need-help\r\n{\r\n    margin-top: 10px;\r\n}\r\n.new-account\r\n{\r\n    display: block;\r\n    margin-top: 10px;\r\n}\r\n.login-form{\r\n    margin: auto;\r\n}\r\n.error-message{\r\n    color: red;\r\n    margin-left: 7%;\r\n}\r\n.login-container{\r\n    margin-top: 5%\r\n}\r\n.image-1 {\r\n    position: absolute;\r\n    bottom: -12px;\r\n    left: -231px;\r\n    z-index: 99; }\r\n.image-2 {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: -199px;\r\n    z-index: -2;;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBR2Isc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksVUFBVTtBQUNkO0FBQ0E7O0lBRUksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBR3pCLDBDQUEwQztBQUM5QztBQUNBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBR2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVcsRUFBRTtBQUVmO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pblxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1zaWduaW4taGVhZGluZywgLmZvcm0tc2lnbmluIC5jaGVja2JveFxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3hcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1c1xyXG57XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXVxyXG57XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl1cclxue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG4uYWNjb3VudC13YWxsXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAyMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5sb2dpbi10aXRsZVxyXG57XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHJvZmlsZS1pbWdcclxue1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5uZWVkLWhlbHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubmV3LWFjY291bnRcclxue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5sb2dpbi1mb3Jte1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JVxyXG59XHJcblxyXG4uaW1hZ2UtMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMnB4O1xyXG4gICAgbGVmdDogLTIzMXB4O1xyXG4gICAgei1pbmRleDogOTk7IH1cclxuICBcclxuICAuaW1hZ2UtMiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogLTE5OXB4O1xyXG4gICAgei1pbmRleDogLTI7O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4 login-form\">\n      <h5 class=\"error-message\">{{errorMessage}}</h5>\n      <h4 class=\"text-center new-account\">Welcome to Student Onboarding Portal</h4>\n      <div class=\"account-wall\">\n        <img class=\"profile-img\"\n          src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgcHFDdtVVldvF_nywPeOH3OGKPfCUcWL3QRI3cHh5KiKtbaj\"\n          alt=\"\">\n          <h3 style=\"text-align: center\">Please Sign In</h3>\n          <!-- <img src=\"assets/images/image-1.png\" alt=\"\" class=\"image-1\"> -->\n        <form #loginform=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"onSubmit($event)\">\n          <input type=\"text\" class=\"form-control\"  name=\"username\" placeholder=\"Username\" #username=\"ngModel\"\n            [class.is-invalid]=\"username.invalid && username.touched\" [(ngModel)]=\"userModel.username\"\n            required >\n          <small class=\"text-danger\" [class.d-none]=\"username.valid || username.untouched\">Username is required</small>\n          <br>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password = \"ngModel\" name=\"password\" [(ngModel)]=\"userModel.password\"  required>\n          <small class=\"text-danger\" [class.d-none]=\"password.valid || password.untouched\">Password is required</small>\n          <br>\n          <button class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"loginform.form.invalid\" type=\"submit\">\n            Sign in</button>\n        </form>\n        <!-- <img src=\"assets/images/image-2.png\" alt=\"\" class=\"image-2\"> -->\n      </div>\n    </div>\n  </div>\n</div>\n<nav class=\"navbar navbar-dark bg-primary mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n      Made by <a href=\"https://github.com/ayush1035\">Ayush 3145844</a>&nbsp; <i class=\"fa fa-copyright\"></i>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user */ "./src/app/login/shared/user.ts");
/* harmony import */ var _shared_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/login.service */ "./src/app/login/shared/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/shared.service */ "./src/app/core/services/shared.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants */ "./src/app/login/shared/constants.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, sharedService) {
        this.loginService = loginService;
        this.router = router;
        this.sharedService = sharedService;
        this.userModel = new _shared_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', ''); // at first username and password will be empty.
        this.errorMessage = '';
    } // initializing the Login service and router
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @param event (event triggered on clicking the signin button)
     */
    LoginComponent.prototype.onSubmit = function (event) {
        if (this.loginService.verifyUser(this.userModel)) {
            //if the credentials match we will route to landing page
            this.sharedService.login();
            this.router.navigate(['/student-onboard']);
        }
        else {
            //if the credentials do not match we will dispay an error message on the screen
            this.errorMessage = _shared_constants__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE"];
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/shared/constants.ts":
/*!*******************************************!*\
  !*** ./src/app/login/shared/constants.ts ***!
  \*******************************************/
/*! exports provided: USERNAME, PASSWORD, ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERNAME", function() { return USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD", function() { return PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MESSAGE", function() { return ERROR_MESSAGE; });
var USERNAME = 'admin';
var PASSWORD = 'admin';
var ERROR_MESSAGE = 'Username or Password is Invalid!';


/***/ }),

/***/ "./src/app/login/shared/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/login/shared/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/login/shared/constants.ts");



var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    /**
     *
     * @param user User that needs to be verified
     * function to verify if the username or password is correct
     */
    LoginService.prototype.verifyUser = function (user) {
        if (user.username === _constants__WEBPACK_IMPORTED_MODULE_2__["USERNAME"] && user.password === _constants__WEBPACK_IMPORTED_MODULE_2__["PASSWORD"]) //if username and password matches
         {
            localStorage.setItem('username', user.username); // setting the username in the localStorage
            return true;
        }
        else
            return false; // if the username and password does not match
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/shared/user.ts":
/*!**************************************!*\
  !*** ./src/app/login/shared/user.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map