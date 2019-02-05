(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.HOST = 'https://localhost/api';
        this.dashboardUrl = this.HOST + '/';
        this.themeUrl = this.HOST + '/theme';
        this.presetUrl = this.HOST + '/preset';
        this.httpClient = httpClient;
    }
    ApiService.prototype.getDashboard = function () {
        return this.httpClient.get(this.dashboardUrl);
    };
    ApiService.prototype.getThemes = function () {
        return this.httpClient.get(this.themeUrl);
    };
    ApiService.prototype.createTheme = function (theme) {
        return this.httpClient.post(this.themeUrl + '/new', theme);
    };
    ApiService.prototype.saveTheme = function (theme) {
        return this.httpClient.put(this.themeUrl + '/' + theme.id + '/edit', theme);
    };
    ApiService.prototype.getPresets = function () {
        return this.httpClient.get(this.presetUrl);
    };
    ApiService.prototype.getTheme = function (id) {
        return this.httpClient.get(this.themeUrl + '/' + id);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes/themes.component */ "./src/app/themes/themes.component.ts");
/* harmony import */ var _updates_updates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updates/updates.component */ "./src/app/updates/updates.component.ts");
/* harmony import */ var _presets_presets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presets/presets.component */ "./src/app/presets/presets.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");








var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'themes', component: _themes_themes_component__WEBPACK_IMPORTED_MODULE_3__["ThemesComponent"] },
    { path: 'updates', component: _updates_updates_component__WEBPACK_IMPORTED_MODULE_4__["UpdatesComponent"] },
    { path: 'presets', component: _presets_presets_component__WEBPACK_IMPORTED_MODULE_5__["PresetsComponent"] },
    { path: 'theme/:id', component: _theme_theme_component__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">Company name</a>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n            <div class=\"sidebar-sticky\">\n                <ul class=\"nav flex-column\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/\">\n                            Dashboard\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/themes\">\n                            Themes\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/updates\">\n                            Updates\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/presets\">\n                            Presets\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'backend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _preset_preset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preset/preset.component */ "./src/app/preset/preset.component.ts");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _themes_themes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themes/themes.component */ "./src/app/themes/themes.component.ts");
/* harmony import */ var _presets_presets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./presets/presets.component */ "./src/app/presets/presets.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _updates_updates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updates/updates.component */ "./src/app/updates/updates.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _preset_preset_component__WEBPACK_IMPORTED_MODULE_5__["PresetComponent"],
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_6__["ThemeComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_7__["FieldComponent"],
                _themes_themes_component__WEBPACK_IMPORTED_MODULE_8__["ThemesComponent"],
                _presets_presets_component__WEBPACK_IMPORTED_MODULE_9__["PresetsComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"],
                _updates_updates_component__WEBPACK_IMPORTED_MODULE_11__["UpdatesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    Dashboard\n</p>\n\n<table>\n    <thead>\n    <tr>\n        <th>Theme</th>\n        <th>Affiliate</th>\n        <th>Last Update</th>\n    </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let theme of themes\" data-id=\"{{ theme.id }}\">\n            <td>{{ theme.name }}</td>\n            <td>{{ theme.affiliateId }}</td>\n        </tr>\n    </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.apiService.getDashboard().subscribe(function (data) { return _this.themes = data; });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field form-group\" *ngIf=\"field\">\n    <div class=\"form-group\">\n        <label>Name:</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"field.id\">\n    </div>\n    <div class=\"form-group\">\n        <label>Source:</label>\n        <input class=\"form-control\" [(ngModel)]=\"field.source\">\n    </div>\n    <div class=\"form-group\">\n        <label>Presets:</label>\n        <div class=\"field-presets\">\n            <button type=\"button\" class=\"field-preset btn\"\n                    (click)=\"changePresetState(preset.id)\"\n                 [ngClass]=\"{'btn-secondary' : !isPresetActive(field.presets, preset),\n                            'btn-primary': isPresetActive(field.presets, preset)}\"\n                 *ngFor=\"let preset of presets\"\n            >\n                <label>{{ preset.name }}</label>\n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/field/field.component.scss":
/*!********************************************!*\
  !*** ./src/app/field/field.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldComponent = /** @class */ (function () {
    function FieldComponent() {
    }
    FieldComponent.prototype.ngOnInit = function () {
    };
    FieldComponent.prototype.isPresetActive = function (presets, preset) {
        if (presets === undefined || preset === undefined) {
            return false;
        }
        return (undefined !== presets.find(function (preset1) { return preset.id === preset1.id; }));
    };
    FieldComponent.prototype.changePresetState = function (id) {
        var fieldPreset = this.field.presets.find(function (presetField) { return presetField.id === id; });
        if (fieldPreset === undefined) {
            console.log('test');
            var preset = this.presets.find(function (element) {
                return element.id === id;
            });
            this.field.presets.push(preset);
        }
        else {
            this.field.presets = this.field.presets.filter(function (preset) { return preset.id !== id; });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FieldComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FieldComponent.prototype, "presets", void 0);
    FieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.scss */ "./src/app/field/field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/preset/preset.component.html":
/*!**********************************************!*\
  !*** ./src/app/preset/preset.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  preset works!\n</p>\n"

/***/ }),

/***/ "./src/app/preset/preset.component.scss":
/*!**********************************************!*\
  !*** ./src/app/preset/preset.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNldC9wcmVzZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/preset/preset.component.ts":
/*!********************************************!*\
  !*** ./src/app/preset/preset.component.ts ***!
  \********************************************/
/*! exports provided: PresetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetComponent", function() { return PresetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresetComponent = /** @class */ (function () {
    function PresetComponent() {
    }
    PresetComponent.prototype.ngOnInit = function () {
    };
    PresetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preset',
            template: __webpack_require__(/*! ./preset.component.html */ "./src/app/preset/preset.component.html"),
            styles: [__webpack_require__(/*! ./preset.component.scss */ "./src/app/preset/preset.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresetComponent);
    return PresetComponent;
}());



/***/ }),

/***/ "./src/app/presets/presets.component.html":
/*!************************************************!*\
  !*** ./src/app/presets/presets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  presets works!\n</p>\n"

/***/ }),

/***/ "./src/app/presets/presets.component.scss":
/*!************************************************!*\
  !*** ./src/app/presets/presets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNldHMvcHJlc2V0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/presets/presets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/presets/presets.component.ts ***!
  \**********************************************/
/*! exports provided: PresetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetsComponent", function() { return PresetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresetsComponent = /** @class */ (function () {
    function PresetsComponent() {
    }
    PresetsComponent.prototype.ngOnInit = function () {
    };
    PresetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presets',
            template: __webpack_require__(/*! ./presets.component.html */ "./src/app/presets/presets.component.html"),
            styles: [__webpack_require__(/*! ./presets.component.scss */ "./src/app/presets/presets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresetsComponent);
    return PresetsComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-edit\" *ngIf=\"theme\">\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input [(ngModel)]=\"theme.name\" class=\"form-control\" type=\"text\">\n    </div>\n    <div class=\"form-group\">\n        <label>AffiliateId</label>\n        <input [(ngModel)]=\"theme.affiliateId\" class=\"form-control\" type=\"number\">\n    </div>\n    <div class=\"form-group\">\n        <label>Fields</label>\n        <div class=\"fields\" *ngIf=\"theme.fields\">\n            <div *ngFor=\"let field of theme.fields\" class=\"field\">\n                <app-field [presets]=\"presets\" [field]=\"field\"></app-field>\n            </div>\n            <button (click)=\"addField()\">Add Field</button>\n        </div>\n    </div>\n\n    <button (click)=\"saveTheme()\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/theme/theme.component.scss":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3RoZW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        this.getTheme();
        this.getPresets();
    };
    ThemeComponent.prototype.saveTheme = function () {
        var themeData = Object.assign({}, this.theme);
        themeData.fields.forEach(function (value, index) {
            themeData.fields[index].presets.reduce(function (carry, preset) {
                carry.push(preset.id);
                return carry;
            }, []);
        });
        this.apiService.saveTheme(themeData).subscribe();
    };
    ThemeComponent.prototype.addField = function () {
        this.theme.fields.push({});
    };
    ThemeComponent.prototype.getTheme = function () {
        var _this = this;
        var id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.apiService.getTheme(id).subscribe(function (data) { _this.theme = data; });
    };
    ThemeComponent.prototype.getPresets = function () {
        var _this = this;
        this.apiService.getPresets().subscribe(function (data) { _this.presets = data; });
    };
    ThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-theme',
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            styles: [__webpack_require__(/*! ./theme.component.scss */ "./src/app/theme/theme.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/themes/themes.component.html":
/*!**********************************************!*\
  !*** ./src/app/themes/themes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"createNew()\">Create</button>\n<table>\n    <thead>\n    <tr>\n        <th>Name</th>\n        <th>Affiliate</th>\n        <th>Last Update</th>\n        <th>Status</th>\n        <th>Action</th>\n    </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let theme of themes\" data-id=\"{{ theme.id }}\">\n            <td>{{ theme.name }}</td>\n            <td>{{ theme.affiliateId }}</td>\n            <td></td>\n            <td></td>\n            <td>\n                <button><a routerLink=\"/theme/{{theme.id}}\">Edit</a></button>\n                <button>>Update</button>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/themes/themes.component.scss":
/*!**********************************************!*\
  !*** ./src/app/themes/themes.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lcy90aGVtZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/themes/themes.component.ts":
/*!********************************************!*\
  !*** ./src/app/themes/themes.component.ts ***!
  \********************************************/
/*! exports provided: ThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesComponent", function() { return ThemesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var ThemesComponent = /** @class */ (function () {
    function ThemesComponent(apiService) {
        this.apiService = apiService;
    }
    ThemesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getThemes().subscribe(function (data) { _this.themes = data; });
        this.apiService.getPresets().subscribe(function (data) { _this.presets = data; });
    };
    ThemesComponent.prototype.createNew = function () {
        this.theme = {};
    };
    ThemesComponent.prototype.saveTheme = function () {
        if (this.theme.id) {
            this.apiService.saveTheme(this.theme).subscribe(function (data) {
            });
            this.themes[this.theme.id] = Object.assign(this.themes[this.theme.id], this.theme);
        }
        else {
            this.apiService.createTheme(this.theme);
            this.themes.push(this.theme);
        }
    };
    ThemesComponent.prototype.setTheme = function (id) {
        var _this = this;
        this.apiService.getTheme(id).subscribe(function (data) {
            _this.theme = data;
        });
    };
    ThemesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-themes',
            template: __webpack_require__(/*! ./themes.component.html */ "./src/app/themes/themes.component.html"),
            styles: [__webpack_require__(/*! ./themes.component.scss */ "./src/app/themes/themes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ThemesComponent);
    return ThemesComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update works!\n</p>\n"

/***/ }),

/***/ "./src/app/update/update.component.scss":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/update/update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/updates/updates.component.html":
/*!************************************************!*\
  !*** ./src/app/updates/updates.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  updates works!\n</p>\n"

/***/ }),

/***/ "./src/app/updates/updates.component.scss":
/*!************************************************!*\
  !*** ./src/app/updates/updates.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXMvdXBkYXRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/updates/updates.component.ts":
/*!**********************************************!*\
  !*** ./src/app/updates/updates.component.ts ***!
  \**********************************************/
/*! exports provided: UpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesComponent", function() { return UpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdatesComponent = /** @class */ (function () {
    function UpdatesComponent() {
    }
    UpdatesComponent.prototype.ngOnInit = function () {
    };
    UpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updates',
            template: __webpack_require__(/*! ./updates.component.html */ "./src/app/updates/updates.component.html"),
            styles: [__webpack_require__(/*! ./updates.component.scss */ "./src/app/updates/updates.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdatesComponent);
    return UpdatesComponent;
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

module.exports = __webpack_require__(/*! /app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map