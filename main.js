(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./onboarding/onboarding.module": [
		"./src/app/onboarding/onboarding.module.ts",
		"onboarding-onboarding-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'student-onboard',
        loadChildren: './onboarding/onboarding.module#OnboardingModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'students-onboarding';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_core_commonComponents_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/core/commonComponents/confirmation-dialog/confirmation-dialog.component */ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _app_core_commonComponents_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/core/commonComponents/confirmation-dialog/confirmation-dialog.service */ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_commonComponents_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/commonComponents/header/header.component */ "./src/app/core/commonComponents/header/header.component.ts");
/* harmony import */ var _core_commonComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/commonComponents/footer/footer.component */ "./src/app/core/commonComponents/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _core_commonComponents_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _core_commonComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _app_core_commonComponents_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
            ],
            entryComponents: [_app_core_commonComponents_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmationDialogComponent"]],
            providers: [_app_core_commonComponents_confirmation_dialog_confirmation_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    {{ message }}\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"dismiss()\">{{ btnCancelText }}</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\n  </div>"

/***/ }),

/***/ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfirmationDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogService", function() { return ConfirmationDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/app/core/commonComponents/confirmation-dialog/confirmation-dialog.component.ts");




var ConfirmationDialogService = /** @class */ (function () {
    function ConfirmationDialogService(modalService) {
        this.modalService = modalService;
    }
    ConfirmationDialogService.prototype.confirm = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modalRef = this.modalService.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    ConfirmationDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ConfirmationDialogService);
    return ConfirmationDialogService;
}());



/***/ }),

/***/ "./src/app/core/commonComponents/footer/footer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/commonComponents/footer/footer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tbW9uQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/commonComponents/footer/footer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/commonComponents/footer/footer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made with <i class=\"fa fa-copyright\"></i> by <a href=\"https://twitter.com/beeman_nl\">Ayush</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/commonComponents/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/commonComponents/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/commonComponents/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/commonComponents/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/commonComponents/header/header.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/commonComponents/header/header.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nameSpan{\r\n        /* margin-left: 2%; */\r\n        display: inline-block;\r\n        /* position: absolute; */\r\n        /* right: 103px; */\r\n        width: 85px;\r\n        margin-top: 4%;\r\n        color: white;\r\n        font-family: inherit\r\n}\r\n\r\n.wrapper{\r\n    font-size: 17px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21tb25Db21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsY0FBYztRQUNkLFlBQVk7UUFDWjtBQUNSOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tbW9uQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZVNwYW57XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDIlOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgICAgLyogcmlnaHQ6IDEwM3B4OyAqL1xyXG4gICAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdFxyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICAgIGZvbnQtc2l6ZTogMTdweFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/commonComponents/header/header.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/commonComponents/header/header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" expand=\"lg\">\n      <div class=\"container wrapper\">\n        <a class=\"navbar-brand\" href=\"/\"> <img src=\"assets/images/student2.png\" alt=\"\" width=\"40px\" height=\"40px\">&nbsp;\n          Student Onboarding</a>\n        <div class=\"navbar-expand mr-auto\">\n          <div class=\"navbar-nav\">\n            <a routerLink=\"/student-onboard/create\" [routerLinkActive]=\"['active']\"\n              *ngIf=\"service.isLoggedIn.value===true\" class=\"nav-item nav-link\">OnBoarding</a>\n            <a routerLink=\"/student-onboard/list\" [routerLinkActive]=\"['active']\"\n              *ngIf=\"service.isLoggedIn.value===true\" class=\"nav-item nav-link\">Students List</a>\n          </div>\n        </div>\n        <div class=\"navbar-expand ml-auto navbar-nav\">\n          <div class=\"navbar-nav\">\n            <div class=\"nameSpan\" *ngIf=\"service.isLoggedIn.value===true\">Hi {{username}}</div>\n            <button *ngIf=\"service.isLoggedIn.value===true\" class=\"btn btn-dark mt-1\" (click)=\"logout()\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/core/commonComponents/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/commonComponents/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.service */ "./src/app/core/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, router) {
        this.service = service;
        this.router = router;
        this.username = 'Ayush';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.service.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/commonComponents/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/commonComponents/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/services/shared.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/shared.service.ts ***!
  \*************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    /**
     * function to make the user logout
     */
    SharedService.prototype.logout = function () {
        this.isLoggedIn.next(false);
        localStorage.removeItem('username');
    };
    SharedService.prototype.login = function () {
        this.isLoggedIn.next(true);
    };
    /**
     * function to check id user is logged in or not
     */
    SharedService.prototype.checkLogin = function () {
        if (localStorage.getItem('username')) {
            this.isLoggedIn.next(true);
            return true;
        }
        return false;
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP\Workshop 2\Assignment\code\students-onboarding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map