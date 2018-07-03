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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'CECAP CONSULTING';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('this ');
        this._userService.initApp();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_plantilla_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/plantilla/appheader/appheader.component */ "./src/app/home/plantilla/appheader/appheader.component.ts");
/* harmony import */ var _home_plantilla_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/plantilla/appfooter/appfooter.component */ "./src/app/home/plantilla/appfooter/appfooter.component.ts");
/* harmony import */ var _home_plantilla_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/plantilla/appmenu/appmenu.component */ "./src/app/home/plantilla/appmenu/appmenu.component.ts");
/* harmony import */ var _home_plantilla_appsettings_appsettings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/plantilla/appsettings/appsettings.component */ "./src/app/home/plantilla/appsettings/appsettings.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _event_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./event/persona/persona.component */ "./src/app/event/persona/persona.component.ts");
/* harmony import */ var _events_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/alert/alert.component */ "./src/app/events/alert/alert.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _event_filtro_filtropersona_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event/filtro/filtropersona.pipe */ "./src/app/event/filtro/filtropersona.pipe.ts");
/* harmony import */ var _event_persona_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./event/persona/filter.pipe */ "./src/app/event/persona/filter.pipe.ts");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/sucursal.service */ "./src/app/services/sucursal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _events_addProgram_addProgram_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./events/addProgram/addProgram.component */ "./src/app/events/addProgram/addProgram.component.ts");
/* harmony import */ var _events_addEvent_addEvent_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./events/addEvent/addEvent.component */ "./src/app/events/addEvent/addEvent.component.ts");
/* harmony import */ var _event_persona_addPerson_addPerson_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event/persona/addPerson/addPerson.component */ "./src/app/event/persona/addPerson/addPerson.component.ts");
/* harmony import */ var _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sucursal/sucursal.component */ "./src/app/sucursal/sucursal.component.ts");
/* harmony import */ var _sucursal_addSucursal_addsucursal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sucursal/addSucursal/addsucursal.component */ "./src/app/sucursal/addSucursal/addsucursal.component.ts");
/* harmony import */ var _sucursal_editSucursal_editsucursal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sucursal/editSucursal/editsucursal.component */ "./src/app/sucursal/editSucursal/editsucursal.component.ts");
/* harmony import */ var _event_persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./event/persona/edit/edit.component */ "./src/app/event/persona/edit/edit.component.ts");
/* harmony import */ var _hero_form_hero_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hero-form/hero-form.component */ "./src/app/hero-form/hero-form.component.ts");
/* harmony import */ var _programa_programa_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./programa/programa.component */ "./src/app/programa/programa.component.ts");
/* harmony import */ var _programa_edit_programa_edit_programa_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./programa/edit-programa/edit-programa.component */ "./src/app/programa/edit-programa/edit-programa.component.ts");
/* harmony import */ var _programa_add_programa_add_programa_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./programa/add-programa/add-programa.component */ "./src/app/programa/add-programa/add-programa.component.ts");
/* harmony import */ var _modulo_modulo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modulo/modulo.component */ "./src/app/modulo/modulo.component.ts");
/* harmony import */ var _modulo_edit_modulo_edit_modulo_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modulo/edit-modulo/edit-modulo.component */ "./src/app/modulo/edit-modulo/edit-modulo.component.ts");
/* harmony import */ var _modulo_add_modulo_add_modulo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modulo/add-modulo/add-modulo.component */ "./src/app/modulo/add-modulo/add-modulo.component.ts");
/* harmony import */ var _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./facilitador/facilitador.component */ "./src/app/facilitador/facilitador.component.ts");
/* harmony import */ var _facilitador_add_facilitador_add_facilitador_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./facilitador/add-facilitador/add-facilitador.component */ "./src/app/facilitador/add-facilitador/add-facilitador.component.ts");
/* harmony import */ var _facilitador_edit_facilitador_edit_facilitador_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./facilitador/edit-facilitador/edit-facilitador.component */ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts");
/* harmony import */ var _programa_alert_create_alert_create_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./programa/alert-create/alert-create.component */ "./src/app/programa/alert-create/alert-create.component.ts");
/* harmony import */ var _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./workshop/workshop.component */ "./src/app/workshop/workshop.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _somos_somos_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./somos/somos.component */ "./src/app/somos/somos.component.ts");
/* harmony import */ var _interes_interes_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./interes/interes.component */ "./src/app/interes/interes.component.ts");
/* harmony import */ var _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./contactanos/contactanos.component */ "./src/app/contactanos/contactanos.component.ts");
/* harmony import */ var _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./consultorias/consultorias.component */ "./src/app/consultorias/consultorias.component.ts");
/* harmony import */ var _obj_key_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./obj-key.pipe */ "./src/app/obj-key.pipe.ts");
/* harmony import */ var _cmr_programas_cmr_programas_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./cmr-programas/cmr-programas.component */ "./src/app/cmr-programas/cmr-programas.component.ts");
/* harmony import */ var _cmr_programas_add_new_program_add_new_program_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./cmr-programas/add-new-program/add-new-program.component */ "./src/app/cmr-programas/add-new-program/add-new-program.component.ts");
/* harmony import */ var _cmr_programas_edit_program_cmr_edit_program_cmr_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./cmr-programas/edit-program-cmr/edit-program-cmr.component */ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.ts");
/* harmony import */ var _cmr_programas_add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./cmr-programas/add-benefit/add-benefit.component */ "./src/app/cmr-programas/add-benefit/add-benefit.component.ts");
/* harmony import */ var _cmr_programas_edit_benefit_edit_benefit_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./cmr-programas/edit-benefit/edit-benefit.component */ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.ts");
/* harmony import */ var _cmr_taller_cmr_taller_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./cmr-taller/cmr-taller.component */ "./src/app/cmr-taller/cmr-taller.component.ts");
/* harmony import */ var _cmr_taller_add_new_taller_add_new_taller_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./cmr-taller/add-new-taller/add-new-taller.component */ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.ts");
/* harmony import */ var _cmr_taller_edit_taller_cmr_edit_taller_cmr_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./cmr-taller/edit-taller-cmr/edit-taller-cmr.component */ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.ts");
/* harmony import */ var _cmr_taller_add_benefit_taller_add_benefit_taller_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./cmr-taller/add-benefit-taller/add-benefit-taller.component */ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.ts");
/* harmony import */ var _cmr_taller_edit_benefit_taller_edit_benefit_taller_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./cmr-taller/edit-benefit-taller/edit-benefit-taller.component */ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.ts");
/* harmony import */ var _consultorias_add_consultoria_add_consultoria_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./consultorias/add-consultoria/add-consultoria.component */ "./src/app/consultorias/add-consultoria/add-consultoria.component.ts");
/* harmony import */ var _consultorias_edit_consultoria_edit_consultoria_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./consultorias/edit-consultoria/edit-consultoria.component */ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.ts");
/* harmony import */ var _consultorias_add_scope_consultoria_add_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./consultorias/add-scope-consultoria/add-scope-consultoria.component */ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.ts");
/* harmony import */ var _consultorias_edit_scope_consultoria_edit_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./consultorias/edit-scope-consultoria/edit-scope-consultoria.component */ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { LocalStorage } from '@ngx-pwa/local-storage';
// import { AsyncLocalStorageModule } from 'angular-async-local-storage';
//modules
//import { AlertsModule } from 'angular-alert-module';
//components











//Services








//Graphics
// import { ChartsModule } from 'ng2-charts';




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _home_plantilla_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_8__["AppheaderComponent"],
                _home_plantilla_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__["AppfooterComponent"],
                _home_plantilla_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_10__["AppmenuComponent"],
                _home_plantilla_appsettings_appsettings_component__WEBPACK_IMPORTED_MODULE_11__["AppsettingsComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_12__["EventsComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_13__["EventComponent"],
                _events_addProgram_addProgram_component__WEBPACK_IMPORTED_MODULE_21__["AddProgramComponent"],
                _events_addEvent_addEvent_component__WEBPACK_IMPORTED_MODULE_22__["AddEventComponent"],
                _event_persona_addPerson_addPerson_component__WEBPACK_IMPORTED_MODULE_23__["AddPersonComponent"],
                _event_persona_persona_component__WEBPACK_IMPORTED_MODULE_14__["PersonaComponent"],
                _obj_key_pipe__WEBPACK_IMPORTED_MODULE_45__["ObjKey"],
                _event_filtro_filtropersona_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchPipe"],
                _event_persona_edit_edit_component__WEBPACK_IMPORTED_MODULE_27__["EditComponent"],
                _event_persona_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"],
                _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_24__["SucursalComponent"],
                _sucursal_addSucursal_addsucursal_component__WEBPACK_IMPORTED_MODULE_25__["AddSucursalComponent"],
                _sucursal_editSucursal_editsucursal_component__WEBPACK_IMPORTED_MODULE_26__["EditSucursalComponent"],
                _hero_form_hero_form_component__WEBPACK_IMPORTED_MODULE_28__["HeroFormComponent"],
                _programa_programa_component__WEBPACK_IMPORTED_MODULE_29__["ProgramaComponent"],
                _programa_edit_programa_edit_programa_component__WEBPACK_IMPORTED_MODULE_30__["EditProgramaComponent"],
                _programa_add_programa_add_programa_component__WEBPACK_IMPORTED_MODULE_31__["AddProgramaComponent"],
                _modulo_modulo_component__WEBPACK_IMPORTED_MODULE_32__["ModuloComponent"],
                _modulo_edit_modulo_edit_modulo_component__WEBPACK_IMPORTED_MODULE_33__["EditModuloComponent"],
                _modulo_add_modulo_add_modulo_component__WEBPACK_IMPORTED_MODULE_34__["AddModuloComponent"],
                _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_35__["facilitadorComponent"],
                _facilitador_add_facilitador_add_facilitador_component__WEBPACK_IMPORTED_MODULE_36__["AddFacilitadorComponent"],
                _facilitador_edit_facilitador_edit_facilitador_component__WEBPACK_IMPORTED_MODULE_37__["EditFacilitadorComponent"],
                _events_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
                _programa_alert_create_alert_create_component__WEBPACK_IMPORTED_MODULE_38__["AlertCreateComponent"],
                _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_39__["WorkshopComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_40__["InicioComponent"],
                _somos_somos_component__WEBPACK_IMPORTED_MODULE_41__["SomosComponent"],
                _interes_interes_component__WEBPACK_IMPORTED_MODULE_42__["InteresComponent"],
                _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_43__["ContactanosComponent"],
                _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_44__["ConsultoriasComponent"],
                _cmr_programas_cmr_programas_component__WEBPACK_IMPORTED_MODULE_46__["CmrProgramasComponent"],
                _cmr_programas_add_new_program_add_new_program_component__WEBPACK_IMPORTED_MODULE_47__["AddNewProgramComponent"],
                _cmr_programas_edit_program_cmr_edit_program_cmr_component__WEBPACK_IMPORTED_MODULE_48__["EditProgramCmrComponent"],
                _cmr_programas_add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_49__["AddBenefitComponent"],
                _cmr_programas_edit_benefit_edit_benefit_component__WEBPACK_IMPORTED_MODULE_50__["EditBenefitComponent"],
                _cmr_taller_cmr_taller_component__WEBPACK_IMPORTED_MODULE_51__["CmrTallerComponent"],
                _cmr_taller_add_new_taller_add_new_taller_component__WEBPACK_IMPORTED_MODULE_52__["AddNewTallerComponent"],
                _cmr_taller_edit_taller_cmr_edit_taller_cmr_component__WEBPACK_IMPORTED_MODULE_53__["EditTallerCmrComponent"],
                _cmr_taller_add_benefit_taller_add_benefit_taller_component__WEBPACK_IMPORTED_MODULE_54__["AddBenefitTallerComponent"],
                _cmr_taller_edit_benefit_taller_edit_benefit_taller_component__WEBPACK_IMPORTED_MODULE_55__["EditBenefitTallerComponent"],
                _consultorias_add_consultoria_add_consultoria_component__WEBPACK_IMPORTED_MODULE_56__["AddConsultoriaComponent"],
                _consultorias_edit_consultoria_edit_consultoria_component__WEBPACK_IMPORTED_MODULE_57__["EditConsultoriaComponent"],
                _consultorias_add_scope_consultoria_add_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_58__["AddScopeConsultoriaComponent"],
                _consultorias_edit_scope_consultoria_edit_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_59__["EditScopeConsultoriaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // LocalStorage,
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
                _event_persona_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"],
                _services_sucursal_service__WEBPACK_IMPORTED_MODULE_19__["SucursalService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _event_persona_persona_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event/persona/persona.component */ "./src/app/event/persona/persona.component.ts");
/* harmony import */ var _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sucursal/sucursal.component */ "./src/app/sucursal/sucursal.component.ts");
/* harmony import */ var _sucursal_editSucursal_editsucursal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sucursal/editSucursal/editsucursal.component */ "./src/app/sucursal/editSucursal/editsucursal.component.ts");
/* harmony import */ var _sucursal_addSucursal_addsucursal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sucursal/addSucursal/addsucursal.component */ "./src/app/sucursal/addSucursal/addsucursal.component.ts");
/* harmony import */ var _programa_programa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./programa/programa.component */ "./src/app/programa/programa.component.ts");
/* harmony import */ var _programa_edit_programa_edit_programa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./programa/edit-programa/edit-programa.component */ "./src/app/programa/edit-programa/edit-programa.component.ts");
/* harmony import */ var _programa_add_programa_add_programa_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./programa/add-programa/add-programa.component */ "./src/app/programa/add-programa/add-programa.component.ts");
/* harmony import */ var _modulo_modulo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modulo/modulo.component */ "./src/app/modulo/modulo.component.ts");
/* harmony import */ var _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./facilitador/facilitador.component */ "./src/app/facilitador/facilitador.component.ts");
/* harmony import */ var _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workshop/workshop.component */ "./src/app/workshop/workshop.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _somos_somos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./somos/somos.component */ "./src/app/somos/somos.component.ts");
/* harmony import */ var _interes_interes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interes/interes.component */ "./src/app/interes/interes.component.ts");
/* harmony import */ var _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contactanos/contactanos.component */ "./src/app/contactanos/contactanos.component.ts");
/* harmony import */ var _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./consultorias/consultorias.component */ "./src/app/consultorias/consultorias.component.ts");
/* harmony import */ var _cmr_programas_cmr_programas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cmr-programas/cmr-programas.component */ "./src/app/cmr-programas/cmr-programas.component.ts");
/* harmony import */ var _cmr_programas_add_new_program_add_new_program_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cmr-programas/add-new-program/add-new-program.component */ "./src/app/cmr-programas/add-new-program/add-new-program.component.ts");
/* harmony import */ var _cmr_programas_edit_program_cmr_edit_program_cmr_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cmr-programas/edit-program-cmr/edit-program-cmr.component */ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.ts");
/* harmony import */ var _cmr_programas_add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cmr-programas/add-benefit/add-benefit.component */ "./src/app/cmr-programas/add-benefit/add-benefit.component.ts");
/* harmony import */ var _cmr_programas_edit_benefit_edit_benefit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cmr-programas/edit-benefit/edit-benefit.component */ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.ts");
/* harmony import */ var _cmr_taller_cmr_taller_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cmr-taller/cmr-taller.component */ "./src/app/cmr-taller/cmr-taller.component.ts");
/* harmony import */ var _cmr_taller_add_new_taller_add_new_taller_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cmr-taller/add-new-taller/add-new-taller.component */ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.ts");
/* harmony import */ var _cmr_taller_edit_taller_cmr_edit_taller_cmr_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cmr-taller/edit-taller-cmr/edit-taller-cmr.component */ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.ts");
/* harmony import */ var _cmr_taller_add_benefit_taller_add_benefit_taller_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cmr-taller/add-benefit-taller/add-benefit-taller.component */ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.ts");
/* harmony import */ var _consultorias_add_consultoria_add_consultoria_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./consultorias/add-consultoria/add-consultoria.component */ "./src/app/consultorias/add-consultoria/add-consultoria.component.ts");
/* harmony import */ var _consultorias_edit_consultoria_edit_consultoria_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./consultorias/edit-consultoria/edit-consultoria.component */ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.ts");
/* harmony import */ var _consultorias_add_scope_consultoria_add_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./consultorias/add-scope-consultoria/add-scope-consultoria.component */ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.ts");
/* harmony import */ var _consultorias_edit_scope_consultoria_edit_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./consultorias/edit-scope-consultoria/edit-scope-consultoria.component */ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.ts");

//import components































var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
            { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_14__["InicioComponent"] },
            { path: 'somos', component: _somos_somos_component__WEBPACK_IMPORTED_MODULE_15__["SomosComponent"] },
            { path: 'eventos', component: _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"] },
            // { path: 'eventos/add', component: AddEventComponent },
            // { path: 'event/:id', component: EventComponent },
            { path: 'persons', component: _event_persona_persona_component__WEBPACK_IMPORTED_MODULE_4__["PersonaComponent"] },
            // { path: 'persons/add', component: AddPersonComponent },
            // { path: 'persons/edit/:id', component: EditComponent },
            { path: 'sucursales', component: _sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_5__["SucursalComponent"] },
            { path: 'sucursales/add', component: _sucursal_addSucursal_addsucursal_component__WEBPACK_IMPORTED_MODULE_7__["AddSucursalComponent"] },
            { path: 'sucursales/edit/:id', component: _sucursal_editSucursal_editsucursal_component__WEBPACK_IMPORTED_MODULE_6__["EditSucursalComponent"] },
            // { path: 'formulariobase', component: HeroFormComponent },
            { path: 'programas', component: _programa_programa_component__WEBPACK_IMPORTED_MODULE_8__["ProgramaComponent"] },
            { path: 'programas/add', component: _programa_add_programa_add_programa_component__WEBPACK_IMPORTED_MODULE_10__["AddProgramaComponent"] },
            { path: 'programas/edit/:id', component: _programa_edit_programa_edit_programa_component__WEBPACK_IMPORTED_MODULE_9__["EditProgramaComponent"] },
            { path: 'modulos/:id', component: _modulo_modulo_component__WEBPACK_IMPORTED_MODULE_11__["ModuloComponent"] },
            // { path: 'modulo/edit/:id', component: EditModuloComponent },
            // { path: 'modulo/add/:id', component: AddModuloComponent },
            { path: 'facilitador', component: _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_12__["facilitadorComponent"] },
            // { path: 'facilitador/add', component: AddFacilitadorComponent },
            // { path: 'facilitador/edit/:id', component: EditFacilitadorComponent },
            { path: 'talleres', component: _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_13__["WorkshopComponent"] },
            { path: 'consultorias', component: _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_18__["ConsultoriasComponent"] },
            { path: 'consultorias/add', component: _consultorias_add_consultoria_add_consultoria_component__WEBPACK_IMPORTED_MODULE_28__["AddConsultoriaComponent"] },
            { path: 'consultorias/edit/:id', component: _consultorias_edit_consultoria_edit_consultoria_component__WEBPACK_IMPORTED_MODULE_29__["EditConsultoriaComponent"] },
            { path: 'consultorias/scope/add/:id', component: _consultorias_add_scope_consultoria_add_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_30__["AddScopeConsultoriaComponent"] },
            { path: 'consultorias/scope/edit/:id', component: _consultorias_edit_scope_consultoria_edit_scope_consultoria_component__WEBPACK_IMPORTED_MODULE_31__["EditScopeConsultoriaComponent"] },
            { path: 'interes', component: _interes_interes_component__WEBPACK_IMPORTED_MODULE_16__["InteresComponent"] },
            { path: 'contactanos', component: _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_17__["ContactanosComponent"] },
            { path: 'cmr-programas', component: _cmr_programas_cmr_programas_component__WEBPACK_IMPORTED_MODULE_19__["CmrProgramasComponent"] },
            { path: 'cmr-programas/add', component: _cmr_programas_add_new_program_add_new_program_component__WEBPACK_IMPORTED_MODULE_20__["AddNewProgramComponent"] },
            { path: 'cmr-programas/edit/:id', component: _cmr_programas_edit_program_cmr_edit_program_cmr_component__WEBPACK_IMPORTED_MODULE_21__["EditProgramCmrComponent"] },
            { path: 'cmr-programs/benefit/add/:id', component: _cmr_programas_add_benefit_add_benefit_component__WEBPACK_IMPORTED_MODULE_22__["AddBenefitComponent"] },
            { path: 'cmr-programs/benefit/edit/:id', component: _cmr_programas_edit_benefit_edit_benefit_component__WEBPACK_IMPORTED_MODULE_23__["EditBenefitComponent"] },
            { path: 'cmr-talleres', component: _cmr_taller_cmr_taller_component__WEBPACK_IMPORTED_MODULE_24__["CmrTallerComponent"] },
            { path: 'cmr-talleres/add', component: _cmr_taller_add_new_taller_add_new_taller_component__WEBPACK_IMPORTED_MODULE_25__["AddNewTallerComponent"] },
            { path: 'cmr-talleres/edit/:id', component: _cmr_taller_edit_taller_cmr_edit_taller_cmr_component__WEBPACK_IMPORTED_MODULE_26__["EditTallerCmrComponent"] },
            { path: 'cmr-talleres/benefit/add/:id', component: _cmr_taller_add_benefit_taller_add_benefit_taller_component__WEBPACK_IMPORTED_MODULE_27__["AddBenefitTallerComponent"] },
            { path: 'cmr-talleres/benefits/edit/:id', component: _cmr_programas_edit_benefit_edit_benefit_component__WEBPACK_IMPORTED_MODULE_23__["EditBenefitComponent"] },
        ]
    },
    //{path: '', component: LoginFormComponent}
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] } //ruta redir
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cmr-programas/add-benefit/add-benefit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/cmr-programas/add-benefit/add-benefit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-programas/add-benefit/add-benefit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/cmr-programas/add-benefit/add-benefit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Beneficio</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addBenefit=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Beneficio</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"newBenefit\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && newBenefit == ''\" class=\"text-alert\">\n                            *Nombre de Beneficio requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newBenefit != '' && newBenefit.length>43\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newBenefit != '' && newBenefit.length<3\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, tiene menos de 3 caracteres.\n                           </span>\n                         \n                   </div>\n                  \n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addBenefit.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-programas/add-benefit/add-benefit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/cmr-programas/add-benefit/add-benefit.component.ts ***!
  \********************************************************************/
/*! exports provided: AddBenefitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBenefitComponent", function() { return AddBenefitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBenefitComponent = /** @class */ (function () {
    function AddBenefitComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    AddBenefitComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
    };
    AddBenefitComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    AddBenefitComponent.prototype.onSubmit = function () {
        var benefitObject = {};
        benefitObject.name = this.newBenefit;
        benefitObject.photo = '';
        this._peticionesService.addBenefitToProgram(this.programId, benefitObject).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    AddBenefitComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddBenefitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-benefit',
            template: __webpack_require__(/*! ./add-benefit.component.html */ "./src/app/cmr-programas/add-benefit/add-benefit.component.html"),
            styles: [__webpack_require__(/*! ./add-benefit.component.css */ "./src/app/cmr-programas/add-benefit/add-benefit.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], AddBenefitComponent);
    return AddBenefitComponent;
}());



/***/ }),

/***/ "./src/app/cmr-programas/add-new-program/add-new-program.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/cmr-programas/add-new-program/add-new-program.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-programas/add-new-program/add-new-program.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/cmr-programas/add-new-program/add-new-program.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Programa</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addNewProgram=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Programa</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"program.name\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && program.name == ''\" class=\"text-alert\">\n                            *Nombre de Programa requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length>43\" class=\"text-alert\">\n                            *Nombre de Programa inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length<3\" class=\"text-alert\">\n                            *Nombre de Programa inválido, tiene menos de 3 caracteres.\n                           </span>\n                           <!-- <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length<65 && program.name.length>2 \" class=\"text-alert\">\n                            *Nombre de Programa inválido, no se permiten símbolos.\n                           </span> -->\n                       <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                           kjkn\n                       </div>-->\n                   </div>\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"ubicacion\" class=\" control-label\">Descripcion</label>\n                               <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                                [(ngModel)]=\"program.description\" name=\"details\" #details=\"ngModel\" required >\n                               <span *ngIf=\"!details.valid && details.touched && program.description == ''\" class=\"text-alert\">\n                                *Detalle de Programa requerido.\n                               <br></span>\n                               <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && program.description.length>150 \" class=\"text-alert\">\n                                *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                                <br></span>\n                               <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.description != '' && program.description.length<3 \" class=\"text-alert\">\n                                *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                                <br></span>\n                              \n                   </div>\n                   <div class=\"form-group col-sm-8\">\n                    <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                             [(ngModel)]=\"program.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                            <span *ngIf=\"!objetctiv.valid && objetctiv.touched && program.description == ''\" class=\"text-alert\">\n                             *Detalle de Programa requerido.\n                            <br></span>\n                            <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && program.description.length>150 \" class=\"text-alert\">\n                             *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                             <br></span>\n                            <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && program.description != '' && program.description.length<3 \" class=\"text-alert\">\n                             *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                             <br></span>\n                           \n                </div>\n\n                <!-- <div class=\"form-group col-sm-8\">\n                  <label for=\"name\" class=\"control-label\">Imagen</label>\n                  <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n                </div> -->\n\n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addNewProgram.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-programas/add-new-program/add-new-program.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cmr-programas/add-new-program/add-new-program.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddNewProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewProgramComponent", function() { return AddNewProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _modelo_programa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/programa */ "./src/app/modelo/programa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewProgramComponent = /** @class */ (function () {
    function AddNewProgramComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.program = new _modelo_programa__WEBPACK_IMPORTED_MODULE_3__["Programa"](' ', ' ', ' ', ' ', []); //name, details
    }
    AddNewProgramComponent.prototype.ngOnInit = function () {
    };
    AddNewProgramComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.file == undefined) {
            this._peticionesService.addProgram(this.program).subscribe(function (result) {
                var esperado = result;
                alert('El Programa se creó correctamente');
                _this.router.navigate(['home/cmr-programas']);
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
                alert('Error al crear Programa verifique los datos');
            });
        }
        // else{
        //   this._peticionesService.addProgramWithFile(this.program,this.file).subscribe(
        //     result => {
        //       var esperado = result;
        //       alert('El Programa se creó correctamente');
        //       this.router.navigate(['home/cmr-programas']);
        //     },
        //     error => {
        //       var errorMessage = <any>error;
        //       console.log(errorMessage);
        //       alert('Error al crear Programa verifique los datos');
        //     }
        //   );
        // }
    };
    AddNewProgramComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddNewProgramComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
    };
    AddNewProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-program',
            template: __webpack_require__(/*! ./add-new-program.component.html */ "./src/app/cmr-programas/add-new-program/add-new-program.component.html"),
            styles: [__webpack_require__(/*! ./add-new-program.component.css */ "./src/app/cmr-programas/add-new-program/add-new-program.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]],
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddNewProgramComponent);
    return AddNewProgramComponent;
}());



/***/ }),

/***/ "./src/app/cmr-programas/cmr-programas.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cmr-programas/cmr-programas.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cmr-programas/cmr-programas.component.html":
/*!************************************************************!*\
  !*** ./src/app/cmr-programas/cmr-programas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n \n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Inicio</h1>\n        <form (ngSubmit)=\"saveProgramTop()\" #cmrPrograms=\"ngForm\" class=\"\">\n         \n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo Encabezado</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"title\" [(ngModel)]=\"page_program.tittle\" name=\"title\" #title=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Descripcion</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line\" [(ngModel)]=\"page_program.line\" name=\"line\" #line=\"ngModel\" required />\n          </div>\n         \n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <!--lista programas-->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <section class=\"content-header\">\n          <h1>\n            Programas\n            <small>Vigentes</small>\n          </h1>\n        </section>\n        <section class=\"content col-sm-8\">\n          <a class=\"btn btn-primary a\" (click)=\"addProgram()\">\n            <i class=\"fa fa-book\"></i> Registrar Programa</a>\n      \n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Nombre</th>\n                <th>Detalles</th>\n                <!-- <th>Módulos</th> -->\n                <th >Ajustes</th>\n                <!-- <th>Beneficios</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let program of lista_programs\">\n                <td>{{ program.name }}</td>\n                <td>{{ program.description }}</td>\n                <!-- <td>\n                  <a class=\"btn btn-info\" (click)=\"send(program._id)\">VER MÓDULOS</a>\n                </td> -->\n                <td>\n                  <a class=\"btn btn-warning\" (click)=\"editProgram(program._id)\">EDITAR</a>\n                </td>\n                <!-- <td>\n                  <a class=\"btn btn-warning\" (click)=\"beneficios(program._id)\">EDITAR</a>\n                </td> -->\n              </tr>\n            </tbody>\n          </table>\n      \n        </section>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-programas/cmr-programas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cmr-programas/cmr-programas.component.ts ***!
  \**********************************************************/
/*! exports provided: CmrProgramasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrProgramasComponent", function() { return CmrProgramasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CmrProgramasComponent = /** @class */ (function () {
    function CmrProgramasComponent(_peticionesService, _router) {
        this._peticionesService = _peticionesService;
        this._router = _router;
    }
    CmrProgramasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page_program = res[0].program;
            _this.id = res[0]._id;
        });
        this._peticionesService.getPrograms().subscribe(function (result) {
            _this.lista_programs = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    CmrProgramasComponent.prototype.saveProgramTop = function () {
        this._peticionesService.updateInicio_programs(this.page_program, this.id).subscribe(function (res) {
            alert("Guardado Exitosamente");
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    CmrProgramasComponent.prototype.editProgram = function (_id) {
        this._router.navigate(['/home/cmr-programas/edit', _id]);
    };
    CmrProgramasComponent.prototype.addProgram = function () {
        this._router.navigate(['/home/cmr-programas/add']);
    };
    CmrProgramasComponent.prototype.beneficios = function (_id) {
        this._router.navigate(['/home/cmr-programs/benefit', _id]);
    };
    CmrProgramasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-programas',
            template: __webpack_require__(/*! ./cmr-programas.component.html */ "./src/app/cmr-programas/cmr-programas.component.html"),
            styles: [__webpack_require__(/*! ./cmr-programas.component.css */ "./src/app/cmr-programas/cmr-programas.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]],
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CmrProgramasComponent);
    return CmrProgramasComponent;
}());



/***/ }),

/***/ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/cmr-programas/edit-benefit/edit-benefit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/cmr-programas/edit-benefit/edit-benefit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Beneficio</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addBenefit=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Beneficio</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"editBenefit.name\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && editBenefit == ''\" class=\"text-alert\">\n                            *Nombre de Beneficio requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editBenefit != '' && editBenefit.length>43\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editBenefit != '' && editBenefit.length<3\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, tiene menos de 3 caracteres.\n                           </span>\n                         \n                   </div>\n                  \n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addBenefit.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cmr-programas/edit-benefit/edit-benefit.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditBenefitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBenefitComponent", function() { return EditBenefitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBenefitComponent = /** @class */ (function () {
    function EditBenefitComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditBenefitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.benefitId = params.id.split('-')[0];
            _this.programId = params.id.split('-')[1];
            _this.findProgram();
        });
    };
    EditBenefitComponent.prototype.findProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (result) {
            _this.program = result;
            for (var _i = 0, _a = _this.program.benefit; _i < _a.length; _i++) {
                var benef = _a[_i];
                if (benef._id == _this.benefitId) {
                    _this.editBenefit = benef;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditBenefitComponent.prototype.onSubmit = function () {
        for (var _i = 0, _a = this.program.benefit; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b._id == this.benefitId) {
                b = this.editBenefit;
            }
        }
        this._peticionesService.updateProgram(this.program).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditBenefitComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditBenefitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-benefit',
            template: __webpack_require__(/*! ./edit-benefit.component.html */ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.html"),
            styles: [__webpack_require__(/*! ./edit-benefit.component.css */ "./src/app/cmr-programas/edit-benefit/edit-benefit.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditBenefitComponent);
    return EditBenefitComponent;
}());



/***/ }),

/***/ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"content-wrapper\">\n  <br>\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container\">\n        <div >\n          <h1>Editar Programa</h1>\n          <form (ngSubmit)=\" saveProgram()\" #updateProgram=\"ngForm\" class=\"\" >\n            <div class=\"form-group col-sm-8\">\n                <label for=\"name\">Nombre del Programa</label>\n                <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                [(ngModel)]=\"program.name\" name=\"name\" #name=\"ngModel\" required />\n                <span *ngIf=\"!name.untouched && !name.valid && program.name == ''\" class=\"text-alert\">\n                *Nombre de Programa requerido.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length>43\" class=\"text-alert\">\n                *Nombre de Programa inválido, excedió el límite de 42 caracteres.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && 3>program.name.length\" class=\"text-alert\">\n                *Nombre de Programa inválido, tiene menos de 3 caracteres.\n                </span>\n               \n            </div>\n            <div class=\"form-group col-sm-8\">\n                <label for=\"details\">Descripcion</label>\n                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                [(ngModel)]=\"program.description\" name=\"details\" #details=\"ngModel\" required >\n                <span *ngIf=\"!details.valid && details.touched && program.details == ''\" class=\"text-alert\">\n                *Detalle de Programa requerido.\n                <br></span>\n                <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && program.details.length>150 \" class=\"text-alert\">\n                *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                <br></span>\n                <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.details != '' && program.details.length<3 \" class=\"text-alert\">\n                *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                <br></span>\n               \n            </div>\n\n\n            <div class=\"form-group col-sm-8\">\n              <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                      <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                       [(ngModel)]=\"program.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                      <span *ngIf=\"!objetctiv.valid && objetctiv.touched && program.description == ''\" class=\"text-alert\">\n                       *Detalle de Programa requerido.\n                      <br></span>\n                      <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && program.description.length>150 \" class=\"text-alert\">\n                       *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                       <br></span>\n                      <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && program.description != '' && program.description.length<3 \" class=\"text-alert\">\n                       *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                       <br></span>\n                     \n          </div>\n            <div class=\"form-group col-sm-8\" style=\"text-align:center\">\n              <button  type=\"submit\" class=\"btn btn-success\" [disabled]=\"!updateProgram.form.valid\">Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <section class=\"content-header\">\n          <h1>\n            Beneficios\n            <small>Vigentes</small>\n          </h1>\n        </section>\n        <section class=\"content col-sm-8\">\n          <a class=\"btn btn-primary a\" (click)=\"addBenefit()\">\n            <i class=\"fa fa-book\"></i> Registrar Beneficio</a>\n      \n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Nombre</th>\n               \n                <th >Ajustes</th>\n               \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let benefit of program.benefit\">\n                <td>{{ benefit.name }}</td>\n              \n                <td>\n                  <a class=\"btn btn-warning\" (click)=\"editBenefit(benefit._id)\">EDITAR</a>\n                </td>\n              \n              </tr>\n            </tbody>\n          </table>\n      \n        </section>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditProgramCmrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramCmrComponent", function() { return EditProgramCmrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProgramCmrComponent = /** @class */ (function () {
    function EditProgramCmrComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditProgramCmrComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.findProgram();
    };
    EditProgramCmrComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    EditProgramCmrComponent.prototype.findProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (result) {
            _this.program = result;
        }, function (error) {
            console.log(error);
        });
    };
    EditProgramCmrComponent.prototype.saveProgram = function () {
        this._peticionesService.updateProgram(this.program).subscribe(function (result) {
            console.log(result);
            var res = result;
            alert('Se guardó correctamente la edición');
            // this.router.navigate(['home/programs']);
            //    window.history.back();          
        }, function (error) {
            console.log(error);
            alert('Error al guardar verifique los datos');
        });
    };
    EditProgramCmrComponent.prototype.addBenefit = function () {
        this.router.navigate(['/home/cmr-programs/benefit/add', this.programId]);
    };
    EditProgramCmrComponent.prototype.editBenefit = function (_idBenefit) {
        var _idBenefit_idProgram = _idBenefit + '-' + this.programId;
        this.router.navigate(['/home/cmr-programs/benefit/edit', _idBenefit_idProgram]);
    };
    EditProgramCmrComponent.prototype.cancel = function () {
        // this.router.navigate(['home/programs']);
        window.history.back();
    };
    EditProgramCmrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-program-cmr',
            template: __webpack_require__(/*! ./edit-program-cmr.component.html */ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.html"),
            styles: [__webpack_require__(/*! ./edit-program-cmr.component.css */ "./src/app/cmr-programas/edit-program-cmr/edit-program-cmr.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditProgramCmrComponent);
    return EditProgramCmrComponent;
}());



/***/ }),

/***/ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Beneficio</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addBenefit=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Beneficio</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"newBenefit\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && newBenefit == ''\" class=\"text-alert\">\n                            *Nombre de Beneficio requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newBenefit != '' && newBenefit.length>43\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newBenefit != '' && newBenefit.length<3\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, tiene menos de 3 caracteres.\n                           </span>\n                         \n                   </div>\n                  \n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addBenefit.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddBenefitTallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBenefitTallerComponent", function() { return AddBenefitTallerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBenefitTallerComponent = /** @class */ (function () {
    function AddBenefitTallerComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    AddBenefitTallerComponent.prototype.ngOnInit = function () {
        this.queryTallerId();
    };
    AddBenefitTallerComponent.prototype.queryTallerId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tallerId = params.id;
        });
    };
    AddBenefitTallerComponent.prototype.onSubmit = function () {
        var benefitObject = {};
        benefitObject.name = this.newBenefit;
        benefitObject.photo = '';
        this._peticionesService.addBenefitToTaller(this.tallerId, benefitObject).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    AddBenefitTallerComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddBenefitTallerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-benefit-taller',
            template: __webpack_require__(/*! ./add-benefit-taller.component.html */ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.html"),
            styles: [__webpack_require__(/*! ./add-benefit-taller.component.css */ "./src/app/cmr-taller/add-benefit-taller/add-benefit-taller.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], AddBenefitTallerComponent);
    return AddBenefitTallerComponent;
}());



/***/ }),

/***/ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.css":
/*!************************************************************************!*\
  !*** ./src/app/cmr-taller/add-new-taller/add-new-taller.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/cmr-taller/add-new-taller/add-new-taller.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Taller</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addNewTaller=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Taller</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"taller.name\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && taller.name == ''\" class=\"text-alert\">\n                            *Nombre de taller requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && taller.name != '' && taller.name.length>43\" class=\"text-alert\">\n                            *Nombre de taller inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && taller.name != '' && taller.name.length<3\" class=\"text-alert\">\n                            *Nombre de taller inválido, tiene menos de 3 caracteres.\n                           </span>\n                           <!-- <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && taller.name != '' && taller.name.length<65 && taller.name.length>2 \" class=\"text-alert\">\n                            *Nombre de taller inválido, no se permiten símbolos.\n                           </span> -->\n                       <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                           kjkn\n                       </div>-->\n                   </div>\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"ubicacion\" class=\" control-label\">Descripcion</label>\n                               <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                                [(ngModel)]=\"taller.description\" name=\"details\" #details=\"ngModel\" required >\n                               <span *ngIf=\"!details.valid && details.touched && taller.description == ''\" class=\"text-alert\">\n                                *Detalle de taller requerido.\n                               <br></span>\n                               <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && taller.description.length>150 \" class=\"text-alert\">\n                                *Detalle de taller inválido, excedió el límite de 150 caracteres.\n                                <br></span>\n                               <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && taller.description != '' && taller.description.length<3 \" class=\"text-alert\">\n                                *Detalle de taller inválido, tiene menos de 3 caracteres.\n                                <br></span>\n                              \n                   </div>\n                   <div class=\"form-group col-sm-8\">\n                    <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                             [(ngModel)]=\"taller.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                            <span *ngIf=\"!objetctiv.valid && objetctiv.touched && taller.description == ''\" class=\"text-alert\">\n                             *Detalle de taller requerido.\n                            <br></span>\n                            <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && taller.description.length>150 \" class=\"text-alert\">\n                             *Detalle de taller inválido, excedió el límite de 150 caracteres.\n                             <br></span>\n                            <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && taller.description != '' && taller.description.length<3 \" class=\"text-alert\">\n                             *Detalle de taller inválido, tiene menos de 3 caracteres.\n                             <br></span>\n                           \n                </div>\n\n                <!-- <div class=\"form-group col-sm-8\">\n                  <label for=\"name\" class=\"control-label\">Imagen</label>\n                  <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n                </div> -->\n\n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addNewTaller.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cmr-taller/add-new-taller/add-new-taller.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddNewTallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewTallerComponent", function() { return AddNewTallerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelo_taller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/taller */ "./src/app/modelo/taller.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewTallerComponent = /** @class */ (function () {
    function AddNewTallerComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.taller = new _modelo_taller__WEBPACK_IMPORTED_MODULE_3__["Taller"](' ', ' ', ' ', ' ', []); //name, details
    }
    AddNewTallerComponent.prototype.ngOnInit = function () {
    };
    AddNewTallerComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.file == undefined) {
            console.log(this.taller);
            this._peticionesService.addTaller(this.taller).subscribe(function (result) {
                var esperado = result;
                alert('El taller se creó correctamente');
                _this.router.navigate(['home/cmr-talleres']);
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
                alert('Error al crear taller verifique los datos');
            });
        }
        // else{
        //   this._peticionesService.addProgramWithFile(this.program,this.file).subscribe(
        //     result => {
        //       var esperado = result;
        //       alert('El Programa se creó correctamente');
        //       this.router.navigate(['home/cmr-programas']);
        //     },
        //     error => {
        //       var errorMessage = <any>error;
        //       console.log(errorMessage);
        //       alert('Error al crear Programa verifique los datos');
        //     }
        //   );
        // }
    };
    AddNewTallerComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddNewTallerComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
    };
    AddNewTallerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-taller',
            template: __webpack_require__(/*! ./add-new-taller.component.html */ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.html"),
            styles: [__webpack_require__(/*! ./add-new-taller.component.css */ "./src/app/cmr-taller/add-new-taller/add-new-taller.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddNewTallerComponent);
    return AddNewTallerComponent;
}());



/***/ }),

/***/ "./src/app/cmr-taller/cmr-taller.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cmr-taller/cmr-taller.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cmr-taller/cmr-taller.component.html":
/*!******************************************************!*\
  !*** ./src/app/cmr-taller/cmr-taller.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n \n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Inicio</h1>\n        <form (ngSubmit)=\"saveProgramTop()\" #cmrTalleres=\"ngForm\" class=\"\">\n         \n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo Encabezado</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"title\" [(ngModel)]=\"page_taller.tittle\" name=\"title\" #title=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Descripcion</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line\" [(ngModel)]=\"page_taller.line\" name=\"line\" #line=\"ngModel\" required />\n          </div>\n         \n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <!--lista Talleres-->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <section class=\"content-header\">\n          <h1>\n            Talleres\n            <small>Vigentes</small>\n          </h1>\n        </section>\n        <section class=\"content col-sm-8\">\n          <a class=\"btn btn-primary a\" (click)=\"addTaller()\">\n            <i class=\"fa fa-book\"></i> Registrar Taller</a>\n      \n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Nombre</th>\n                <th>Detalles</th>\n                <!-- <th>Módulos</th> -->\n                <th >Ajustes</th>\n                <!-- <th>Beneficios</th> -->\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let taller of lista_talleres\">\n                <td>{{ taller.name }}</td>\n                <td>{{ taller.description }}</td>\n                <!-- <td>\n                  <a class=\"btn btn-info\" (click)=\"send(taller._id)\">VER MÓDULOS</a>\n                </td> -->\n                <td>\n                  <a class=\"btn btn-warning\" (click)=\"editTaller(taller._id)\">EDITAR</a>\n                </td>\n                <!-- <td>\n                  <a class=\"btn btn-warning\" (click)=\"beneficios(taller._id)\">EDITAR</a>\n                </td> -->\n              </tr>\n            </tbody>\n          </table>\n      \n        </section>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-taller/cmr-taller.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cmr-taller/cmr-taller.component.ts ***!
  \****************************************************/
/*! exports provided: CmrTallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmrTallerComponent", function() { return CmrTallerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CmrTallerComponent = /** @class */ (function () {
    function CmrTallerComponent(_peticionesService, _router) {
        this._peticionesService = _peticionesService;
        this._router = _router;
    }
    CmrTallerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page_taller = res[0].taller;
            _this.id = res[0]._id;
        });
        this._peticionesService.getTalleres().subscribe(function (result) {
            _this.lista_talleres = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    CmrTallerComponent.prototype.saveProgramTop = function () {
        this._peticionesService.updateInicio_talleres(this.page_taller, this.id).subscribe(function (res) {
            alert("Guardado Exitosamente");
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    CmrTallerComponent.prototype.editTaller = function (_id) {
        this._router.navigate(['/home/cmr-talleres/edit', _id]);
    };
    CmrTallerComponent.prototype.addTaller = function () {
        this._router.navigate(['/home/cmr-talleres/add']);
    };
    CmrTallerComponent.prototype.beneficiosTaller = function (_id) {
        this._router.navigate(['/home/cmr-talleres/benefit', _id]);
    };
    CmrTallerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmr-taller',
            template: __webpack_require__(/*! ./cmr-taller.component.html */ "./src/app/cmr-taller/cmr-taller.component.html"),
            styles: [__webpack_require__(/*! ./cmr-taller.component.css */ "./src/app/cmr-taller/cmr-taller.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CmrTallerComponent);
    return CmrTallerComponent;
}());



/***/ }),

/***/ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"content\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Beneficio</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addBenefit=\"ngForm\" class=\"\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Beneficio</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"editBenefit.name\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && editBenefit == ''\" class=\"text-alert\">\n                            *Nombre de Beneficio requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editBenefit != '' && editBenefit.length>43\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editBenefit != '' && editBenefit.length<3\" class=\"text-alert\">\n                            *Nombre de Beneficio inválido, tiene menos de 3 caracteres.\n                           </span>\n                         \n                   </div>\n                  \n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addBenefit.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditBenefitTallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBenefitTallerComponent", function() { return EditBenefitTallerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBenefitTallerComponent = /** @class */ (function () {
    function EditBenefitTallerComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditBenefitTallerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.benefitId = params.id.split('-')[0];
            _this.tallerId = params.id.split('-')[1];
            _this.findTaller();
        });
    };
    EditBenefitTallerComponent.prototype.findTaller = function () {
        var _this = this;
        this._peticionesService.getTaller(this.tallerId).subscribe(function (result) {
            _this.taller = result;
            for (var _i = 0, _a = _this.taller.benefit; _i < _a.length; _i++) {
                var benef = _a[_i];
                if (benef._id == _this.benefitId) {
                    _this.editBenefit = benef;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditBenefitTallerComponent.prototype.onSubmit = function () {
        for (var _i = 0, _a = this.taller.benefit; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b._id == this.benefitId) {
                b = this.editBenefit;
            }
        }
        this._peticionesService.updateTaller(this.taller).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditBenefitTallerComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditBenefitTallerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-benefit-taller',
            template: __webpack_require__(/*! ./edit-benefit-taller.component.html */ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.html"),
            styles: [__webpack_require__(/*! ./edit-benefit-taller.component.css */ "./src/app/cmr-taller/edit-benefit-taller/edit-benefit-taller.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditBenefitTallerComponent);
    return EditBenefitTallerComponent;
}());



/***/ }),

/***/ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"content-wrapper\">\n  <br>\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container\">\n        <div >\n          <h1>Editar taller</h1>\n          <form (ngSubmit)=\" saveTaller()\" #updatetaller=\"ngForm\" class=\"\" >\n            <div class=\"form-group col-sm-8\">\n                <label for=\"name\">Nombre del taller</label>\n                <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                [(ngModel)]=\"taller.name\" name=\"name\" #name=\"ngModel\" required />\n                <span *ngIf=\"!name.untouched && !name.valid && taller.name == ''\" class=\"text-alert\">\n                *Nombre de taller requerido.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && taller.name != '' && taller.name.length>43\" class=\"text-alert\">\n                *Nombre de taller inválido, excedió el límite de 42 caracteres.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && taller.name != '' && 3>taller.name.length\" class=\"text-alert\">\n                *Nombre de taller inválido, tiene menos de 3 caracteres.\n                </span>\n               \n            </div>\n            <div class=\"form-group col-sm-8\">\n                <label for=\"details\">Descripcion</label>\n                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                [(ngModel)]=\"taller.description\" name=\"details\" #details=\"ngModel\" required >\n                <span *ngIf=\"!details.valid && details.touched && taller.details == ''\" class=\"text-alert\">\n                *Detalle de taller requerido.\n                <br></span>\n                <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && taller.details.length>150 \" class=\"text-alert\">\n                *Detalle de taller inválido, excedió el límite de 150 caracteres.\n                <br></span>\n                <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && taller.details != '' && taller.details.length<3 \" class=\"text-alert\">\n                *Detalle de taller inválido, tiene menos de 3 caracteres.\n                <br></span>\n               \n            </div>\n\n\n            <div class=\"form-group col-sm-8\">\n              <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                      <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                       [(ngModel)]=\"taller.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                      <span *ngIf=\"!objetctiv.valid && objetctiv.touched && taller.description == ''\" class=\"text-alert\">\n                       *Detalle de taller requerido.\n                      <br></span>\n                      <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && taller.description.length>150 \" class=\"text-alert\">\n                       *Detalle de taller inválido, excedió el límite de 150 caracteres.\n                       <br></span>\n                      <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && taller.description != '' && taller.description.length<3 \" class=\"text-alert\">\n                       *Detalle de taller inválido, tiene menos de 3 caracteres.\n                       <br></span>\n                     \n          </div>\n            <div class=\"form-group col-sm-8\" style=\"text-align:center\">\n              <button  type=\"submit\" class=\"btn btn-success\" [disabled]=\"!updatetaller.form.valid\">Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <section class=\"content-header\">\n          <h1>\n            Beneficios\n            <small>Vigentes</small>\n          </h1>\n        </section>\n        <section class=\"content col-sm-8\">\n          <a class=\"btn btn-primary a\" (click)=\"addBenefit()\">\n            <i class=\"fa fa-book\"></i> Registrar Beneficio</a>\n      \n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Nombre</th>\n               \n                <th >Ajustes</th>\n               \n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let benefit of taller.benefit\">\n                <td>{{ benefit.name }}</td>\n              \n                <td>\n                  <a class=\"btn btn-warning\" (click)=\"editBenefit(benefit._id)\">EDITAR</a>\n                </td>\n              \n              </tr>\n            </tbody>\n          </table>\n      \n        </section>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditTallerCmrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTallerCmrComponent", function() { return EditTallerCmrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditTallerCmrComponent = /** @class */ (function () {
    function EditTallerCmrComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditTallerCmrComponent.prototype.ngOnInit = function () {
        this.queryTallerId();
        this.findTaller();
    };
    EditTallerCmrComponent.prototype.queryTallerId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tallerId = params.id;
        });
    };
    EditTallerCmrComponent.prototype.findTaller = function () {
        var _this = this;
        this._peticionesService.getTaller(this.tallerId).subscribe(function (result) {
            _this.taller = result;
        }, function (error) {
            console.log(error);
        });
    };
    EditTallerCmrComponent.prototype.saveTaller = function () {
        this._peticionesService.updateTaller(this.taller).subscribe(function (result) {
            console.log(result);
            var res = result;
            alert('Se guardó correctamente la edición');
            // this.router.navigate(['home/programs']);
            //    window.history.back();          
        }, function (error) {
            console.log(error);
            alert('Error al guardar verifique los datos');
        });
    };
    EditTallerCmrComponent.prototype.addBenefit = function () {
        this.router.navigate(['/home/cmr-talleres/benefit/add', this.taller]);
    };
    EditTallerCmrComponent.prototype.editBenefit = function (_idBenefit) {
        var _idBenefit_idTaller = _idBenefit + '-' + this.tallerId;
        this.router.navigate(['/home/cmr-talleres/benefit/edit', _idBenefit_idTaller]);
    };
    EditTallerCmrComponent.prototype.cancel = function () {
        // this.router.navigate(['home/programs']);
        window.history.back();
    };
    EditTallerCmrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-taller-cmr',
            template: __webpack_require__(/*! ./edit-taller-cmr.component.html */ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.html"),
            styles: [__webpack_require__(/*! ./edit-taller-cmr.component.css */ "./src/app/cmr-taller/edit-taller-cmr/edit-taller-cmr.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditTallerCmrComponent);
    return EditTallerCmrComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/add-consultoria/add-consultoria.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/consultorias/add-consultoria/add-consultoria.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/consultorias/add-consultoria/add-consultoria.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/consultorias/add-consultoria/add-consultoria.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n     <div class=\"content\">\n       <div class=\"box box-primary\">\n       \n         <div class=\"container \">\n             <div >\n                 <h1>Registrar Consultoria</h1>\n                 <br>\n                 <form (ngSubmit)=\"onSubmit()\" #addNewConsultoria=\"ngForm\" class=\"\">\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"name\" class=\"control-label\" >Nombre de Consultoria</label>\n                             <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                             [(ngModel)]=\"consultoria.name\" name=\"name\" #name=\"ngModel\" required />\n                             <span *ngIf=\"!name.untouched && !name.valid && consultoria.name == ''\" class=\"text-alert\">\n                              *Nombre de consultoria requerido.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && consultoria.name != '' && consultoria.name.length>43\" class=\"text-alert\">\n                              *Nombre de consultoria inválido, excedió el límite de 42 caracteres.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && consultoria.name != '' && consultoria.name.length<3\" class=\"text-alert\">\n                              *Nombre de consultoria inválido, tiene menos de 3 caracteres.\n                             </span>\n                            \n                     </div>\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"ubicacion\" class=\" control-label\">Descripcion</label>\n                                 <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                                  [(ngModel)]=\"consultoria.description\" name=\"details\" #details=\"ngModel\" required >\n                                 <span *ngIf=\"!details.valid && details.touched && consultoria.description == ''\" class=\"text-alert\">\n                                  *Descripcion de consultoria requerido.\n                                 <br></span>\n                                 <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && consultoria.description.length>150 \" class=\"text-alert\">\n                                  *Descripcion de consultoria inválido, excedió el límite de 150 caracteres.\n                                  <br></span>\n                                 <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && consultoria.description != '' && consultoria.description.length<3 \" class=\"text-alert\">\n                                  *Descripcion de consultoria inválido, tiene menos de 3 caracteres.\n                                  <br></span>\n                                \n                     </div>\n                     <div class=\"form-group col-sm-8\">\n                      <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                              <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                               [(ngModel)]=\"consultoria.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                              <span *ngIf=\"!objetctiv.valid && objetctiv.touched && consultoria.description == ''\" class=\"text-alert\">\n                               *Objetivo de consultoria requerido.\n                              <br></span>\n                              <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && consultoria.description.length>150 \" class=\"text-alert\">\n                               *Objetivo de consultoria inválido, excedió el límite de 150 caracteres.\n                               <br></span>\n                              <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && consultoria.description != '' && consultoria.description.length<3 \" class=\"text-alert\">\n                               *Objetivo de consultoria inválido, tiene menos de 3 caracteres.\n                               <br></span>\n                             \n                  </div>\n  \n                  <!-- <div class=\"form-group col-sm-8\">\n                    <label for=\"name\" class=\"control-label\">Imagen</label>\n                    <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n                  </div> -->\n  \n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                         <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addNewConsultoria.form.valid\">Guardar</button>\n                         <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\n                      </div>\n                 </form>\n             </div>\n         </div>\n       </div> \n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/consultorias/add-consultoria/add-consultoria.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/consultorias/add-consultoria/add-consultoria.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddConsultoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddConsultoriaComponent", function() { return AddConsultoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_consultoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/consultoria */ "./src/app/modelo/consultoria.ts");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddConsultoriaComponent = /** @class */ (function () {
    function AddConsultoriaComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.consultoria = new _modelo_consultoria__WEBPACK_IMPORTED_MODULE_1__["Consultoria"](" ", '', '', '', {});
        this.consultoria.photo = 'a';
    }
    AddConsultoriaComponent.prototype.ngOnInit = function () {
    };
    AddConsultoriaComponent.prototype.onSubmit = function () {
        console.log(this.consultoria);
        this._peticionesService.addConsultoria(this.consultoria).subscribe(function (res) {
            alert("Guardado Exitosamente");
            window.history.back();
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    AddConsultoriaComponent.prototype.cancelar = function () {
        window.history.back();
    };
    AddConsultoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-consultoria',
            template: __webpack_require__(/*! ./add-consultoria.component.html */ "./src/app/consultorias/add-consultoria/add-consultoria.component.html"),
            styles: [__webpack_require__(/*! ./add-consultoria.component.css */ "./src/app/consultorias/add-consultoria/add-consultoria.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], AddConsultoriaComponent);
    return AddConsultoriaComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n     <div class=\"content\">\n       <div class=\"box box-primary\">\n       \n         <div class=\"container \">\n             <div >\n                 <h1>Registrar Alcance</h1>\n                 <br>\n                 <form (ngSubmit)=\"onSubmit()\" #addAlcance=\"ngForm\" class=\"\">\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"name\" class=\"control-label\" >Nombre del Alcance</label>\n                             <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                             [(ngModel)]=\"newAlcance\" name=\"name\" #name=\"ngModel\" required />\n                             <span *ngIf=\"!name.untouched && !name.valid && newAlcance == ''\" class=\"text-alert\">\n                              *Nombre de Alcance requerido.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newAlcance != '' && newAlcance.length>43\" class=\"text-alert\">\n                              *Nombre de Alcance inválido, excedió el límite de 42 caracteres.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && newAlcance != '' && newAlcance.length<3\" class=\"text-alert\">\n                              *Nombre de Alcance inválido, tiene menos de 3 caracteres.\n                             </span>\n                           \n                     </div>\n                    \n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                         <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addAlcance.form.valid\">Guardar</button>\n                         <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                      </div>\n                 </form>\n             </div>\n         </div>\n       </div> \n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddScopeConsultoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScopeConsultoriaComponent", function() { return AddScopeConsultoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddScopeConsultoriaComponent = /** @class */ (function () {
    function AddScopeConsultoriaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    AddScopeConsultoriaComponent.prototype.ngOnInit = function () {
        this.queryTallerId();
    };
    AddScopeConsultoriaComponent.prototype.queryTallerId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.consultoriaId = params.id;
        });
    };
    AddScopeConsultoriaComponent.prototype.onSubmit = function () {
        var scopeObject = {};
        scopeObject.name = this.newAlcance;
        scopeObject.photo = '';
        this._peticionesService.addAlcanceToConsultoria(this.consultoriaId, scopeObject).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    AddScopeConsultoriaComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddScopeConsultoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-scope-consultoria',
            template: __webpack_require__(/*! ./add-scope-consultoria.component.html */ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.html"),
            styles: [__webpack_require__(/*! ./add-scope-consultoria.component.css */ "./src/app/consultorias/add-scope-consultoria/add-scope-consultoria.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], AddScopeConsultoriaComponent);
    return AddScopeConsultoriaComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/consultorias.component.css":
/*!*********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consultorias/consultorias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n\n    <div class=\"content\">\n        <div class=\"box box-primary\">\n          <div class=\"container \">\n            <h1>Cabecera Consultoria</h1>\n            <form (ngSubmit)=\"saveConsultoriaTop()\" #cmrConsultorias=\"ngForm\" class=\"\">\n             \n              <div class=\"form-group col-sm-8\">\n                <label for=\"name\" class=\"control-label\">Titulo Cabecera</label>\n                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"title\" [(ngModel)]=\"page_consultoria.tittle\" name=\"title\" #title=\"ngModel\" required />\n              </div>\n              <div class=\"form-group col-sm-8\">\n                <label for=\"name\" class=\"control-label\">Descripcion</label>\n                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"line\" [(ngModel)]=\"page_consultoria.line\" name=\"line\" #line=\"ngModel\" required />\n              </div>\n             \n              <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n            </form>\n          </div>\n        </div>\n      </div>\n\n  <div class=\"content\">\n\n    <div class=\"box box-primary\">\n        <section class=\"content\">\n            <div>\n              <ul class=\"\">\n                <h3>Consultorias</h3>\n                <li>\n                  <a class=\"btn btn-primary\" [routerLink]=\"['/home/consultorias/add']\">\n                    <i class=\"fa fa-book\"></i> Agregar Consultoria</a>\n                </li>\n              </ul>\n            </div>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th>Nombre</th>\n                  <th>Descripcion</th>\n                  <th>Objetivo</th>\n                  <th colspan=\"3\">Ajustes</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let w of consultorias\">\n                  <td>{{ w.name }} </td>\n                  <td>{{ w.description }}</td>\n                  <td>{{ w.objective }}</td>\n                  <td>\n                    <button class=\"btn btn-warning\" (click)=\"edit(w._id)\"> Editar</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"\" style=\"text-align: center\">\n              <button class=\"btn btn-primary\" (click)=\"cancelar()\">Volver</button>\n            </div>\n        \n          </section>\n\n    </div>\n  </div>\n \n</div>"

/***/ }),

/***/ "./src/app/consultorias/consultorias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.ts ***!
  \********************************************************/
/*! exports provided: ConsultoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultoriasComponent", function() { return ConsultoriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultoriasComponent = /** @class */ (function () {
    function ConsultoriasComponent(_peticionesService, _router) {
        this._peticionesService = _peticionesService;
        this._router = _router;
    }
    ConsultoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page_consultoria = res[0].consultoria;
            _this.id = res[0]._id;
        });
        this.queryConsultorias();
    };
    ConsultoriasComponent.prototype.queryConsultorias = function () {
        var _this = this;
        this._peticionesService.getConsultorias().subscribe(function (response) {
            _this.consultorias = response;
            // this.lista_personas = this.lista;
            console.log(_this.consultorias, response);
        });
    };
    ConsultoriasComponent.prototype.saveConsultoriaTop = function () {
        this._peticionesService.updateInicio_consultoria(this.page_consultoria, this.id).subscribe(function (res) {
            alert("Guardado Exitosamente");
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    ConsultoriasComponent.prototype.edit = function (consultoriaId) {
        this._router.navigate(['home/consultorias/edit', consultoriaId]);
    };
    ConsultoriasComponent.prototype.cancelar = function () {
    };
    ConsultoriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultorias',
            template: __webpack_require__(/*! ./consultorias.component.html */ "./src/app/consultorias/consultorias.component.html"),
            styles: [__webpack_require__(/*! ./consultorias.component.css */ "./src/app/consultorias/consultorias.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConsultoriasComponent);
    return ConsultoriasComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/consultorias/edit-consultoria/edit-consultoria.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/consultorias/edit-consultoria/edit-consultoria.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n     <div class=\"content\">\n       <div class=\"box box-primary\">\n       \n         <div class=\"container \">\n             <div >\n                 <h1>Registrar Consultoria</h1>\n                 <br>\n                 <form (ngSubmit)=\"onSubmit()\" #addNewConsultoria=\"ngForm\" class=\"\">\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"name\" class=\"control-label\" >Nombre de Consultoria</label>\n                             <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                             [(ngModel)]=\"consultoria.name\" name=\"name\" #name=\"ngModel\" required />\n                             <span *ngIf=\"!name.untouched && !name.valid && consultoria.name == ''\" class=\"text-alert\">\n                              *Nombre de consultoria requerido.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && consultoria.name != '' && consultoria.name.length>43\" class=\"text-alert\">\n                              *Nombre de consultoria inválido, excedió el límite de 42 caracteres.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && consultoria.name != '' && consultoria.name.length<3\" class=\"text-alert\">\n                              *Nombre de consultoria inválido, tiene menos de 3 caracteres.\n                             </span>\n                            \n                     </div>\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"ubicacion\" class=\" control-label\">Descripcion</label>\n                                 <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                                  [(ngModel)]=\"consultoria.description\" name=\"details\" #details=\"ngModel\" required >\n                                 <span *ngIf=\"!details.valid && details.touched && consultoria.description == ''\" class=\"text-alert\">\n                                  *Descripcion de consultoria requerido.\n                                 <br></span>\n                                 <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && consultoria.description.length>150 \" class=\"text-alert\">\n                                  *Descripcion de consultoria inválido, excedió el límite de 150 caracteres.\n                                  <br></span>\n                                 <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && consultoria.description != '' && consultoria.description.length<3 \" class=\"text-alert\">\n                                  *Descripcion de consultoria inválido, tiene menos de 3 caracteres.\n                                  <br></span>\n                                \n                     </div>\n                     <div class=\"form-group col-sm-8\">\n                      <label for=\"objetivo\" class=\" control-label\">Objetivo</label>\n                              <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                               [(ngModel)]=\"consultoria.objective\" name=\"objet\" #objetctiv=\"ngModel\" required >\n                              <span *ngIf=\"!objetctiv.valid && objetctiv.touched && consultoria.description == ''\" class=\"text-alert\">\n                               *Objetivo de consultoria requerido.\n                              <br></span>\n                              <span *ngIf=\"objetctiv.dirty && objetctiv.touched && !objetctiv.valid && objetctiv.name != '' && consultoria.description.length>150 \" class=\"text-alert\">\n                               *Objetivo de consultoria inválido, excedió el límite de 150 caracteres.\n                               <br></span>\n                              <span *ngIf=\"!objetctiv?.pattern && objetctiv.dirty && objetctiv.touched && !objetctiv.valid && consultoria.description != '' && consultoria.description.length<3 \" class=\"text-alert\">\n                               *Objetivo de consultoria inválido, tiene menos de 3 caracteres.\n                               <br></span>\n                             \n                  </div>\n  \n                  <!-- <div class=\"form-group col-sm-8\">\n                    <label for=\"name\" class=\"control-label\">Imagen</label>\n                    <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n                  </div> -->\n  \n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                         <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addNewConsultoria.form.valid\">Guardar</button>\n                         <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\n                      </div>\n                 </form>\n             </div>\n         </div>\n       </div> \n     </div>\n\n\n     <div class=\"content\">\n        <div class=\"box box-primary\">\n          <div class=\"container \">\n            <section class=\"content-header\">\n              <h1>\n                Alcances\n                <small>Vigentes</small>\n              </h1>\n            </section>\n            <section class=\"content col-sm-8\">\n              <a class=\"btn btn-primary a\" (click)=\"addAlcance()\">\n                <i class=\"fa fa-book\"></i> Registrar Alcance</a>\n          \n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Nombre</th>\n                   \n                    <th >Ajustes</th>\n                   \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let oneScope of consultoria.scopes\">\n                    <td>{{ oneScope.name }}</td>\n                  \n                    <td>\n                      <a class=\"btn btn-warning\" (click)=\"editScope(oneScope._id)\">EDITAR</a>\n                    </td>\n                  \n                  </tr>\n                </tbody>\n              </table>\n          \n            </section>\n          </div>\n        </div>\n\n\n  </div>"

/***/ }),

/***/ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/consultorias/edit-consultoria/edit-consultoria.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditConsultoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConsultoriaComponent", function() { return EditConsultoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditConsultoriaComponent = /** @class */ (function () {
    function EditConsultoriaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditConsultoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.consultoriaId = params.id;
            _this._peticionesService.getConsultoria(_this.consultoriaId).subscribe(function (result) {
                _this.consultoria = result;
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditConsultoriaComponent.prototype.onSubmit = function () {
        this._peticionesService.updateConsultoria(this.consultoria).subscribe(function (result) {
            console.log(result);
            var res = result;
            alert('Se guardó correctamente la edición');
            // this.router.navigate(['home/programs']);
            //    window.history.back();          
        }, function (error) {
            console.log(error);
            alert('Error al guardar verifique los datos');
        });
    };
    EditConsultoriaComponent.prototype.addAlcance = function () {
        this.router.navigate(['/home/consultorias/scope/add', this.consultoriaId]);
    };
    EditConsultoriaComponent.prototype.editScope = function (scope_id) {
        var scopeId_ConsultoriaId = scope_id + '-' + this.consultoriaId;
        this.router.navigate(['/home/consultorias/scope/edit', scopeId_ConsultoriaId]);
    };
    EditConsultoriaComponent.prototype.cancelar = function () {
        window.history.back();
    };
    EditConsultoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-consultoria',
            template: __webpack_require__(/*! ./edit-consultoria.component.html */ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.html"),
            styles: [__webpack_require__(/*! ./edit-consultoria.component.css */ "./src/app/consultorias/edit-consultoria/edit-consultoria.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditConsultoriaComponent);
    return EditConsultoriaComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n     <div class=\"content\">\n       <div class=\"box box-primary\">\n       \n         <div class=\"container \">\n             <div >\n                 <h1>Registrar Alcance</h1>\n                 <br>\n                 <form (ngSubmit)=\"onSubmit()\" #editScopeConsultoria=\"ngForm\" class=\"\">\n                     <div class=\"form-group col-sm-8\">\n                         <label for=\"name\" class=\"control-label\" >Nombre del Beneficio</label>\n                             <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                             [(ngModel)]=\"editScope.name\" name=\"name\" #name=\"ngModel\" required />\n                             <span *ngIf=\"!name.untouched && !name.valid && editScope == ''\" class=\"text-alert\">\n                              *Nombre de Alcance requerido.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editScope != '' && editScope.length>43\" class=\"text-alert\">\n                              *Nombre de Alcance inválido, excedió el límite de 42 caracteres.\n                             </span>\n                             <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && editScope != '' && editScope.length<3\" class=\"text-alert\">\n                              *Nombre de Alcance inválido, tiene menos de 3 caracteres.\n                             </span>\n                           \n                     </div>\n                    \n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                         <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!editScopeConsultoria.form.valid\">Guardar</button>\n                         <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                      </div>\n                 </form>\n             </div>\n         </div>\n       </div> \n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditScopeConsultoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditScopeConsultoriaComponent", function() { return EditScopeConsultoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditScopeConsultoriaComponent = /** @class */ (function () {
    function EditScopeConsultoriaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditScopeConsultoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.scopeId = params.id.split('-')[0];
            _this.consultoriaId = params.id.split('-')[1];
            _this.findConsultoria();
        });
    };
    EditScopeConsultoriaComponent.prototype.findConsultoria = function () {
        var _this = this;
        this._peticionesService.getConsultoria(this.consultoriaId).subscribe(function (result) {
            _this.consultoria = result;
            for (var _i = 0, _a = _this.consultoria.scopes; _i < _a.length; _i++) {
                var scope = _a[_i];
                if (scope._id == _this.scopeId) {
                    _this.editScope = scope;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditScopeConsultoriaComponent.prototype.onSubmit = function () {
        for (var _i = 0, _a = this.consultoria.scopes; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s._id == this.scopeId) {
                s = this.editScope;
            }
        }
        this._peticionesService.updateConsultoria(this.consultoria).subscribe(function (res) {
            alert('Guardado Exitosamente');
            window.history.back();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditScopeConsultoriaComponent.prototype.cancel = function () {
        window.history.back();
    };
    EditScopeConsultoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-scope-consultoria',
            template: __webpack_require__(/*! ./edit-scope-consultoria.component.html */ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.html"),
            styles: [__webpack_require__(/*! ./edit-scope-consultoria.component.css */ "./src/app/consultorias/edit-scope-consultoria/edit-scope-consultoria.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditScopeConsultoriaComponent);
    return EditScopeConsultoriaComponent;
}());



/***/ }),

/***/ "./src/app/contactanos/contactanos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactanos/contactanos.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactanos works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactanos/contactanos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.ts ***!
  \******************************************************/
/*! exports provided: ContactanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactanosComponent", function() { return ContactanosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactanosComponent = /** @class */ (function () {
    function ContactanosComponent() {
    }
    ContactanosComponent.prototype.ngOnInit = function () {
    };
    ContactanosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactanos',
            template: __webpack_require__(/*! ./contactanos.component.html */ "./src/app/contactanos/contactanos.component.html"),
            styles: [__webpack_require__(/*! ./contactanos.component.css */ "./src/app/contactanos/contactanos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactanosComponent);
    return ContactanosComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-left{\n    margin-left: 10px !important;\n}"

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n   <section class=\"content\">\n      <!-- <app-addPerson (messageEvent)=\"receiveMessage()\"></app-addPerson> -->\n      <!-- <a class=\"btn btn-primary\" (click)=\"addPerson()\">Registrar Persona</a> -->\n      <!-- <app-persona></app-persona> -->\n      <div>\n         <ol class=\"breadcrumb\">\n            <!-- <br> -->\n            <li>\n               <a class=\"btn btn-primary\" [routerLink]=\"['/home/inscription/'+event?._id]\">\n                  <i class=\"fa fa-book\"></i> Inscribir Persona</a>\n            </li>\n            <li>\n                  <a class=\"btn btn-primary\" [routerLink]=\"['/home/nivelacion/'+event?._id]\">\n                  <i class=\"fa fa-book\"></i> Nivelacion </a>\n            </li>\n            <li>\n                  <a class=\"btn btn-primary\" [routerLink]=\"['/home/workshop/'+event?._id]\">\n                     <i class=\"fa fa-book\"></i> Inscribir Persona a Taller</a>\n               </li>\n            <li>\n               <a class=\"btn btn-primary\" [routerLink]=\"['/home/accountsModulars/'+event?._id]\">\n                  <i class=\"fa fa-book\"></i> Reportes Modulares</a>\n            </li>\n            <li *ngIf='role?.name==\"Admin\"'>\n                  <button class=\"btn btn-danger fa fa-book\" (click)=\"cerrarEvento(event?._id)\" [disabled]=\"!activeEvent\">Cerrar Evento </button>\n\n               </li>\n            <!-- <li><app-control-asistance></app-control-asistance></li> -->\n         </ol>\n      </div>\n      <div>\n         <h1>{{event?.name}}</h1>\n      </div>\n      <div class=\"btn-group\" data-toggle=\"buttons\">\n\n            <label *ngFor=\"let m of modules\">\n\n                  <button class=\"btn btn-primary margin-left\"  (click)=\"setListInscriptions(m._id,m.name)\"> {{m.name}}</button> \n            </label>\n      </div>\n      <p>\n            \n            <label >\n                  \n                  <h3>{{moduleName}}</h3>\n                  Lista de personas\n                  \n            </label>\n      </p>\n      <div *ngIf=\"(moduleName!=undefined)\">\n\n            <button class=\"btn btn-primary\" [routerLink]=\"['/home/imprimirLoteCertificados/'+certificateData]\">Imprimir Certificados de asistentes</button>\n      </div>\n\n      <table class=\"table table-hover\" *ngIf=\"moduleName!=null\">\n         <thead>\n            <tr>\n               <th>Nombre</th>\n               <th>CI</th>\n               <th>Celular</th>\n               <th>Monto Cancelado</th>\n               <th>Perfil</th>\n               <th>Asistencia</th>\n               <!-- <th>asis</th> -->\n               <!-- <th>Opciones</th> -->\n               <th>Control de Pago</th>\n               \n            </tr>\n         </thead>\n         <tbody>\n            <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\n            <tr *ngFor=\"let i of lista_personasPorModulo\" [ngSwitch]=\"i.assist\">\n               <td>{{ i.name }}</td>\n               <td>{{ i.ci }}</td>\n               <td>{{ i.cellphone }}</td>\n               <td>{{ i.canceled_price }}</td>\n               <td>\n                  <a class=\"btn btn-info\" (click)=\"viewProfile(i.persons)\">VER</a>\n               </td>\n               <td *ngSwitchCase=\"false\">\n                  <button class=\"btn btn-danger\" (click)=\"marcarAsistencia(i.persons)\"> No Asistió</button>\n               </td>\n               <td *ngSwitchCase=\"true\">\n                  <button class=\"btn btn-success\" disabled> Asistió</button>\n               </td>\n\n               <td>\n                  <!-- <a class=\"btn btn-success\" (click)=\"control(i.persons)\">CONTROL</a> -->\n                  <button *ngIf=\"0 >= (i.price_event)- (i.canceled_price)\" disabled class=\"btn btn-primary\" (click)=\"control(i.persons)\">CONTROL</button>\n                  <button *ngIf=\"0 < (i.price_event)-(i.canceled_price) \" class=\"btn btn-primary\" (click)=\"control(i.persons)\">CONTROL</button>\n               </td>\n            </tr>\n         </tbody>\n      </table>\n      <table class=\"table table-hover\" *ngIf=\"moduleName==null\">\n                  <thead>\n                     <tr>\n                        <th>Nombre</th>\n                        <th>CI</th>\n                        <th>Celular</th>\n                        <th>Monto Cancelado</th>\n                        <th>Perfil</th>\n                        <!-- <th>Opciones</th> -->\n                        <th>Control de Pago</th>\n                     </tr>\n                  </thead>\n                  <tbody>\n                     <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\n                     <tr *ngFor=\"let i of lista_personasPorModulo\" [ngSwitch]=\"i.assist\">\n                        <td>{{ i.name }}</td>\n                        <td>{{ i.ci }}</td>\n                        <td>{{ i.cellphone }}</td>\n                        <td>{{ i.canceled_price }}</td>\n                        <td>\n                           <a class=\"btn btn-info\" (click)=\"viewProfile(i.persons)\">VER</a>\n                        </td>  \n                        <!-- <td>\n                           <!-- <app-editPerson [editPerson]=\"event\"></app-editPerson>\n                           <a class=\"btn btn-warning\" (click)=\"edit(i.persons)\">EDITAR</a>\n                           <!-- <a class=\"btn btn-success\" (click)=\"asistence(i.persons)\">Asistand</a>\n                        </td> -->\n                        <td>\n                           <!-- <a class=\"btn btn-success\" (click)=\"control(i.persons)\">CONTROL</a> -->\n                           <button *ngIf=\"0 >= (i.price_event)- (i.canceled_price)\" disabled class=\"btn btn-primary\" (click)=\"control(i.persons)\">CONTROL</button>\n                           <button *ngIf=\"0 < (i.price_event)-(i.canceled_price) \" class=\"btn btn-primary\" (click)=\"control(i.persons)\">CONTROL</button>\n                        </td>\n                     </tr>\n                  </tbody>\n      </table>\n      \n      <div class=\"\" style=\"text-align: center\">\n            <button class=\"btn btn-primary\" (click)=\"cancelar()\">Volver</button>\n      </div>\n\n   </section>\n   <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventComponent = /** @class */ (function () {
    //////////////////////////////////////////////
    function EventComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
        this.lista_personasPorModulo = [];
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            console.log(_this.eventId);
            _this.queryRol();
        });
        this.queryEventInscription();
    };
    EventComponent.prototype.queryEventInscription = function () {
        // this._peticionesService.getEventInscriptions(this.eventId).subscribe(
        // result => {
        //       this.event = result;
        //       this.activeEvent=this.event.active;
        //       this.queryModules();
        //       console.log(this.event);
        //       this.inscriptions = this.event.inscriptions;
        //       var total = this.event.total;   
        //       this.lista_personasPorModulo=this.inscriptions; 
        //       console.log('esta es la inscripcion de la persona');
        //       console.log(this.lista_personasPorModulo);      
        // },
        // error => {
        //       var errorMessage = <any>error;
        //       console.log(errorMessage);
        // }
        // );
    };
    EventComponent.prototype.queryModules = function () {
        var _this = this;
        this._peticionesService.getModulos(this.event.programs).subscribe(function (result) {
            _this.modules = result;
            _this.modules.sort(function (left, right) {
                if (left.name < right.name)
                    return -1;
                if (left.name > right.name)
                    return 1;
                return 0;
            });
        });
    };
    EventComponent.prototype.viewProfile = function (personId) {
        this.router.navigate(['home/profilePerson', personId]);
    };
    EventComponent.prototype.edit = function (personId) {
        this.router.navigate(['home/persons/edit', personId]);
    };
    EventComponent.prototype.asistence = function (_id) {
        this.personId = _id;
        var idEvenPers = _id + '-' + this.eventId;
        this.router.navigate(['home/event/asistencia', idEvenPers]);
    };
    EventComponent.prototype.control = function (_id) {
        this.personId = _id;
        var idEvenPers = _id + '-' + this.eventId;
        this.router.navigate(['home/event/controPago/', idEvenPers]);
    };
    EventComponent.prototype.cancelar = function () {
        //window.history.back();
        this.router.navigate(['home/eventos']);
    };
    EventComponent.prototype.ngAfterViewInit = function () { };
    EventComponent.prototype.queryRol = function () {
        var _this = this;
        //console.log(Identity.rol)
        this._peticionesService.getRole(_services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].rol).subscribe(function (result) {
            _this.role = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/event/filtro/filtropersona.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/event/filtro/filtropersona.pipe.ts ***!
  \****************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { Injectable, Pipe, PipeTransform } from '@angular/core';
//  @Pipe({
//      name: 'search'
//  })
//  @Injectable()
//  export class SearchPipe implements PipeTransform{
//     transform(items: any, term: any):any{//termino de busqueda
//         if(term === undefined){
//             return items;
//         }
//         return items.filter(function(item){
//             return item.name.toLowerCase().includes(term.toLowerCase());//texto que este incluido
//         });
//     }
//  }

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/event/persona/addPerson/addPerson.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.text-alert{\n  color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.html":
/*!******************************************************************!*\
  !*** ./src/app/event/persona/addPerson/addPerson.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"content-wrapper\">\n      <br>\n       <div class=\"content\">\n         <div class=\"box box-primary\">\n           <div class=\"container \">\n               <div [hidden]=\"submitted\">\n                   <h1>Registrar Persona</h1>\n                   <form (ngSubmit)=\"guardar()\" #addPerson=\"ngForm\" class=\"jumbotron\">\n                       <div class=\"form-group col-sm-8\">\n                            <div class=\"form-group col-sm-6\" style=\"text-align: center\">\n                                    <label for=\"first_name\" class=\"control-label\" >Nombres</label>\n                                        <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"first_name\" \n                                        [(ngModel)]=\"person.first_name\" name=\"first_name\" #firstname=\"ngModel\" required />\n                                        <span *ngIf=\"!firstname.valid && firstname.touched && person.first_name == ''\" class=\"text-alert\">\n                                                *Nombre requerido.\n                                        <br></span>\n                                        <span *ngIf=\"firstname.dirty && firstname.touched && !firstname.valid && firstname.name != '' && person.first_name.length>25 \" class=\"text-alert\">\n                                        *Nombre invalido excedió el limite de caracteres.\n                                        <br></span>\n                                        <span *ngIf=\"!firstname?.pattern && firstname.dirty && firstname.touched && !firstname.valid && person.first_name != '' && person.first_name.length<3 \" class=\"text-alert\">\n                                        *Nombre invalido tiene menos de 3 caracteres.\n                                        <br></span>\n                                        <span *ngIf=\"!firstname?.pattern && firstname.dirty && firstname.touched && !firstname.valid && person.first_name != '' && person.first_name.length < 26 && person.first_name.length > 2 \" class=\"text-alert\">\n                                        *Nombre invalido no se permiten simbolos.\n                                        </span>\n                                        <!-- <span *ngIf=\"!firstname.valid && firstname.touched\" class=\"text-alert\">\n                                                *Nombre de persona requerido.\n                                        </span>\n                                        <span *ngIf=\" firstname?.pattern && firstname.touched\" class=\"text-alert\">\n                                            *Nombre inválido\n                                    </span> -->\n                                    <!-- <div [hidden]=\"first_name?.valid || first_name?.pristine\" class=\"text-alert\">\n                                        kjknkasdkjhjask\n                                    </div> -->\n                                </div>\n                                <div class=\"form-group col-sm-6\" style=\"text-align: center\">\n                                   <label for=\"last_name\" class=\"control-label\" >Apellidos</label>\n                                       <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"last_name\" \n                                       [(ngModel)]=\"person.last_name\" name=\"last_name\" #lastname=\"ngModel\" required />\n                                       <span *ngIf=\"!lastname.valid && lastname.touched && person.last_name == ''\" class=\"text-alert\">\n                                            *Apellido requerido.\n                                        <br></span>\n                                        <span *ngIf=\"lastname.dirty && lastname.touched && !lastname.valid && lastname.name != '' && person.last_name.length>60 \" class=\"text-alert\">\n                                        *Apellido invalido excedió el limite de caracteres.\n                                        <br></span>\n                                        <span *ngIf=\"!lastname?.pattern && lastname.dirty && lastname.touched && !lastname.valid && person.last_name != '' && person.last_name.length<3 \" class=\"text-alert\">\n                                        *Apellido invalido tiene menos de 3 caracteres.\n                                        <br></span>\n                                        <span *ngIf=\"!lastname?.pattern && lastname.dirty && lastname.touched && !lastname.valid && person.last_name != '' && person.last_name.length < 61 && person.last_name.length > 2 \" class=\"text-alert\">\n                                        *Apellido invalido no se permiten simbolos.\n                                        </span>\n                                       <!-- <span *ngIf=\"!lastname.valid && lastname.touched && lastname?.pattern\" class=\"text-alert\">\n                                               *Apellido de persona requerido.\n                                       </span>\n                                       <span *ngIf=\"lastname?.pattern && lastname.touched\" class=\"text-alert\">\n                                        *Apellido inválido.\n                                </span> -->\n                                   <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                                       kjkn\n                                   </div>-->\n                               </div>\n                       </div>\n                       <div class=\"form-group col-sm-8\">\n                          <div class=\"form-group col-sm-4\">\n                              <label for=\"ci\" class=\"control-label\" style=\"text-align: left\" >Cedula de Identidad</label>\n                                  <input type=\"number\" pattern=\"[1-9][0-9]{6}\" class=\"form-control\" id=\"ci\" \n                                  [(ngModel)]=\"person.ci\" name=\"ci\" #ci=\"ngModel\" required/>\n                                  <span *ngIf=\"!ci.valid && ci.touched\" class=\"text-alert\">\n                                          *CI de persona requerido o es invalido.\n                                  </span>\n                                  <span *ngIf=\"ci?.pattern && ci.touched\" class=\"text-alert\">\n                                    *CI de persona es inválido.\n                            </span>\n                          </div>\n                          <div class=\"form-group col-sm-4\">\n                              <label for=\"cellphone\" class=\"control-label\" style=\"text-align: center\">Celular</label>\n                                  <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cellphone\" \n                                  [(ngModel)]=\"person.cellphone\" name=\"cellphone\" #cellphone=\"ngModel\" required />\n                                  <span *ngIf=\" cellphone.touched && person.cellphone == null\" class=\"text-alert\">\n                                          *Celular de persona requerido.\n                                  </span>\n                                  <span *ngIf=\"!cellphone?.pattern && cellphone.touched && !cellphone.valid\" class=\"text-alert\">\n                                        *Celular de persona inválido.\n                                </span>\n                                  <!-- <span *ngIf=\" cellphone?.pattern && cellphone.touched\" class=\"text-alert\">\n                                    *Celular de persona inválido.\n                                  </span> -->\n                          </div>\n                          <div class=\"form-group col-sm-4\">\n                              <label for=\"phone\" class=\"control-label\" style=\"text-align: right\">Teléfono</label>\n                                  <input type=\"number\" pattern=\"[4][0-9]{6}\" class=\"form-control\" id=\"phone\" \n                                  [(ngModel)]=\"person.phone\" name=\"phone\" #phone=\"ngModel\"/>\n                                  <span *ngIf=\"!phone.valid && phone.touched\" class=\"text-alert\">\n                                          *Telefono de persona requerido o es invalido.\n                                  </span>\n                                  <span *ngIf=\"phone?.pattern && phone.touched\" class=\"text-alert\">\n                                    *Teléfono de persona es inválido.\n                                </span>\n                          </div>\n                      </div>\n                      <div class=\"form-group col-sm-8\" >\n                          <div class=\"form-group col-sm-6\">\n                              <label for=\"email\" class=\"control-label\" style=\"text-align: left\">Correo Electrónico</label>\n                                  <input type=\"email\" pattern=\"[a-zA-Z.0-9_]*[@][a-zA-Z]{3,15}[.][a-zA-Z]{2,15}\" class=\"form-control\" id=\"email\" \n                                  \n                                  [(ngModel)]=\"person.email\" name=\"email\" #email=\"ngModel\" />\n                                  <span *ngIf=\"!email.valid && email.touched\" class=\"text-alert\">\n                                          *Email de persona requerido.\n                                  </span>\n                                  <span *ngIf=\"email?.pattern && email.touched\" class=\"text-alert\">\n                                    *Email de persona requerido.\n                                  </span>\n                          </div>\n                        </div>\n                        <!-- <div class=\"form-group col-sm-8\" >\n                            <div class=\"form-group col-sm-3\">\n                                <label for=\"difinePrice\" class=\"control-label\"style=\"text-align:right\" >Precio Definido</label>\n                                    <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"difinePrice\" \n                                        [(ngModel)]=\"inscription.price_event\" name=\"definePrice\" #definePrice=\"ngModel\"/>\n                                        <span *ngIf=\"!definePrice.valid && definePrice.touched\" class=\"text-alert\">\n                                                    *Precio de definido invalido.\n                                        </span>\n                                        <span *ngIf=\"definePrice?.pattern\" class=\"text-alert\">\n                                            *Invalido Cobro.\n                                        </span>\n                            </div>\n                          <div class=\"form-group col-sm-3\">\n                              <label for=\"monto\" class=\"control-label\"style=\"text-align:right\" >Pago Inicial</label>\n                                  <input type=\"number\" pattern=\"[0-9]{0,5}\" class=\"form-control\" id=\"monto\" \n                                  [(ngModel)]=\"inscription.canceled_price\" name=\"monto\" #monto=\"ngModel\"/>\n                                  <span *ngIf=\"!monto.valid && monto.touched\" class=\"text-alert\">\n                                          *Monto Inicial invalido.\n                                  </span>\n                                  <span *ngIf=\"monto?.pattern\" class=\"text-alert\">\n                                            *monto invalido\n                                  </span>\n                          </div>\n                          <div class=\"form-group col-sm-3\">\n                                <label for=\"receipt\" class=\"control-label\"style=\"text-align:right\" >Nro Recibo</label>\n                                    <input type=\"text\" pattern=\"[0-9]{0,15}[a-zA-Z]{0,5}\" class=\"form-control\" id=\"receipt\" \n                                    [(ngModel)]=\"inscription.receipt\" name=\"receipt\" #receipt=\"ngModel\" required />\n                                    <span *ngIf=\"!receipt.valid && receipt.touched\" class=\"text-alert\">\n                                            *Numero de Recibo invalido.\n                                    </span>\n                            </div>\n                      </div> -->\n                      <div class=\"form-group col-sm-8\">\n                          <label for=\"ocupSelect\">\n                            <i class=\"fa fa-tag prefix grey-text\"></i>Ocupación</label>\n                          <select class=\"form-control\" id=\"ocupSelect\" [(ngModel)]=\"ocupSelected\" (change)=\"captOcupation()\"\n                               name=\"ocupSelect\" #ocupSelect=\"ngModel\">\n                              <option value=\"\" hidden>Seleccionar...</option>                               \n                              <option value=\"estudiante\">Estudiante</option>\n                              <option value=\"profesional\">Profesional</option>\n                              <option value=\"particular\">Particular</option>                     \n                          </select>\n                          <div class=\"form-group col-sm-6\">\n                            <br>\n                            <p *ngIf=\"ocupSelected == 'estudiante'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,4}\" placeholder=\"Universidad\" name=\"universidad\" #universidad=\"ngModel\" \n                              [(ngModel)]=\"descOcupation.universidad\" class=\"form-control\" />\n                              <span *ngIf=\"!universidad.valid && universidad.touched\" class=\"text-alert\">\n                                  <h6>*Nombre de Universidad requerido.</h6> \n                              </span>\n                            </p>\n                            <p *ngIf=\"ocupSelected == 'estudiante'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,3}\" placeholder=\"Carrera\" name=\"carrera\" #carrera=\"ngModel\"\n                                 [(ngModel)]=\"descOcupation.carrera\" class=\"form-control\"/>\n                                 <span *ngIf=\"!carrera.valid && carrera.touched\" class=\"text-alert\">\n                                    <h6>*Carrera de persona requerido.</h6>\n                                 </span> \n                              </p> \n                              <p *ngIf=\"ocupSelected == 'estudiante'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z0-9]{1,20}([ ]{0,1}[a-zA-Z0-9]{0,20}){0,2}\" placeholder=\"Semestre\" name=\"semestre\" #semestre=\"ngModel\" \n                                [(ngModel)]=\"descOcupation.semestre\" class=\"form-control\"  /> \n                                <span *ngIf=\"!semestre.valid && semestre.touched\" class=\"text-alert\">\n                                    <h6>*Semestre de persona requerido.</h6>\n                                </span>\n                              </p>\n                              <p *ngIf=\"ocupSelected == 'particular'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,3}\" placeholder=\"Area de Trabajo\" name=\"areaTrabajo\" #areaTrabajo=\"ngModel\" \n                                [(ngModel)]=\"descOcupation.areaTrabajo\" class=\"form-control\"  /> \n                                <span *ngIf=\"!areaTrabajo.valid && areaTrabajo.touched\" class=\"text-alert\">\n                                    <h6>*Área de trabajo de persona requerido.</h6>\n                                </span>\n                              </p> \n                              <p *ngIf=\"ocupSelected == 'profesional'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,3}\" placeholder=\"Profesion\" name=\"profesion\" #profesion=\"ngModel\"\n                                 [(ngModel)]=\"descOcupation.profesion\" class=\"form-control\"  /> \n                                 <span *ngIf=\"!profesion.valid && profesion.touched\" class=\"text-alert\">\n                                    <h6>*Profesión de persona requerido.</h6>\n                               </span>\n                              </p> \n                              <p *ngIf=\"ocupSelected == 'profesional'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,3}\" placeholder=\"Empresa\" name=\"empresa\" #empresa=\"ngModel\"\n                                 [(ngModel)]=\"descOcupation.empresa\" class=\"form-control\"   /> \n                                 <span *ngIf=\"!empresa.valid && empresa.touched\" class=\"text-alert\">\n                                    <h6>*Nombre de Empresa requerido.</h6>\n                                </span>\n                              </p> \n                              <p *ngIf=\"ocupSelected == 'profesional'\">\n                                <input type=\"text\" pattern=\"[a-zA-Z]{3,20}([ ]{0,1}[a-zA-Z]{0,20}){0,3}\" placeholder=\"Cargo\" name=\"cargo\" #cargo=\"ngModel\" \n                                [(ngModel)]=\"descOcupation.cargo\" class=\"form-control\"  />\n                                <span *ngIf=\"!cargo.valid && cargo.touched\" class=\"text-alert\">\n                                    <h6>*Cargo de persona requerido.</h6>\n                                </span> \n                              </p>\n                            </div>\n                      </div>\n                      <!-- <div class=\"form-group col-sm-8\">\n                              <label for=\"evento\">Evento</label>\n                              <select class=\"form-control\" id=\"evento\" [(ngModel)]=\"IdEvent\"\n                                      name=\"evento\" #evento=\"ngModel\" required >\n                                <option *ngFor=\"let evento of eventos\" [value]=\"evento._id\">{{evento.name}}</option>\n                              </select>\n                      </div> -->\n                       <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                          <button type=\"button\" class=\"btn btn-info\" (click)=\"addPerson.reset()\">Limpiar</button>\n                          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addPerson.form.valid\" >Registrar</button>\n                          <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                          <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\n                      </div>\n                   </form>\n               </div>\n           </div>\n         </div> \n       </div>\n\n   </div>"

/***/ }),

/***/ "./src/app/event/persona/addPerson/addPerson.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/event/persona/addPerson/addPerson.component.ts ***!
  \****************************************************************/
/*! exports provided: AddPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonComponent", function() { return AddPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _modelo_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modelo/person */ "./src/app/modelo/person.ts");
/* harmony import */ var _modelo_inscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modelo/inscription */ "./src/app/modelo/inscription.ts");
/* harmony import */ var _modelo_registro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modelo/registro */ "./src/app/modelo/registro.ts");
/* harmony import */ var _modelo_descOcupation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modelo/descOcupation */ "./src/app/modelo/descOcupation.ts");
/* harmony import */ var _modelo_cashflowusers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modelo/cashflowusers */ "./src/app/modelo/cashflowusers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddPersonComponent = /** @class */ (function () {
    function AddPersonComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitted = false;
        this.person = new _modelo_person__WEBPACK_IMPORTED_MODULE_4__["Person"]('', '', null, null, null, '', '', null, '');
        //first_name,last_name,ci,phone,cellphone,email,ocupation,descOcupation:{ },carteras
        this.inscription = new _modelo_inscription__WEBPACK_IMPORTED_MODULE_5__["Inscription"](null, null, null, null, 0, 0, '0', '');
        //this.identy=Identity._id;
        this.descOcupation = new _modelo_descOcupation__WEBPACK_IMPORTED_MODULE_7__["DescOcupation"]('', '', '', '', '', '', '');
        this.registro = new _modelo_registro__WEBPACK_IMPORTED_MODULE_6__["Registro"](null, null, '', '', ''); //idEvent,idUser,persona:{}, montCancel
        this.ingresoPorInscripcion = new _modelo_cashflowusers__WEBPACK_IMPORTED_MODULE_8__["Cashflowusers"](new Date(), new Date(), 0, 0, 0, "", "", "", "", "", "");
    }
    AddPersonComponent.prototype.onSubmit = function () {
    };
    AddPersonComponent.prototype.ngOnInit = function () {
        console.log(_services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"]._id);
        //this.queryPrograms();
        this.queryEvents();
    };
    AddPersonComponent.prototype.guardar = function () {
        // console.log(this.IdEvent);
        // console.log(this.montoCan);
        var _this = this;
        // console.log(this.descOcupation);
        // console.log(this.inscription);
        this.person.descOcupation = this.descOcupation;
        this.inscription.users = _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"]._id;
        this.registro.inscription = this.inscription;
        this.registro.eventId = this.IdEvent;
        this.registro.persona = this.person;
        console.log(this.registro);
        if (this.person.phone == null || this.person.phone > 3999999 && this.person.phone < 5000000) {
            this._peticionesService.addPerson(this.registro).subscribe(function (result) {
                var esperado = result;
                console.log(esperado);
                _this.router.navigate(['home/eventos']);
                alert('Se Registro a la persona de manera correcta');
                //this.router.navigate(['home/persons']);
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
                alert('Error al registrar, Persona existente');
            });
        }
        else {
            alert("El numero de telefono no es invalido");
        }
    };
    AddPersonComponent.prototype.captOcupation = function () {
        console.log(this.ocupSelected);
        this.descOcupation.universidad = '';
        this.descOcupation.carrera = '';
        this.descOcupation.semestre = '';
        this.descOcupation.areaTrabajo = '';
        this.descOcupation.profesion = '';
        this.descOcupation.cargo = '';
        this.descOcupation.empresa = '';
        this.person.ocupation = this.ocupSelected.toLowerCase();
    };
    AddPersonComponent.prototype.queryEvents = function () {
        var _this = this;
        this._peticionesService.getEvents().subscribe(function (result) {
            _this.eventos = result;
            //console.log(this.eventos);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddPersonComponent.prototype.cancel = function () {
        // this.router.navigate(['home/events']);
        window.history.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("close", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddPersonComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddPersonComponent.prototype, "messageEvent", void 0);
    AddPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addPerson',
            template: __webpack_require__(/*! ./addPerson.component.html */ "./src/app/event/persona/addPerson/addPerson.component.html"),
            styles: [__webpack_require__(/*! ./addPerson.component.css */ "./src/app/event/persona/addPerson/addPerson.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddPersonComponent);
    return AddPersonComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/event/persona/edit/edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  \n  .text-alert{\n    color:#dd4b39;\n  }"

/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/event/persona/edit/edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"> \n    <br>\n     <div class=\"content\">\n        <h1>Editar Persona</h1>\n       <div class=\"box box-primary\">\n         <div class=\"container \">\n             <label><h3>{{ person.first_name }} {{person.last_name}}</h3></label>\n              <div [hidden]=\"submitted\">\n                 <form (ngSubmit)=\"saveEdition()\" #addPerson=\"ngForm\" class=\"jumbotron\">\n                     <div class=\"form-group col-sm-8\" style=\"text-align: center\">\n                         <label for=\"first_name\" class=\"control-label\" >Nombres</label>\n                             <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"first_name\" \n                             [(ngModel)]=\"person.first_name\" name=\"first_name\" #firstname=\"ngModel\" required />\n                             <span *ngIf=\"!firstname.valid && firstname.touched\" class=\"text-alert\">\n                                     *Nombre de Persona requerido.\n                             </span>\n                     \n                     </div>\n                     <div class=\"form-group col-sm-8\" style=\"text-align: center\">\n                        <label for=\"last_name\" class=\"control-label\" >Apellidos</label>\n                            <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"last_name\" \n                            [(ngModel)]=\"person.last_name\" name=\"last_name\" #lastname=\"ngModel\" required />\n                            <span *ngIf=\"!lastname.valid && lastname.touched\" class=\"text-alert\">\n                                    *Apellido de Persona requerido.\n                            </span>\n                        <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                            kjkn\n                        </div>-->\n                    </div>\n                    \n                    <div class=\"form-group col-sm-8\">\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"ci\" class=\"control-label\" style=\"text-align: left\" >Cédula de Identidad</label>\n                                <input type=\"number\" pattern=\"[1-9][0-9]{6}[a-z]{0,1}\" class=\"form-control\" id=\"ci\" \n                                [(ngModel)]=\"person.ci\" name=\"ci\" #ci=\"ngModel\" required />\n                                <span *ngIf=\"!ci.valid && ci.touched\" class=\"text-alert\">\n                                        *CI de persona requerido.\n                                </span>\n                        </div>\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"cellphone\" class=\"control-label\" style=\"text-align: center\">Celular</label>\n                                <input type=\"number\" pattern=\"[6-7][0-9]{7}\" class=\"form-control\" id=\"cellphone\" \n                                [(ngModel)]=\"person.cellphone\" name=\"cellphone\" #cellphone=\"ngModel\" required />\n                                <span *ngIf=\"!cellphone.valid && cellphone.touched\" class=\"text-alert\">\n                                        *Celular de persona requerido.\n                                </span>\n                        </div>\n                        <div class=\"form-group col-sm-4\">\n                            <label for=\"phone\" class=\"control-label\" style=\"text-align: right\">Teléfono</label>\n                                <input type=\"number\" pattern=\"[4]{1}[0-9]{6}\" class=\"form-control\" id=\"phone\" \n                                [(ngModel)]=\"person.phone\" name=\"phone\" #phone=\"ngModel\" />\n                                <span *ngIf=\"!phone.valid && phone.touched\" class=\"text-alert\">\n                                        *Télefono de persona requerido.\n                                </span>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-sm-8\" >\n                        <div class=\"form-group col-sm-6\">\n                            <label for=\"email\"  class=\"control-label\" style=\"text-align: left\">Correo Electrónico</label>\n                                <input type=\"email\" pattern=\"[a-zA-Z.0-9_-]*[@][a-z]{3,15}[.][a-zA-Z]{2,15}\" class=\"form-control\" id=\"email\" \n                                [(ngModel)]=\"person.email\" name=\"email\" #email=\"ngModel\"  />\n                                <span *ngIf=\"!email.valid && email.touched\" class=\"text-alert\">\n                                        *Email de persona requerido.\n                                </span>\n                        </div>\n                        <!-- observed-->\n                    </div>\n                    <div class=\"form-group col-sm-8\">\n                        <label for=\"ocupSelect\">\n                          <i class=\"fa fa-tag prefix grey-text\"></i>Ocupación</label>\n                        <select class=\"form-control\" id=\"ocupSelect\" [(ngModel)]=\"ocupacion\" (change)=\"captOcupation()\" name=\"ocupSelect\" #ocupSelect=\"ngModel\"  >\n                            <option value=\"estudiante\">Estudiante</option>\n                            <option value=\"profesional\">Profesional</option>\n                            <option value=\"particular\">Particular</option>                     \n                        </select>\n                        <div class=\"form-group col-sm-6\">\n                          <br>\n                          <p *ngIf=\"ocupacion == 'estudiante'\">\n                            <input type=\"text\" pattern=\"[a-zA-Z]{0,20}\" placeholder=\"Universidad\" name=\"universidad\" #universidad=\"ngModel\" \n                            [(ngModel)]=\"descOcupation.universidad\" class=\"form-control\"  />\n                            <span *ngIf=\"!universidad.valid && universidad.touched\" class=\"text-alert\">\n                                <h6>*Nombre de Universidad requerido.</h6> \n                            </span>\n                          </p>\n                          <p *ngIf=\"ocupacion == 'estudiante'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z ]{0,20}\" placeholder=\"Carrera\" name=\"carrera\" #carrera=\"ngModel\"\n                               [(ngModel)]=\"descOcupation.carrera\" class=\"form-control\"   />\n                               <span *ngIf=\"!carrera.valid && carrera.touched\" class=\"text-alert\">\n                                  <h6>*Carrera de persona requerido.</h6>\n                               </span> \n                            </p> \n                            <p *ngIf=\"ocupacion == 'estudiante'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z0-9]{0,20}\" placeholder=\"Semestre\" name=\"semestre\" #semestre=\"ngModel\" \n                              [(ngModel)]=\"descOcupation.semestre\" class=\"form-control\"  /> \n                              <span *ngIf=\"!semestre.valid && semestre.touched\" class=\"text-alert\">\n                                  <h6>*Semestre de persona requerido.</h6>\n                              </span>\n                            </p>\n                            <p *ngIf=\"ocupacion == 'particular'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Area de Trabajo\" name=\"areaTrabajo\" #areaTrabajo=\"ngModel\" \n                              [(ngModel)]=\"descOcupation.areaTrabajo\" class=\"form-control\"  /> \n                              <span *ngIf=\"!areaTrabajo.valid && areaTrabajo.touched\" class=\"text-alert\">\n                                  <h6>*Área de trabajo de persona requerido.</h6>\n                              </span>\n                            </p> \n                            <p *ngIf=\"ocupacion == 'profesional'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Profesion\" name=\"profesion\" #profesion=\"ngModel\"\n                               [(ngModel)]=\"descOcupation.profesion\" class=\"form-control\"  /> \n                               <span *ngIf=\"!profesion.valid && profesion.touched\" class=\"text-alert\">\n                                  <h6>*Profesión de persona requerido.</h6>\n                             </span>\n                            </p> \n                            <p *ngIf=\"ocupacion == 'profesional'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Empresa\" name=\"empresa\" #empresa=\"ngModel\"\n                               [(ngModel)]=\"descOcupation.empresa\" class=\"form-control\"   /> \n                               <span *ngIf=\"!empresa.valid && empresa.touched\" class=\"text-alert\">\n                                  <h6>*Nombre de Empresa requerido.</h6>\n                              </span>\n                            </p> \n                            <p *ngIf=\"ocupacion == 'profesional'\">\n                              <input type=\"text\" pattern=\"[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" placeholder=\"Cargo\" name=\"cargo\" #cargo=\"ngModel\" \n                              [(ngModel)]=\"descOcupation.cargo\" class=\"form-control\"  />\n                              <span *ngIf=\"!cargo.valid && cargo.touched\" class=\"text-alert\">\n                                  <h6>*Cargo de persona requerido.</h6>\n                              </span> \n                            </p>\n                          </div>\n                    </div>\n                    <!-- <div class=\"form-group col-sm-8\">\n                            <label for=\"evento\">Evento</label>\n                            <select class=\"form-control\" id=\"evento\" [(ngModel)]=\"IdEvent\"\n                                    name=\"evento\" #evento=\"ngModel\" required >\n                              <option *ngFor=\"let evento of eventos\" [value]=\"evento._id\">{{evento.name}}</option>\n                            </select>\n                    </div> -->\n                     <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addPerson.form.valid\">Guardar</button>\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                        <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"addPerson.reset()\">Cancelar</button> -->\n                    </div>\n                 </form>\n             </div>\n         </div>\n       </div> \n     </div>\n\n </div>\n"

/***/ }),

/***/ "./src/app/event/persona/edit/edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/event/persona/edit/edit.component.ts ***!
  \******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submitted = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.queryPersonId();
        this.findPerson();
    };
    EditComponent.prototype.queryPersonId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.personId = params.id;
        });
    };
    EditComponent.prototype.findPerson = function () {
        // this._peticionesService.getPerson(this.personId).subscribe(
        //   result => {
        //     this.person = result;
        //     console.log(this.person);
        //     this.personfirstname = this.person.first_name;
        //     this.last_name= this.person.last_name;
        //     this.ci = this.person.ci;
        //     this.cellphone = this.person.cellphone;
        //     this.phone = this.person.phone;
        //     this.email = this.person.email;
        //     this.ocupacion = this.person.ocupation;
        //     this.descOcupation = this.person.descOcupation;
        //     console.log(this.descOcupation+ "hola");
        //   }, error => {
        //     var errorMessage = <any>error;
        //         console.log(errorMessage);
        //   }
        // )
    };
    EditComponent.prototype.captOcupation = function () {
        console.log(this.ocupSelected);
        this.descOcupation.universidad = '';
        this.descOcupation.carrera = '';
        this.descOcupation.semestre = '';
        this.descOcupation.areaTrabajo = '';
        this.descOcupation.profesion = '';
        this.descOcupation.cargo = '';
        this.descOcupation.empresa = '';
        this.person.ocupation = this.ocupSelected.toLowerCase();
    };
    EditComponent.prototype.saveEdition = function () { };
    //  saveEdition(){
    //   // this.person.first_name=this.personfirstname;
    //   // this.person.last_name=this.last_name;
    //   // this.person.ci=this.ci;
    //   // this.person.cellphone=this.cellphone;
    //   // this.person.phone=this.phone;
    //   // this.person.email=this.email;
    //   this.person.ocupation=this.ocupacion.toLowerCase();
    //   this.person.descOcupation=this.descOcupation;
    //   console.log(this.person);
    //   this._peticionesService.updatePerson(this.person).subscribe(
    //       result =>{
    //         var res = result;
    //         console.log(res);
    //         this.router.navigate(['home/persons']);
    //         alert('La edición se guardó correctamente');
    //       },
    //       error=>{
    //         var errorMessage = <any>error;
    //           console.log(errorMessage + "Error al editar");
    //           alert("Ocurrió un error al editar");
    //       }
    //   );
    //  }
    EditComponent.prototype.cancel = function () {
        this.router.navigate(['/home/persons']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("close", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EditComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "messageEvent", void 0);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/event/persona/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/event/persona/edit/edit.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/event/persona/filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/event/persona/filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.first_name.toLowerCase().includes(searchText) || it.last_name.toLowerCase().includes(searchText) || (it.cellphone + '').toLocaleLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/event/persona/persona.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event/persona/persona.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 5px;\n    cursor: pointer;\n    font-size: 10px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n/* Hide the browser's default radio button */\n\n.container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n/* Create a custom radio button */\n\n.checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 15px;\n    width: 15px;\n    background-color: #eee;\n    border-radius: 30%;\n}\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n\n/* When the radio button is checked, add a blue background */\n\n.container input:checked ~ .checkmark {\n    background-color: #2196F3;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n\n.container input:checked ~ .checkmark:after {\n    display: block;\n}\n\n/* Style the indicator (dot/circle) */\n\n.container .checkmark:after {\n \ttop: 6px;\n\tleft: 6px;\n\twidth: 5px;\n\theight: 5px;\n\tborder-radius: 20%;\n\tbackground: white;\n}"

/***/ }),

/***/ "./src/app/event/persona/persona.component.html":
/*!******************************************************!*\
  !*** ./src/app/event/persona/persona.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content-header\">\n        <h1>\n           Lista de Personas\n           <!-- <small>Vigentes</small> -->\n        </h1>\n    </section>\n  <section class=\"content\">\n      <div>     \n          <ol class=\"breadcrumb\">\n              <li><a class=\"btn btn-primary\" [routerLink]=\"['/home/persons/add']\"><i class=\"fa fa-book\"></i> Registrar Persona</a></li>\n              <!-- <app-addPerson (messageEvent)=\"receiveMessage()\"></app-addPerson> -->\n              <!-- <li><app-control-asistance></app-control-asistance></li> -->\n          </ol>\n      </div> \n     \n     <!-- <app-persona></app-persona> -->\n     <table class=\"table\">\n           <th>Filtros de Personas</th> \n     </table>\n     <!-- <section>\n        <div class=\"col-lg-1\">Buscar:</div>\n        <div class=\"col-lg-5\">\n              <input type=\"text\" [(ngModel)]=\"busqueda\"></div>\n     </section> -->\n       <div>\n      <div class=\"filter-wrap col-lg-1\">\n        <div>Buscar:</div>\n        <input [(ngModel)]=\"searchText\" placeholder=\"Nombre Persona\" class=\"filter-input\">\n        <span class=\"filter-clear\" *ngIf=\"searchText.length>0\" (click)=\"clearFilter()\">X</span>\n        <!-- <a class=\"btn btn-primary filter-clear\" *ngIf=\"searchText.length>0\" (clic)=\"clearFilter()\">Cancelar</a> -->\n      </div>\n      <br>\n    </div>\n     <table class=\"table table-hover\" >\n        <thead >\n           <tr>\n              <th>Nombre</th>\n              <th>Apellido</th>\n              <th>Teléfono</th>\n              <th>Ocupación</th>\n              <th>Perfil</th>\n              <!-- <th>Asistencia</th> -->\n              <th colspan=\"2\">Opciones</th>         \n           </tr>\n        </thead>\n        <tbody> \n           <!--<tr *ngFor=\"let i of inscriptions | buscarPersona: busqueda\">-->\n           <tr *ngFor=\"let i of listado_personas  | filter : searchText\">\n              <td>{{ i.first_name }}</td>\n              <th>{{i.last_name}}</th>\n              <td>{{ i.cellphone }}</td>\n              <td>{{ i.ocupation }}</td>\n              <!-- <td>\n                  <p *ngIf=\"color == 'verde'\">\n                    <a class=\" btn btn-success\" (click)=\"butonv(i._id)\">ok</a>\n                  </p>\n                  <p *ngIf=\"color == 'rojo'\">\n                    <a class=\" btn btn-danger\" (click)=\"butonv(i._id)\">not</a>\n                  </p>\n              </td>  -->\n              <!-- <td>\n                  <p *ngIf=\"color == 'verde'\">\n                    <a class=\" btn btn-success\" (click)=\"butonv(i._id)\">ok</a>\n                  </p>\n                  <p *ngIf=\"color == 'rojo'\">\n                    <a class=\" btn btn-danger\" (click)=\"butonv(i._id)\">not</a>\n                  </p>\n              </td>  -->\n              <td>\n                <a class=\"btn btn-info\" (click)=\"viewProfile(i._id)\">VER</a>\n              </td>\n              <td>\n                 <a class=\"btn btn-warning\" (click)=\"edit(i._id)\">EDITAR</a>\n                 <!-- <a class=\"btn btn-warning\" (click)=\"asistence(i._id)\">asist</a> -->\n                 <!-- <app-control-asistance></app-control-asistance> -->\n              </td>\n           </tr>\n        </tbody>\n     </table>\n     \n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/event/persona/persona.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event/persona/persona.component.ts ***!
  \****************************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_persona_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/persona.service */ "./src/app/services/persona.service.ts");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonaComponent = /** @class */ (function () {
    function PersonaComponent(router, route, _personaService, _peticionesService) {
        this.router = router;
        this.route = route;
        this._personaService = _personaService;
        this._peticionesService = _peticionesService;
        this.searchText = "";
        this.color = 'rojo';
    }
    PersonaComponent.prototype.ngOnInit = function () {
        this.query();
    };
    PersonaComponent.prototype.query = function () {
        var _this = this;
        this._peticionesService.getPersons().subscribe(function (result) {
            _this.listado_personas = result;
            console.log(_this.listado_personas);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    PersonaComponent.prototype.edit = function (_id) {
        this.router.navigate(['home/persons/edit', _id]);
    };
    PersonaComponent.prototype.viewProfile = function (_id) {
        this.router.navigate(['home/profilePerson', _id]);
    };
    PersonaComponent.prototype.asistence = function (_id) {
        this.router.navigate(['home/persons/asistencia', _id]);
    };
    // viewFinalWork(_id){
    //   this.router.navigate(['home/finalWork', _id]);
    // }
    // butonv(){
    //  if(this.color == 'rojo') this.color='verde'
    //  else{this.color = 'rojo'}
    // }
    PersonaComponent.prototype.butonv = function (_id) {
        if (this.color == 'rojo') {
            this.router.navigate(['home/persons/asistencia', _id]);
            this.color = 'verde';
        }
        else {
            this.color = 'rojo';
        }
    };
    PersonaComponent.prototype.clearFilter = function () {
        this.searchText = "";
    };
    PersonaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-persona',
            template: __webpack_require__(/*! ./persona.component.html */ "./src/app/event/persona/persona.component.html"),
            styles: [__webpack_require__(/*! ./persona.component.css */ "./src/app/event/persona/persona.component.css")],
            providers: [_services_persona_service__WEBPACK_IMPORTED_MODULE_1__["PersonaService"], _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_persona_service__WEBPACK_IMPORTED_MODULE_1__["PersonaService"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], PersonaComponent);
    return PersonaComponent;
}());



/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.css":
/*!********************************************************!*\
  !*** ./src/app/events/addEvent/addEvent.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.html":
/*!*********************************************************!*\
  !*** ./src/app/events/addEvent/addEvent.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n   <br>\n   <!-- <app-alerts></app-alerts> -->\n   <div class=\"content\">\n      <div class=\"box box-primary\">\n         <div class=\"container \">\n            <div>\n               <h1>Registrar Evento</h1>\n               <br>\n               <form (ngSubmit)=\"save()\" #addEvent=\"ngForm\" class=\"\">\n                  <div class=\"form-group col-sm-8\">\n                     <label for=\"name\" class=\"control-label\">Nombre del Evento</label>\n                     <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n                     <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\" required />\n                     <span *ngIf=\"!name.valid && name.touched && model.name == ''\" class=\"text-alert\">\n                        *Nombre del Evento requerido o nombre invalido.\n                        </span>\n                        <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && model.name != '' && model.name.length>43\" class=\"text-alert\">\n                        *Nombre del Evento inválido, excedió el límite de 42 caracteres.\n                        </span>\n                        <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && model.name != '' && model.name.length<3\" class=\"text-alert\">\n                        *Nombre del Evento, tiene menos de 3 caracteres.\n                        </span>\n                     <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                             kjkn\n                         </div>-->\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                     <label for=\"descripcion\" class=\" control-label\">Descripción</label>\n                     <input type=\"text\" pattern=\"[a-zA-Z .-_:;¿?¡!',0-9Ñ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú]{3,280}\" class=\"form-control\" id=\"descripcion\" [(ngModel)]=\"model.description\" name=\"descripcion\"\n                        #descripcion=\"ngModel\" required>\n                     <span *ngIf=\"!descripcion.valid && descripcion.touched && model.description == ''\" class=\"text-alert\">\n                        *Descripción de Evento requerido.\n                     </span>\n                     <span *ngIf=\"descripcion.dirty && descripcion.touched && !descripcion.valid && model.description != '' && model.description.length>150 \" class=\"text-alert\">\n                        *Detalle del Evento inválido, excedió el límite de 150 caracteres.\n                        <br></span>\n                         <span *ngIf=\"!descripcion?.pattern && descripcion.dirty && descripcion.touched && !descripcion.valid && model.description != ''&& model.description.length<3 \" class=\"text-alert\">\n                        *Detalle del Evento inválido, tiene menos de 3 caracteres.\n                        <br></span>\n                     <!-- <span *ngIf=\"!descripcion?.pattern && descripcion.dirty && descripcion.touched && !descripcion.valid && descripcion.name != ''\" class=\"text-alert\">\n                        *Sobrepaso el límite de caracteres.\n                     </span>  -->\n                     <!--<div [hidden]=\"descripcion?.valid || descripcion?.pristine\" class=\"\">\n                                 descripcion requerida\n                             </div>-->\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                        <div class=\"form-group col-sm-6\">\n                                <label data-error=\"wrong\" style=\"text-align:left\" data-success=\"right\" for=\"form8\">\n                                        <i class=\"fa fa-calendar prefix grey-text\"></i> Inicio</label>\n                                <input type=\"date\" pattern=\"[2]{1}[0]{1}[1-9]{1}[0-9]{1}-[0-9]{2}-[0-9]{2}\" id=\"form34\" class=\"form-control validate\" [(ngModel)]=\"model.date_start\" name=\"fecha\" required #date>\n                                <!-- \"(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d\" -->\n                        </div>\n                        <div class=\"form-group col-sm-4\">\n                                <label for=\"total\" style=\"text-align:right\">Total cupos</label>\n                                <input type=\"number\" pattern=\"[0-9]{0,3}\" class=\"form-control\" id=\"total\" [(ngModel)]=\"model.total\" name=\"total\" #total=\"ngModel\"\n                                        required>\n                                <span *ngIf=\"!total.valid && total.touched\" class=\"text-alert\">\n                                        *Total cupo de evento inválido.\n                                </span>\n                        </div>\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                     <label for=\"nomPrograma\">Programa</label>\n                     <select class=\"form-control\" id=\"nomPrograma\" required [(ngModel)]=\"model.programs\" name=\"nomPrograma\" #nomPrograma=\"ngModel\">\n                        <option value=\"\" hidden>Seleccionar un Programa</option>\n                        <option *ngFor=\"let programa of programs\" [value]=\"programa._id\">{{programa.name}}</option>\n                     </select>\n                     <!-- <div [hidden]=\"offices.valid || offices.pristine\" class=\"\">\n                                sucursal is required\n                        </div> -->\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                        <label for=\"nomSucursal\">Sucursal</label>\n                        <select class=\"form-control\" id=\"nomSucursal\" required [(ngModel)]=\"model.offices\" name=\"nomSucursal\" #nomSucursal=\"ngModel\">\n                                <option value=\"\" hidden>Seleccionar una Sucursal</option>\n                                <option *ngFor=\"let s of sucursales\" [value]=\"s._id\">{{s.name}}</option>\n                        </select>\n                  </div>\n                  <br>\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                     <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEvent.form.valid\">Guardar</button>\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\n                  </div>\n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/events/addEvent/addEvent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/events/addEvent/addEvent.component.ts ***!
  \*******************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _modelo_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modelo/event */ "./src/app/modelo/event.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AlertsService } from 'angular-alert-module';
var AddEventComponent = /** @class */ (function () {
    function AddEventComponent(_peticionesService, route, router
    //,private alerts: AlertsService
    ) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.model = new _modelo_event__WEBPACK_IMPORTED_MODULE_2__["Event"]("", "", null, null, "", "", null, true);
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.queryPrograms();
        this.querySucursal();
    };
    AddEventComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            //console.log(this.programs);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEventComponent.prototype.querySucursal = function () {
        var _this = this;
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            console.log(_this.sucursales);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AddEventComponent.prototype.cancelar = function () {
        this.router.navigate(['home/eventos']);
    };
    AddEventComponent.prototype.onSubmit = function () {
        console.log(this.model);
    };
    AddEventComponent.prototype.save = function () {
        var _this = this;
        if ((this.model.description == '')) {
            window.alert("Asegurese de llenar todos los campos");
        }
        else {
            if ((this.model.total == 0)) {
                window.alert("No puede crear un evento con Cupo 0 ");
            }
            else {
                // if(this.dateRef.nativeElement.value <new Date()){
                if (new Date(this.model.date_start) < new Date()) {
                    window.alert("Asegurese que la fecha sea mayor a la de hoy");
                }
                else {
                    console.log(this.model);
                    this._peticionesService.addEvent(this.model).subscribe(function (response) {
                        //this.messageEvent.emit();
                        //this.close.nativeElement.click();
                        _this.router.navigate(['/home/eventos']);
                        alert("El evento se creo con exito");
                    });
                }
            }
        }
        console.log(this.model.date_start);
    };
    AddEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addEvent',
            template: __webpack_require__(/*! ./addEvent.component.html */ "./src/app/events/addEvent/addEvent.component.html"),
            styles: [__webpack_require__(/*! ./addEvent.component.css */ "./src/app/events/addEvent/addEvent.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
            //,private alerts: AlertsService
        ])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.css":
/*!************************************************************!*\
  !*** ./src/app/events/addProgram/addProgram.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.html":
/*!*************************************************************!*\
  !*** ./src/app/events/addProgram/addProgram.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalAddProgram\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header text-center\">\n            <h4 class=\"modal-title w-100 font-weight-bold\">Registrar Programa</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\n               <span aria-hidden=\"true\">&times;</span>\n            </button>\n         </div>\n\n         <div class=\"modal-body mx-3\">\n\n            <!-- <form (ngSubmit)=\"onSubmit(contactForm);\" #contactForm=\"ngForm\" > -->\n\n            <div class=\"md-form mb-5\">\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form34\">\n                <i class=\"fa fa-pencil prefix grey-text\"></i> Nombre del Programa</label>\n               <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" class=\"form-control validate\" #nameInput>\n            </div>\n            <br>\n            <div class=\"md-form\">\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\n            <i class=\"fa fa-book prefix grey-text\"></i> Módulos</label>\n               <input type=\"text\" class=\"form-control validate\" #moduleInput>\n               <textarea type=\"text\" class=\"md-textarea form-control\" rows=\"4\" #modulesArea ></textarea>\n            </div>\n            <br>\n            <div class=\"md-form\">\n               <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">\n                <i class=\"fa fa-comment prefix grey-text\"></i> Descripción</label>\n               <textarea type=\"text\" pattern=\"[a-zA-Z ]{3,150}\" class=\"md-textarea form-control\" rows=\"4\" #detailsArea></textarea>\n            </div>\n         </div>\n         <div class=\"modal-footer d-flex justify-content-center\">\n            <button class=\"btn btn-unique\" (click)=\"save()\">Guardar\n               <i class=\"fa fa-paper-plane-o ml-1\"></i>\n            </button>\n         </div>\n         <!-- </form> -->\n      </div>\n   </div>\n</div>\n<div class=\"text-center\">\n   <a href=\"\" class=\"btn btn-primary btn-rounded mb-4\" data-toggle=\"modal\" data-target=\"#modalAddProgram\">Registrar Programa</a>\n</div>"

/***/ }),

/***/ "./src/app/events/addProgram/addProgram.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/events/addProgram/addProgram.component.ts ***!
  \***********************************************************/
/*! exports provided: AddProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramComponent", function() { return AddProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_programa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/programa */ "./src/app/modelo/programa.ts");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProgramComponent = /** @class */ (function () {
    function AddProgramComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    AddProgramComponent.prototype.ngOnInit = function () {
        this.modules = '';
    };
    AddProgramComponent.prototype.save = function () {
        var _this = this;
        var name = this.nameInputRef.nativeElement.value;
        var modules = this.modulesAreaRef.nativeElement.value.split('\n');
        modules.splice(-1, 1);
        var details = this.detailsAreaRef.nativeElement.value;
        var newProgram = new _modelo_programa__WEBPACK_IMPORTED_MODULE_1__["Programa"]('', name, details, ' ', {});
        this._peticionesService.addProgram(newProgram).subscribe(function (response) {
            // console.log(response);
            _this.close.nativeElement.click();
        }, function (error) {
            var errosMessage = error;
            alert('El nombre del Programa ya existe debe crear otro programa ');
        });
    };
    AddProgramComponent.prototype.add = function () {
        var module = this.moduleInputRef.nativeElement.value;
        this.modules = this.modules + module + '\n';
        this.modulesAreaRef.nativeElement.value = this.modules;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddProgramComponent.prototype, "nameInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('moduleInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddProgramComponent.prototype, "moduleInputRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modulesArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddProgramComponent.prototype, "modulesAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('detailsArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddProgramComponent.prototype, "detailsAreaRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("close", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddProgramComponent.prototype, "close", void 0);
    AddProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addProgram',
            template: __webpack_require__(/*! ./addProgram.component.html */ "./src/app/events/addProgram/addProgram.component.html"),
            styles: [__webpack_require__(/*! ./addProgram.component.css */ "./src/app/events/addProgram/addProgram.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], AddProgramComponent);
    return AddProgramComponent;
}());



/***/ }),

/***/ "./src/app/events/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/events/alert/alert.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./src/app/events/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"border: rosybrown\" id=\"modalAlert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n     <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n            <h4 class=\"modal-title w-100 font-weight-bold\">Alerta</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body mx-3 \">\n            <div *ngIf='(programs?.length == 0)'><h5> Tiene 0 programas, necesita \n                        <strong >CREAR PROGRAMA</strong> para agregar al evento</h5>\n            </div>\n            <div *ngIf='(programs.length > 0)'><h5> Estos son los programas que tiene para añadir al nuevo Evento, si usted quiere crear o registrar un nuevo programa elija la opción \n              <strong >CREAR PROGRAMA</strong> y si no \n              <strong >CREAR EVENTO</strong></h5>\n            </div>\n              <li *ngFor=\"let programa of programs\" style=\"color: plum\"><strong> * {{programa.name}}</strong></li>\n            \n            </div>\n          <div class=\"modal-footer d-flex justify-content-center\" >\n              <button *ngIf='(programs.length == 0)' disabled type=\"button\" class=\"btn btn-success\" (click)=\"continuar()\">CREAR EVENTO</button>\n              <button *ngIf='(programs.length > 0)' type=\"button\" class=\"btn btn-success\" (click)=\"continuar()\">CREAR EVENTO</button>\n              <button type=\"submit\" class=\"btn btn-warning\"(click)=\"craerProgram()\">CREAR PROGRAMA</button>\n          </div>\n     </div>\n   </div>\n  </div>\n<div class=\"text-center\">\n  <li><a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAlert\"><i class=\"fa fa-book\"></i> Registrar Evento</a></li>\n</div>\n"

/***/ }),

/***/ "./src/app/events/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/events/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.queryPrograms();
    };
    AlertComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            console.log(_this.programs.length);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AlertComponent.prototype.craerProgram = function () {
        this.router.navigate(['/home/program/add']);
        this.close.nativeElement.click();
    };
    AlertComponent.prototype.continuar = function () {
        this.router.navigate(['/home/eventos/add']);
        this.close.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("close", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AlertComponent.prototype, "close", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/events/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/events/alert/alert.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h{\n    padding-top: 50px ;\n}\n.cabecera{\n    background-color: #367fa9; \n    color: #fff; \n    border-color: #2e6da4;\n    border-top-color: rgb(32, 77, 116);\n    border-right-color: rgb(32, 77, 116);\n    border-bottom-color: rgb(32, 77, 116);\n    border-left-color: rgb(32, 77, 116);\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n      <!-- Content Header (Page header) -->\n      <section class=\"content-header\">\n            <h1>\n                  Eventos\n                  <small>Vigentes</small>\n            </h1>\n      </section>\n      <section class=\"content\">\n            <ol class=\"breadcrumb\">\n                  <li *ngIf='(role?.name == \"Admin\")||(role?.name==\"Gerente\")'>\n                        <app-alert></app-alert>\n                  </li>\n            </ol>\n            <table class=\"table table-hover\">\n                  <thead>\n                        <tr class=\"text-info cabecera hover\">\n                              <th>\n                                    <h4 class=\"text-center font-family-serif\">Nombre</h4>\n                              </th>\n                              <th>\n                                    <h4 class=\"text-center\">Fecha de Inicio</h4>\n                              </th>\n                              <th>\n                                    <h4 class=\"text-center\">Ajustes</h4>\n                              </th>\n                              <!-- <th><h4 class=\"text-center\">Cupos</h4></th>\n               <th><h4 class=\"text-center\">Lista de Requisitos</h4></th>\n               <th><h4 class=\"text-center\">Cuentas por Cobrar</h4></th>\n               <th ><h4 class=\"text-center\">Estado</h4></th>  \n               <th ><h4 class=\"text-center\">Taller</h4></th>   -->\n\n                        </tr>\n                  </thead>\n                  <tbody>\n                        <tr *ngFor=\"let event of events\" class=\"bg-info text-center\">\n                              <td>{{ event.name }}</td>\n                              <td>{{ event.date_start | date }}</td>\n                              <td>\n                                    <a class=\"btn btn-success\" (click)=\"edit(event._id)\">Editar</a>\n                              </td>\n                              <!-- <td>\n                  <a class=\"btn btn-info\" (click)=\"viewPrint(event._id)\">VER INSCRITOS</a>\n               </td>\n               <td>\n                  <a class=\"btn btn-warning\" (click)=\"accountsRec(event._id)\">VER CUENTAS</a>\n               </td>\n               <td>\n                  <a class=\"btn btn-primary\" (click)=\"send(event._id)\">INFORMACIÓN</a>\n               </td>\n               <td>\n                  <a class=\"btn btn-primary\" (click)=\"sendTaller(event._id)\">INF. TALLER</a>\n               </td> -->\n                        </tr>\n                  </tbody>\n            </table>\n      </section>\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { UserService } from '../services/user.service';


var EventsComponent = /** @class */ (function () {
    function EventsComponent(router, _peticionesService
    //,private _userService: UserService
    ) {
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.queryRol();
        //    this.queryEvents(); 
        //    this.role=Roles.name;
    };
    EventsComponent.prototype.addPerson = function () {
        this.router.navigate(['home/event/persons/add']);
    };
    EventsComponent.prototype.viewPrint = function (_id) {
        this.router.navigate(['home/listPrint', _id]);
    };
    EventsComponent.prototype.viewRequirements = function (_id) {
        this.router.navigate(['home/listRequeriments', _id]);
    };
    EventsComponent.prototype.accountsRec = function (_id) {
        this.router.navigate(['home/accountsReceivable', _id]);
    };
    EventsComponent.prototype.send = function (_id) {
        this.router.navigate(['home/event', _id]);
    };
    EventsComponent.prototype.sendTaller = function (_id) {
        this.router.navigate(['home/workshopListP', _id]);
    };
    EventsComponent.prototype.queryEventsSucursalActive = function () {
        //    this._peticionesService.getEventsActiveOfSucursal(Identity._id).subscribe(
        //     result => {
        //         this.events = result;
        //        console.log(this.events)
        //         this.events.map(event => {
        //            var sum = 0;
        //            event.inscriptions.forEach(e => {
        //               if (e.state == 1) sum++;
        //            });
        //            event.cupos = event.total - sum;
        //         });
        //      },
        //      error => {
        //         var errorMessage = <any>error;
        //         console.log(errorMessage);
        //      }
        //   );
    };
    EventsComponent.prototype.queryEvents = function () {
        var _this = this;
        this._peticionesService.getEvents().subscribe(function (result) {
            _this.events = result;
            console.log(_this.events);
            _this.events.map(function (event) {
                var sum = 0;
                event.inscriptions.forEach(function (e) {
                    if (e.state == 1)
                        sum++;
                });
                event.cupos = event.total - sum;
            });
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent.prototype.queryRol = function () {
        var _this = this;
        console.log(_services_global__WEBPACK_IMPORTED_MODULE_2__["Identity"].rol);
        this._peticionesService.getRole(_services_global__WEBPACK_IMPORTED_MODULE_2__["Identity"].rol).subscribe(function (result) {
            _this.role = result;
            if (_this.role.name == 'Admin') {
                _this.queryEvents();
            }
            else {
                _this.queryEventsSucursalActive();
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]
            //,private _userService: UserService
        ])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/facilitador/add-facilitador/add-facilitador.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  \n  .text-alert{\n    color:#dd4b39;\n  }"

/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/facilitador/add-facilitador/add-facilitador.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n    <div class=\"\">\n  \n    <div class=\"box box-primary\">\n  \n  <div class=\"container\">\n      <div [hidden]=\"submitted\">\n        <h1>Registrar Facilitador</h1>\n        <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" class=\"jumbotron\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\">Nombre Completo</label>\n            <input type=\"text\" pattern=\"[a-zA-Z]{3,15}([ ]{0,1}[a-zA-Z]{0,15}){0,3}\" class=\"form-control\" id=\"name\"\n                   required\n                   [(ngModel)]=\"facilitadorName\" name=\"name\"\n                   #name=\"ngModel\"\n                   >\n            <div [hidden]=\"name?.valid || name?.pristine\"\n                 class=\"\">\n                 *Nombre es inválido\n            </div>\n          </div>\n          \n          <div class=\"form-group col-sm-8\">\n              <label for=\"correo\">Trabajo</label>\n              <input type=\"correo\" pattern=\"[a-zA-Z ]{3,50}\" class=\"form-control\" id=\"correo\"\n                     required\n                     [(ngModel)]=\"facilitadorjob\" name=\"correo\"\n                     #correo=\"ngModel\">\n              <div [hidden]=\"correo?.valid || correo?.pristine\" class=\"\">\n              *Trabajo es inválido\n              </div>\n            </div>\n            <div class=\"form-group col-sm-8\" style=\"text-align:center\">\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\">Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n            </div>\n        </form>\n      </div>\n     \n              \n    </div>\n  \n    </div>\n  \n  </div>\n  </div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/facilitador/add-facilitador/add-facilitador.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/facilitador/add-facilitador/add-facilitador.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddFacilitadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFacilitadorComponent", function() { return AddFacilitadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modelo_facilitador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/facilitador */ "./src/app/modelo/facilitador.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFacilitadorComponent = /** @class */ (function () {
    function AddFacilitadorComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = [, '', '', , "", '', ''];
    }
    AddFacilitadorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.facilitador = new _modelo_facilitador__WEBPACK_IMPORTED_MODULE_3__["facilitador"](this.facilitadorName, this.facilitadorjob);
        this._peticionesService.addFacilitador(this.facilitador).subscribe(function (response) {
            _this.facilitadorNuevo = response;
            console.log(_this.facilitadorNuevo);
            _this.router.navigate(['/home/facilitador']);
            alert('se creo facilitador');
            // this.MessageEvent.emit();
        }, function (error) {
            console.log(error);
            alert('error al crear facilitador, verifique los datos');
        });
    };
    AddFacilitadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getSucursales().subscribe(function (response) {
            _this.sucursales = response;
            console.log(_this.sucursales);
        });
    };
    AddFacilitadorComponent.prototype.cancel = function () {
        this.router.navigate(['/home/facilitador']);
    };
    AddFacilitadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-facilitador',
            template: __webpack_require__(/*! ./add-facilitador.component.html */ "./src/app/facilitador/add-facilitador/add-facilitador.component.html"),
            styles: [__webpack_require__(/*! ./add-facilitador.component.css */ "./src/app/facilitador/add-facilitador/add-facilitador.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddFacilitadorComponent);
    return AddFacilitadorComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/facilitador/edit-facilitador/edit-facilitador.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/facilitador/edit-facilitador/edit-facilitador.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <section class=\"content\">\n       <!-- test -->\n       <div style=\"text-align:center; margin:auto; width:40%;\">\n          Editar Facilitador\n             <div><label><h1>{{ facilitador?.name }}</h1></label></div>\n          \n         <div class=\"jumbotron\">\n         <div> \n             <input type=\"text\" name=\"t\" [(ngModel)]=\"facilitadorName\" class=\"form-control\" required />\n             <label>Descripción</label>\n          \n         </div>\n          <div>\n             <input type=\"submit\" value=\"GUARDAR\" class=\"btn btn-success\" (click)=\"saveInscription()\"/>\n             <input type=\"submit\" value=\"CANCELAR\" class=\"btn btn-success\" (click)=\"cancelar()\"/>\n          </div>\n         </div>\n     </div>\n   </section>\n     \n </div>"

/***/ }),

/***/ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/facilitador/edit-facilitador/edit-facilitador.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditFacilitadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFacilitadorComponent", function() { return EditFacilitadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFacilitadorComponent = /** @class */ (function () {
    function EditFacilitadorComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    EditFacilitadorComponent.prototype.ngOnInit = function () {
        this.queryFacilitador();
    };
    EditFacilitadorComponent.prototype.onSubmit = function () {
    };
    EditFacilitadorComponent.prototype.simbolos = function (nameV) {
        console.log("ingreso simbolos");
        var res = false;
        for (var i = 0; i < nameV.length; i++) {
            if (nameV[i] == '!' || nameV[i] == '@' || nameV[i] == '#' || nameV[i] == '$' || nameV[i] == '%' || nameV[i] == '^') {
                res = true;
            }
        }
        return res;
    };
    EditFacilitadorComponent.prototype.editfacilitador = function () {
        var _this = this;
        // console.log(this.facilitador);
        this.facilitador.name = this.facilitadorName;
        if (this.facilitadorName == '') {
            window.alert("Asegurese que todos los campos esten llenos");
        }
        else {
            if (this.simbolos(this.facilitadorName)) {
                console.log("hay simbolos");
                window.alert("asegurese de no introducir simbolos");
            }
            else {
                this._peticionesService.updateFacilitador(this.facilitador).subscribe(function (result) {
                    var res = result;
                    console.log(res);
                    _this.router.navigate(['home/facilitador']);
                }, function (error) {
                    var errorMessage = error;
                    console.log(errorMessage);
                });
            }
        }
    };
    EditFacilitadorComponent.prototype.queryFacilitador = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.facilitadorId = params.id;
            console.log(_this.facilitadorId);
        });
        this._peticionesService.getFacilitador(this.facilitadorId).subscribe(function (result) {
            _this.facilitador = result;
            console.log(_this.facilitador);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    EditFacilitadorComponent.prototype.saveInscription = function () { };
    EditFacilitadorComponent.prototype.cancelar = function () { };
    EditFacilitadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-facilitador',
            template: __webpack_require__(/*! ./edit-facilitador.component.html */ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.html"),
            styles: [__webpack_require__(/*! ./edit-facilitador.component.css */ "./src/app/facilitador/edit-facilitador/edit-facilitador.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditFacilitadorComponent);
    return EditFacilitadorComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/facilitador.component.css":
/*!*******************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.html":
/*!********************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\"> <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n       <h1>\n          Facilitadores\n          <small>Vigentes</small>\n       </h1>\n       \n    </section>\n    <section class=\"content\">\n        <a class=\"btn btn-primary a\" (click)=\"addfacilitador()\"><i class=\"fa fa-book\"></i> Registrar Facilitador</a>\n       <table class=\"table table-hover\">\n          <thead>\n             <tr>\n                <th>Nombre de Facilitador</th>\n                <th>Trabajo</th>\n                <!-- <th>Editar Facilitador</th> -->\n                <!-- <th colspan=\"2\">estado</th> -->\n             </tr>\n          </thead>\n  \n          <tbody>\n  \n             <tr *ngFor=\"let facilitador of facilitadores\">\n                <td>{{ facilitador.name }}</td>\n                <!-- <td>{{ eventcd fedate_start | date }}</td> -->\n                <td>{{ facilitador.job }}</td>\n                <!-- <td>{{ event.date_start | date }}</td> -->\n                <!-- <td>\n                   <!-- <button class=\"btn btn-warning\" (click)=\"editfacilitador(facilitador._id)\">EDITAR</button> -->\n                  <!-- <a class=\"btn btn-primary\" (click)=\"editFacilitador(facilitador._id)\">Editar</a>\n                </td> -->\n             </tr>\n          </tbody>\n       </table>\n    </section>\n  </div>"

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.ts":
/*!******************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.ts ***!
  \******************************************************/
/*! exports provided: facilitadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facilitadorComponent", function() { return facilitadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { facilitador } from '../modelo/facilitador';
var facilitadorComponent = /** @class */ (function () {
    function facilitadorComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    facilitadorComponent.prototype.ngOnInit = function () {
        this.queryFacilitators();
    };
    facilitadorComponent.prototype.editFacilitador = function (id) {
        //console.log("facilitadorComponent");
        this.router.navigate(['/home/facilitador/edit/', id]);
    };
    facilitadorComponent.prototype.addfacilitador = function () {
        this.router.navigate(['/home/facilitador/add']);
    };
    facilitadorComponent.prototype.infofacilitador = function (_id) {
        // console.log(_id);
        this.router.navigate(['/home/facilitador/info', _id]);
    };
    // deletefacilitador(_id:string){
    //   this._peticionesService.deleteUser().subscribe(
    //     result => {
    //        console.log(result); 
    //     },
    //   error => {
    //     console.log(<any>error)
    //   });
    // }
    facilitadorComponent.prototype.queryFacilitators = function () {
        var _this = this;
        this._peticionesService.getFacilitadores().subscribe(function (result) {
            _this.facilitadores = result;
            console.log(_this.facilitadores);
        }, function (error) {
            console.log(error);
        });
    };
    facilitadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facilitador',
            template: __webpack_require__(/*! ./facilitador.component.html */ "./src/app/facilitador/facilitador.component.html"),
            styles: [__webpack_require__(/*! ./facilitador.component.css */ "./src/app/facilitador/facilitador.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], facilitadorComponent);
    return facilitadorComponent;
}());



/***/ }),

/***/ "./src/app/hero-form/hero-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  .ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }"

/***/ }),

/***/ "./src/app/hero-form/hero-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n  <div class=\"\">\n\n\n \n  <div class=\"box box-primary\">\n\n<div class=\"container\">\n    <div [hidden]=\"submitted\">\n      <h1>Hero Form</h1>\n      <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"firstname\">firs Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"firstname\"\n                 required\n                 [(ngModel)]=\"model.firstname\" name=\"firstname\"\n                 #firstname=\"ngModel\">\n          <div [hidden]=\"firstname?.valid || firstname?.pristine\"\n               class=\"alert alert-danger\">\n            first Name is required\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastname\">last Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"lastname\"\n                 required\n                 [(ngModel)]=\"model.lastname\" name=\"lastname\"\n                 #lastname=\"ngModel\">\n          <div [hidden]=\"lastname?.valid || lastname?.pristine\"\n               class=\"alert alert-danger\">\n            last Name is required\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"cell\">cell</label>\n          <input type=\"number\" class=\"form-control\" id=\"cell\"\n                 required\n                 [(ngModel)]=\"model.cell\" name=\"cell\"\n                 #cell=\"ngModel\">\n          <div [hidden]=\"cell?.valid || cell?.pristine\"\n               class=\"alert alert-danger\">\n            cell is required\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"email\">email</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\"\n                   required\n                   [(ngModel)]=\"model.email\" name=\"email\"\n                   #email=\"ngModel\">\n            <div [hidden]=\"email?.valid || email?.pristine\"\n                 class=\"alert alert-danger\">\n                 email is required\n            </div>\n          </div>\n   \n        <div class=\"form-group\">\n          <label for=\"alterEgo\">Alter Ego</label>\n          <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\n                 [(ngModel)]=\"model.alterEgo\" name=\"alterEgo\">\n        </div>\n   \n        <div class=\"form-group\">\n          <label for=\"power\">Hero Power</label>\n          <select class=\"form-control\" id=\"power\"\n                  required\n                  [(ngModel)]=\"model.power\" name=\"power\"\n                  #power=\"ngModel\">\n            <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\n          </select>\n          <div [hidden]=\"power.valid || power.pristine\" class=\"alert alert-danger\">\n            Power is required\n          </div>\n        </div>\n   \n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"heroForm.reset()\">New Hero</button>\n      </form>\n    </div>\n   \n    <div [hidden]=\"!submitted\">\n      <h2>You submitted the following:</h2>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">Name</div>\n        <div class=\"col-xs-9  pull-left\">{{ model.firstname }}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-xs-3\">Name</div>\n          <div class=\"col-xs-9  pull-left\">{{ model.lastname }}</div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">Alter Ego</div>\n        <div class=\"col-xs-9 pull-left\">{{ model.alterEgo }}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3\">Power</div>\n        <div class=\"col-xs-9 pull-left\">{{ model.power }}</div>\n      </div>\n      <br>\n      <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\n    </div>\n  </div>\n\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/hero-form/hero-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-form/hero-form.component.ts ***!
  \**************************************************/
/*! exports provided: HeroFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroFormComponent", function() { return HeroFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/app/hero-form/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroFormComponent = /** @class */ (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](18, 'Dr IQ', 'apellido', 4554, "74017.linares", this.powers[0], 'Chuck Overstreet');
        // model=new Hero();
        this.submitted = false;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.ngOnInit = function () {
    };
    HeroFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-form',
            template: __webpack_require__(/*! ./hero-form.component.html */ "./src/app/hero-form/hero-form.component.html"),
            styles: [__webpack_require__(/*! ./hero-form.component.css */ "./src/app/hero-form/hero-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());



/***/ }),

/***/ "./src/app/hero-form/hero.ts":
/*!***********************************!*\
  !*** ./src/app/hero-form/hero.ts ***!
  \***********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero(id, firstname, lastname, cell, email, power, alterEgo) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.cell = cell;
        this.email = email;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-appheader></app-appheader>\n\n<app-appmenu></app-appmenu>\n\n\n<router-outlet></router-outlet>\n\n<app-appfooter></app-appfooter>\n<app-appsettings></app-appsettings>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (_services_global__WEBPACK_IMPORTED_MODULE_1__["Identity"]._id == '') {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/home/eventos']);
            this.identify = _services_global__WEBPACK_IMPORTED_MODULE_1__["Identity"]._id;
            // console.log(this.identify+'   este es el id');  //recuperando el id del usuario
            // this._peticionesService.getEvents().subscribe(
            //    result => {
            //       this.events = result;
            //       console.log(this.events);
            //    },
            //    error => {
            //       var errorMessage = <any>error;
            //       console.log(errorMessage);
            //    }
            // );
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/plantilla/appfooter/appfooter.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media print {\n    body * {\n        visibility: collapse;\n        \n    } \n    #printable{\n      visibility: visible;\n       \n\n    }\n    #printable * {\n        visibility:visible;\n    }\n      /* aligning the printable area */\n    .noprint { \n        display: none;\n    }\n}\n#footer {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/plantilla/appfooter/appfooter.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer noprint\" >\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 1.0.0\n    </div>\n    <div >\n    <strong>CECAP COMPANY &copy; - <a href=\"http://www.cecapconsulting.com\">Studio</a>.</strong> Todos los derechos reservados\n  </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/home/plantilla/appfooter/appfooter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/plantilla/appfooter/appfooter.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function() { return AppfooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppfooterComponent = /** @class */ (function () {
    function AppfooterComponent() {
    }
    AppfooterComponent.prototype.ngOnInit = function () {
    };
    AppfooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appfooter',
            template: __webpack_require__(/*! ./appfooter.component.html */ "./src/app/home/plantilla/appfooter/appfooter.component.html"),
            styles: [__webpack_require__(/*! ./appfooter.component.css */ "./src/app/home/plantilla/appfooter/appfooter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppfooterComponent);
    return AppfooterComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/plantilla/appheader/appheader.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabecera{\n    background-color: lightgreen;\n}"

/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/plantilla/appheader/appheader.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  appheader works!\n</p> -->\n\n\n<header class=\"main-header\">\n  \n      <!-- <a [routerLink]=\"['/']\" class=\"logo\">\n        <span class=\"logo-mini\"><b>C</b>CO</span>\n      </a> -->\n      \n      <!-- Header Navbar: style can be found in header.less -->\n      <nav class=\"navbar navbar-static-top\">\n         <!-- Sidebar toggle button-->\n         \n         <!-- <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n            <span class=\"sr-only\">Toggle navigation</span>\n         </a> -->\n         <!-- <span class=\"logo-lg\"><b>Cecap</b>COMPANY</span> -->\n         <!-- Navbar Right Menu -->\n        <div class=\"navbar-custom-menu\">\n          <ul class=\"nav navbar-nav\">\n            <!-- Messages: style can be found in dropdown.less-->\n            <!--<li class=\"dropdown messages-menu\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-envelope-o\"></i>\n                <span class=\"label label-success\">4</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 4 messages</li>\n                <li>\n                  <ul class=\"menu\">\n                    <li>\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <img src=\"assets/dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <h4>\n                          Support Team\n                          <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                        </h4>\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <h4>\n                          AdminLTE Design Team\n                          <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                        </h4>\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <h4>\n                          Developers\n                          <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                        </h4>\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <img src=\"assets/dist/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <h4>\n                          Sales Department\n                          <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                        </h4>\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <div class=\"pull-left\">\n                          <img src=\"assets/dist/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                        </div>\n                        <h4>\n                          Reviewers\n                          <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                        </h4>\n                        <p>Why not buy a new awesome theme?</p>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n              </ul>\n            </li>-->\n            <!-- Notifications: style can be found in dropdown.less -->\n            <!--<li class=\"dropdown notifications-menu\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-bell-o\"></i>\n                <span class=\"label label-warning\">10</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 10 notifications</li>\n                <li>\n                  <ul class=\"menu\">\n                    <li>\n                      <a href=\"#\">\n                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                        page and may cause design problems\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <i class=\"fa fa-user text-red\"></i> You changed your username\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li class=\"footer\"><a href=\"#\">View all</a></li>\n              </ul>\n            </li> -->\n            <!--<li class=\"dropdown tasks-menu\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"fa fa-flag-o\"></i>\n                <span class=\"label label-danger\">9</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"header\">You have 9 tasks</li>\n                <li>\n                  <ul class=\"menu\">\n                    <li>\n                      <a href=\"#\">\n                        <h3>\n                          Design some buttons\n                          <small class=\"pull-right\">20%</small>\n                        </h3>\n                        <div class=\"progress xs\">\n                          <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            <span class=\"sr-only\">20% Complete</span>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <h3>\n                          Create a nice theme\n                          <small class=\"pull-right\">40%</small>\n                        </h3>\n                        <div class=\"progress xs\">\n                          <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            <span class=\"sr-only\">40% Complete</span>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <h3>\n                          Some task I need to do\n                          <small class=\"pull-right\">60%</small>\n                        </h3>\n                        <div class=\"progress xs\">\n                          <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            <span class=\"sr-only\">60% Complete</span>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                    <li>\n                      <a href=\"#\">\n                        <h3>\n                          Make beautiful transitions\n                          <small class=\"pull-right\">80%</small>\n                        </h3>\n                        <div class=\"progress xs\">\n                          <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                               aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                            <span class=\"sr-only\">80% Complete</span>\n                          </div>\n                        </div>\n                      </a>\n                    </li>\n                  </ul>\n                </li>\n                <li class=\"footer\">\n                  <a href=\"#\">View all tasks</a>\n                </li>\n              </ul>\n            </li>-->\n            <!-- User Account: style can be found in dropdown.less -->\n            <li class=\"dropdown user user-menu\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <img src=\"assets/dist/img/line.png\" class=\"user-image\" alt=\"User Image\">\n                <span class=\"hidden-xs\">{{nameUser}}</span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <!-- User image -->\n                <li class=\"user-header\">\n                  <img src=\"assets/dist/img/line.png\" class=\"img-circle\" alt=\"User Image\">\n  \n                  <p>\n                      {{nameUser}}\n                    <!-- <small>Member since April 2018</small> -->\n                  </p>\n                </li>\n                <!-- Menu Body -->\n                <!-- <li class=\"user-body\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Followers</a>\n                    </div>\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Sales</a>\n                    </div>\n                    <div class=\"col-xs-4 text-center\">\n                      <a href=\"#\">Friends</a>\n                    </div>\n                  </div>\n                </li> -->\n                <!-- Menu Footer-->\n                <li class=\"user-footer\">\n                  <div class=\"pull-right\">\n                    <a class=\"btn btn-default btn-flat\" (click)=\"logOut()\">Sign out</a>\n                  </div>\n                </li>\n              </ul>\n            </li>\n            <!-- Control Sidebar Toggle Button -->\n            <li>\n              <!-- <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a> -->\n            </li>\n          </ul>\n        </div>\n  \n      </nav>\n    </header>"

/***/ }),

/***/ "./src/app/home/plantilla/appheader/appheader.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/plantilla/appheader/appheader.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppheaderComponent", function() { return AppheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/local-storage.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AsyncLocalStorage } from 'angular-async-local-storage';

var AppheaderComponent = /** @class */ (function () {
    function AppheaderComponent(localStorage, _router) {
        this.localStorage = localStorage;
        this._router = _router;
    }
    AppheaderComponent.prototype.ngOnInit = function () {
        this.nameUser = _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].name;
    };
    AppheaderComponent.prototype.logOut = function () {
        this.localStorage.removeItem('Identity').subscribe(function () { });
        _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"]._id = '';
        _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].rol = '';
        _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].name = '';
        this._router.navigate(['/login']);
    };
    AppheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appheader',
            template: __webpack_require__(/*! ./appheader.component.html */ "./src/app/home/plantilla/appheader/appheader.component.html"),
            styles: [__webpack_require__(/*! ./appheader.component.css */ "./src/app/home/plantilla/appheader/appheader.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppheaderComponent);
    return AppheaderComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/plantilla/appmenu/appmenu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/plantilla/appmenu/appmenu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <p>\n  appmenu works!\n</p> -->\n<aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"assets/dist/img/line.png\" class=\"img-circle\" alt=\"User Image\">\n          <!--<i class=\"fa fa-user-circle-o image-responsive \"></i>-->\n        </div>\n        <div class=\"pull-left info\">\n          <p>{{nameUser}}</p>\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Buscar...\">\n          <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                  <i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MENU PRINCIPAL</li>\n        <li><a [routerLink]=\"['/home/inicio']\"><i class=\"fa fa-book\"></i> <span>Inicio</span></a></li>\n        <li><a [routerLink]=\"['/home/somos']\"><i class=\"fa fa-book\"></i> <span>Quienes Somos</span></a></li>\n        <li><a [routerLink]=\"['/home/cmr-programas']\"><i class=\"fa fa-book\"></i> <span>CMR-Programas</span></a></li>  \n        <li><a [routerLink]=\"['/home/cmr-talleres']\"><i class=\"fa fa-book\"></i>CMR-Talleres</a></li>        \n        <li><a [routerLink]=\"['/home/consultorias']\"><i class=\"fa fa-book\"></i>Consultorias</a></li>\n        <li><a [routerLink]=\"['/home/facilitador']\"><i class=\"fa fa-book\"></i> <span>Facilitador</span></a></li>\n        <li><a [routerLink]=\"['/home/eventos']\"><i class=\"fa fa-book\"></i><span>Eventos</span></a></li>\n        <li><a [routerLink]=\"['/home/sucursales']\"><i class=\"glyphicon glyphicon-globe\"></i>Sucursales</a></li>\n        <li><a [routerLink]=\"['/home/interes']\"><i class=\"glyphicon glyphicon-globe\"></i>De maximo Interes</a></li>\n          \n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>"

/***/ }),

/***/ "./src/app/home/plantilla/appmenu/appmenu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/plantilla/appmenu/appmenu.component.ts ***!
  \*************************************************************/
/*! exports provided: AppmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppmenuComponent", function() { return AppmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppmenuComponent = /** @class */ (function () {
    function AppmenuComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.prueba = 'add';
    }
    AppmenuComponent.prototype.ngOnInit = function () {
        this.nameUser = _services_global__WEBPACK_IMPORTED_MODULE_1__["Identity"].name;
        this.queryRol();
    };
    AppmenuComponent.prototype.queryRol = function () {
        var _this = this;
        console.log(_services_global__WEBPACK_IMPORTED_MODULE_1__["Identity"].rol);
        this._peticionesService.getRole(_services_global__WEBPACK_IMPORTED_MODULE_1__["Identity"].rol).subscribe(function (result) {
            _this.role = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AppmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appmenu',
            template: __webpack_require__(/*! ./appmenu.component.html */ "./src/app/home/plantilla/appmenu/appmenu.component.html"),
            styles: [__webpack_require__(/*! ./appmenu.component.css */ "./src/app/home/plantilla/appmenu/appmenu.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], AppmenuComponent);
    return AppmenuComponent;
}());



/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/plantilla/appsettings/appsettings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/plantilla/appsettings/appsettings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  appsettings works!\n</p> -->\n\n\n\n<aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Create the tabs -->\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <!-- Home tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n      </div>\n      <!-- /.tab-pane -->\n\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n      <!-- /.tab-pane -->\n    </div>\n  </aside>"

/***/ }),

/***/ "./src/app/home/plantilla/appsettings/appsettings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/plantilla/appsettings/appsettings.component.ts ***!
  \*********************************************************************/
/*! exports provided: AppsettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsettingsComponent", function() { return AppsettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppsettingsComponent = /** @class */ (function () {
    function AppsettingsComponent() {
    }
    AppsettingsComponent.prototype.ngOnInit = function () {
    };
    AppsettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appsettings',
            template: __webpack_require__(/*! ./appsettings.component.html */ "./src/app/home/plantilla/appsettings/appsettings.component.html"),
            styles: [__webpack_require__(/*! ./appsettings.component.css */ "./src/app/home/plantilla/appsettings/appsettings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppsettingsComponent);
    return AppsettingsComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- inicio -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Incio</h1>\n        <form (ngSubmit)=\"saveInicio()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Imagen</label>\n            <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea 1</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line1\" [(ngModel)]=\"page.inicio.line1\" name=\"line1\" #line1=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea 2</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line2\" [(ngModel)]=\"page.inicio.line2\" name=\"line2\" #line2=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea 3</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line3\" [(ngModel)]=\"page.inicio.line3\" name=\"line3\" #line3=\"ngModel\" required />\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Servicios -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Servicios</h1>\n        <form (ngSubmit)=\"saveService()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"tittle\" [(ngModel)]=\"page.services.tittle\" name=\"tittle\" #tittle=\"ngModel\" required />\n          </div>\n          <div *ngFor=\"let service of page.services.services\">\n            <div class=\"form-group col-sm-8\" *ngFor=\"let key of service | objKey\">\n              <label *ngIf=\"key != '_id' && key != 'photo' && key != 'number'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n              <input *ngIf=\"key != '_id' && key != 'photo' && key != 'number'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                class=\"form-control\" id=\"{{service[key]}}\" [(ngModel)]=\"service[key]\" name=\"{{service[key]}}\" #name=\"ngModel\"\n                required />\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Lo Nuestro -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Lo Nuestro</h1>\n        <form (ngSubmit)=\"saveOur()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Imagen</label>\n            <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputOur($event.target.files)\" />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea 1</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line1\" [(ngModel)]=\"page.our.line1\" name=\"line1\" #line1=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea 2</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line2\" [(ngModel)]=\"page.our.line2\" name=\"line2\" #line2=\"ngModel\" required />\n          </div>\n          <div *ngFor=\"let l of page.our.list\">\n            <div class=\"form-group col-sm-8\" *ngFor=\"let key of l | objKey\">\n              <label *ngIf=\"key != '_id' && key != 'photo' && key != 'number'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n              <textarea *ngIf=\"key != '_id' && key != 'photo' && key != 'number'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                class=\"form-control\" id=\"{{l[key]}}\" [(ngModel)]=\"l[key]\" name=\"{{l[key]}}\" #name=\"ngModel\" required></textarea>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Equipo -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Equipo</h1>\n        <form (ngSubmit)=\"saveTeam()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"tittle\" [(ngModel)]=\"page.team.tittle\" name=\"tittle\" #tittle=\"ngModel\" required />\n          </div>\n          <div *ngFor=\"let m of page.team.member\">\n            <div class=\"form-group col-sm-8\">\n              <div class=\"form-group col-sm-8\">\n                <label for=\"name\" class=\"control-label\">Imagen</label>\n                <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputTeam($event.target.files, m._id)\" />\n              </div>\n              <div *ngFor=\"let key of m | objKey\">\n                <label *ngIf=\"key != '_id' && key !='photo'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n                <input *ngIf=\"key != '_id' && key !='photo'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"{{m[key]}}\" [(ngModel)]=\"m[key]\" name=\"{{m[key]}}\" #name=\"ngModel\" required/>\n              </div>\n              <hr>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Galeria -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Galeria</h1>\n        <form (ngSubmit)=\"saveGalery()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"tittle\" [(ngModel)]=\"page.galery.tittle\" name=\"tittle\" #tittle=\"ngModel\" required />\n          </div>\n          <div *ngFor=\"let galery of page.galery.photos\">\n            <div class=\"form-group col-sm-8\">\n              <div class=\"form-group col-sm-8\">\n                <label for=\"name\" class=\"control-label\">Imagen</label>\n                <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputGalery($event.target.files, galery._id)\" />\n              </div>\n              <!-- <div *ngFor=\"let key of m | objKey\">\n                <label *ngIf=\"key != '_id' && key !='photo'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n                <input *ngIf=\"key != '_id' && key !='photo'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"{{m[key]}}\" [(ngModel)]=\"m[key]\" name=\"{{m[key]}}\" #name=\"ngModel\" required/>\n              </div> -->\n              <hr>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Clientes -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Clientes</h1>\n        <form (ngSubmit)=\"saveClients()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"tittle\" [(ngModel)]=\"page.clients.tittle\" name=\"tittle\" #line1=\"ngModel\" required />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">linea</label>\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line1\" [(ngModel)]=\"page.clients.line\" name=\"line1\" #line1=\"ngModel\" required />\n          </div>\n          <div *ngFor=\"let list of page.clients.list\">\n            <div class=\"form-group col-sm-8\">\n              <div class=\"form-group col-sm-8\">\n                <label for=\"name\" class=\"control-label\">Imagen</label>\n                <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputClients($event.target.files, list._id)\" />\n              </div>\n              <hr>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioComponent = /** @class */ (function () {
    function InicioComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.filesTeam = [];
        this.filesGalery = [];
        this.filesClients = [];
    }
    InicioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page = res[0].home;
            _this.id = res[0]._id;
        });
    };
    InicioComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
    };
    InicioComponent.prototype.handleFileInputOur = function (files) {
        this.fileOur = files.item(0);
    };
    InicioComponent.prototype.handleFileInputTeam = function (files, id) {
        // console.log(id);
        this.filesTeam.push({ file: files.item(0), id: id });
    };
    InicioComponent.prototype.handleFileInputGalery = function (files, id) {
        // console.log(id);
        this.filesGalery.push({ file: files.item(0), id: id });
    };
    InicioComponent.prototype.handleFileInputClients = function (files, id) {
        // console.log(id);
        this.filesClients.push({ file: files.item(0), id: id });
    };
    InicioComponent.prototype.saveInicio = function () {
        if (this.file == undefined) {
            this._peticionesService.putInicio(this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putInicioF(this.file, this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
    };
    InicioComponent.prototype.saveService = function () {
        this._peticionesService.putService(this.page.services, this.id).subscribe(function (res) {
            alert('Guardado Exitosamente');
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    InicioComponent.prototype.saveOur = function () {
        if (this.fileOur == undefined) {
            this._peticionesService.putOur(this.page.our, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putOurF(this.fileOur, this.page.our, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
    };
    InicioComponent.prototype.saveTeam = function () {
        if (this.filesTeam.length == 0) {
            this._peticionesService.putTeam(this.page.team, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putTeamF(this.filesTeam, this.page.team, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
    };
    InicioComponent.prototype.saveGalery = function () {
        if (this.filesGalery.length == 0) {
            this._peticionesService.putGalery(this.page.galery, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putGaleryF(this.filesGalery, this.page.galery, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
    };
    InicioComponent.prototype.saveClients = function () {
        if (this.filesClients.length == 0) {
            this._peticionesService.putClients(this.page.clients, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putClientsF(this.filesClients, this.page.clients, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (err) {
                var errorMessage = err;
                console.log(errorMessage);
            });
        }
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]],
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/interes/interes.component.css":
/*!***********************************************!*\
  !*** ./src/app/interes/interes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interes/interes.component.html":
/*!************************************************!*\
  !*** ./src/app/interes/interes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- inicio -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Incio</h1>\n        <form (ngSubmit)=\"saveInicio()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Imagen</label>\n            <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line1\" [(ngModel)]=\"page.inicio.line\" name=\"line1\" #line1=\"ngModel\" required />\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- list -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Intereses</h1>\n        <div *ngFor=\"let list of page.list\">\n          <form (ngSubmit)=\"saveInteres(list._id)\" #inicio=\"ngForm\" class=\"\">\n            <div class=\"form-group col-sm-8\">\n              <div>\n                <label for=\"name\" class=\"control-label\">Imagen</label>\n                <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputInteres($event.target.files, list._id)\" />\n              </div>\n              <div *ngFor=\"let key of list | objKey\">\n                <label *ngIf=\"key != '_id' && key !='photo' && key !='block2' && key !='block3'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n                <input *ngIf=\"key != '_id' && key !='photo' && key !='block2' && key !='block3'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"{{list[key]}}\" [(ngModel)]=\"list[key]\" name=\"{{list[key]}}\" #name=\"ngModel\" required/>\n                <div *ngIf=\"key == 'block2' || key =='block3'\">\n                  <label for=\"name\" class=\"control-label\"> {{key}}</label>\n                  <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                    class=\"form-control\" id=\"{{list[key].tittle}}\" [(ngModel)]=\"list[key].tittle\" name=\"{{list[key].tittle}}\"\n                    #name=\"ngModel\" required/>\n                  <!-- <div *ngFor\"let p of list[key].photos\">\n                    <label for=\"name\" class=\"control-label\">Imagen</label>\n                    <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInputInteres($event.target.files, list._id)\" />\n                  </div> -->\n                </div>\n                <!-- <label *ngIf=\"key == 'block2' && key !='block3'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n                <input *ngIf=\"key == 'block2' && key !='block3'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n                  class=\"form-control\" id=\"{{list[key]}}\" [(ngModel)]=\"list[key]\" name=\"{{list[key]}}\" #name=\"ngModel\" required/> -->\n              </div>\n              <hr>\n              <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/interes/interes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/interes/interes.component.ts ***!
  \**********************************************/
/*! exports provided: InteresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresComponent", function() { return InteresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteresComponent = /** @class */ (function () {
    function InteresComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        this.fileInteres = [];
    }
    InteresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page = res[0].interes;
            console.log(_this.page);
            _this.id = res[0]._id;
        });
    };
    InteresComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
    };
    InteresComponent.prototype.handleFileInputInteres = function (files, id) {
        this.fileInteres.push({ file: files.item(0), id: id });
        // this.fileInteres.push(filesInteres.item(0));
    };
    InteresComponent.prototype.saveInicio = function () {
        if (this.file == undefined) {
            this._peticionesService.putInteresInicio(this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putInteresInicioF(this.file, this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
    };
    InteresComponent.prototype.saveInteres = function (interesId) {
        var list;
        this.page.list.forEach(function (l) {
            if (l._id == interesId) {
                list = l;
            }
        });
        if (this.fileInteres.length == 0) {
            // console.log(list);
            this._peticionesService.putInteresList(list, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putInteresListF(this.fileInteres, list, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
    };
    InteresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interes',
            template: __webpack_require__(/*! ./interes.component.html */ "./src/app/interes/interes.component.html"),
            styles: [__webpack_require__(/*! ./interes.component.css */ "./src/app/interes/interes.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], InteresComponent);
    return InteresComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*:host{\n    flex-grow: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  div.input{\n      position: relative;\n  }\n  div.input label{\n      position: absolute;\n      top: 0;\n      transform: translateY(-50%);\n      left: 10px;\n      background: crimson;\n      padding: 5px 2px;\n  }\n  div.input input{\n      padding: 10px 20px;\n      font-size: 25px;\n      outline: 0;\n  }**/\n.form-signin{\n    max-width: 330px;\n    padding: 15px;\n    margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin{\n    margin-bottom: 10px;\n}\n.form-signin{\n    font-weight: normal;\n}\n.form-signin .form-control{\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px;\n    box-sizing: border-box;\n}\n.form-signin .form-control:focus{\n    z-index: 2;\n}\n.form-signin input[type=\"text\"]{\n    margin-bottom: -1px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"]{\n    margin-bottom: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.account-wall{\n    margin-top: 20px;\n    padding: 40px 0px 20px 0px;\n    background-color: #f7f7f7;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.login-title{\n    color: #555;\n    font-size: 24px;\n    font-weight: 550;\n    display: block;\n}\n.text-alert{\n    color:#dd4b39;\n}\n.profile-img{\n    width: 96px;\n    height: 96px;\n    margin: 0 auto 10px;\n    display: block;\n    border-radius: 50%;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n    <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n \n<!--<div class=\"col-lg-6\">\n  <h1>Welcome to {{ title }}!</h1>\n  <img width=\"150\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n\n      <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\n        Login correcto !!\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\n          Login correcto !!\n        </div>\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-7\">\n          <p>\n            <label>Username</label>\n            <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" required />\n            <span *ngIf=\"!nombre.valid && nombre.touched\">\n                El nombre de usuario es obligatorio.\n              </span>\n          </p>\n          <p>\n              <label>Contraseña</label>\n              <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password_hash\" class=\n              \"form-control\" required />\n              <span *ngIf=\"!password.valid && password.touched\">\n                El Password de usuario es obligatorio.\n              </span> \n            </p>  \n          <!-- <input type=\"submit\" value=\"LOGIN\" [routerLink]=\"['/home']\">\n          <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-success\"/>\n        </form>\n  <div style=\"text-align:left\">\n    <h5>\n    CECAP Consulting: Todos los derechos reservados.\n    </h5>\n  </div>-->\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n          <h1 class=\"text-center login-title\">Bienvenidos a {{title}}</h1>\n          <div class=\"account-wall\">\n            <img class=\"profile-img\" src=\"assets/dist/img/line.png\" alt=\"\">\n                <div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\n                  Login correcto !!\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\n                  Login correcto !!\n                </div>\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\n                  <p>\n                    <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" placeholder=\"Nombre de usuario\" required/>\n                    <span *ngIf=\"!nombre.valid && nombre.touched\" class=\"text-alert\">\n                      *El nombre de usuario es obligatorio.\n                    </span>\n                  </p>\n                  <p>\n                    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password_hash\" class=\"form-control\" placeholder=\"Contraseña\" required />\n                    <span *ngIf=\"!password.valid && password.touched\" class=\"text-alert\">\n                      *La contraseña de usuario es obligatorio.\n                    </span> \n                  </p>  \n                  <input type=\"submit\" value=\"LOGIN\" class=\"btn btn-success btn-lg btn-block\"/>\n                </form>\n            </div>\n            <div style=\"text-align:left\">\n              <h5>\n                CECAP Consulting: Todos los derechos reservados.\n              </h5>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/local-storage.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modelo_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modelo/user */ "./src/app/modelo/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AsyncLocalStorage } from 'angular-async-local-storage';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_route, _router, _userService, localStorage) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.localStorage = localStorage;
        this.title = 'CECAP COMPANY';
        this.user = new _modelo_user__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', null, '', '');
    }
    LoginComponent.prototype.ngOnInit = function () {
        // console.log('login.component cargado');
        // console.log('this._userService.register()');
    };
    LoginComponent.prototype.onSubmit = function () {
        // console.log(this.user);//sadas
        var _this = this;
        // this._userService.getPassword(this.user.name).subscribe(
        //     Response => {
        //       this.passO = Response;
        //       this.pass = this.passO.password_hash;
        //     },
        //     error => {
        //       var err = error;  
        //     }
        // )
        this._userService.signin(this.user).subscribe(function (response) {
            _this.identity = response;
            console.log(_this.identity);
            if (!_this.identity || !_this.identity._id) {
                alert('Usuario Incorrecto');
            }
            else {
                _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"]._id = _this.identity._id;
                _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].rol = _this.identity.rol;
                _services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].name = _this.user.name;
                _this.localStorage.setItem('Identity', { _id: _this.identity._id }).subscribe(function () { console.log('verifico el usuario'); });
                _this._router.navigate(['/']);
            }
        }, function (error) {
            //console.log(<any>error);
            alert('Usuario Incorrecto');
            var errorMessage = error;
            if (errorMessage != null) {
                var body = JSON.parse(error.body);
                _this.status = 'error';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modelo/cashflowusers.ts":
/*!*****************************************!*\
  !*** ./src/app/modelo/cashflowusers.ts ***!
  \*****************************************/
/*! exports provided: Cashflowusers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cashflowusers", function() { return Cashflowusers; });
var Cashflowusers = /** @class */ (function () {
    function Cashflowusers(date_start, date_end, amount, amount_delivered, receipt, description, detail_amount, user, title, events, modulars) {
    }
    return Cashflowusers;
}());



/***/ }),

/***/ "./src/app/modelo/consultoria.ts":
/*!***************************************!*\
  !*** ./src/app/modelo/consultoria.ts ***!
  \***************************************/
/*! exports provided: Consultoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consultoria", function() { return Consultoria; });
var Consultoria = /** @class */ (function () {
    function Consultoria(photo, name, description, objective, scopes) {
    }
    return Consultoria;
}());



/***/ }),

/***/ "./src/app/modelo/descOcupation.ts":
/*!*****************************************!*\
  !*** ./src/app/modelo/descOcupation.ts ***!
  \*****************************************/
/*! exports provided: DescOcupation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescOcupation", function() { return DescOcupation; });
var DescOcupation = /** @class */ (function () {
    function DescOcupation(
    //universitario
    carrera, universidad, semestre, 
    //Particular
    areaTrabajo, 
    //Profesional
    profesion, empresa, cargo) {
        this.carrera = carrera;
        this.universidad = universidad;
        this.semestre = semestre;
        this.areaTrabajo = areaTrabajo;
        this.profesion = profesion;
        this.empresa = empresa;
        this.cargo = cargo;
    }
    return DescOcupation;
}());



/***/ }),

/***/ "./src/app/modelo/event.ts":
/*!*********************************!*\
  !*** ./src/app/modelo/event.ts ***!
  \*********************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event(name, description, date_start, 
    // public inscriptions: [{
    //   name: string,
    //    state: number,
    //    person: string,
    //    description: string
    // }],
    total, programs, offices, date_end, active) {
        this.name = name;
        this.description = description;
        this.date_start = date_start;
        this.total = total;
        this.programs = programs;
        this.offices = offices;
        this.date_end = date_end;
        this.active = active;
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/modelo/facilitador.ts":
/*!***************************************!*\
  !*** ./src/app/modelo/facilitador.ts ***!
  \***************************************/
/*! exports provided: facilitador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facilitador", function() { return facilitador; });
var facilitador = /** @class */ (function () {
    function facilitador(name, 
    // public last_name: string,
    // public cellphone:number,
    // public email:string,
    job) {
        this.name = name;
        this.job = job;
    }
    return facilitador;
}());



/***/ }),

/***/ "./src/app/modelo/inscription.ts":
/*!***************************************!*\
  !*** ./src/app/modelo/inscription.ts ***!
  \***************************************/
/*! exports provided: Inscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inscription", function() { return Inscription; });
var Inscription = /** @class */ (function () {
    function Inscription(total_price, module_price, bolivianos_price, dolares_price, canceled_price, price_event, receipt, 
    // public persons: string,
    users) {
        this.total_price = total_price;
        this.module_price = module_price;
        this.bolivianos_price = bolivianos_price;
        this.dolares_price = dolares_price;
        this.canceled_price = canceled_price;
        this.price_event = price_event;
        this.receipt = receipt;
        this.users = users;
    }
    return Inscription;
}());



/***/ }),

/***/ "./src/app/modelo/modulo.ts":
/*!**********************************!*\
  !*** ./src/app/modelo/modulo.ts ***!
  \**********************************/
/*! exports provided: Modulo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modulo", function() { return Modulo; });
var Modulo = /** @class */ (function () {
    function Modulo(number, name, content, programs) {
        this.number = number;
        this.name = name;
        this.content = content;
        this.programs = programs;
    }
    return Modulo;
}());



/***/ }),

/***/ "./src/app/modelo/offices.ts":
/*!***********************************!*\
  !*** ./src/app/modelo/offices.ts ***!
  \***********************************/
/*! exports provided: Offices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offices", function() { return Offices; });
var Offices = /** @class */ (function () {
    function Offices(name, 
    // nit:String,
    ubicacion, caja, departament, company_id) {
    }
    return Offices;
}());



/***/ }),

/***/ "./src/app/modelo/person.ts":
/*!**********************************!*\
  !*** ./src/app/modelo/person.ts ***!
  \**********************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(first_name, last_name, ci, phone, cellphone, email, ocupation, //1 = universitario, 2=Profecional, 3=particular
    descOcupation, 
    // public user: string,
    carteras) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.ci = ci;
        this.phone = phone;
        this.cellphone = cellphone;
        this.email = email;
        this.ocupation = ocupation;
        this.descOcupation = descOcupation;
        this.carteras = carteras;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/modelo/programa.ts":
/*!************************************!*\
  !*** ./src/app/modelo/programa.ts ***!
  \************************************/
/*! exports provided: Programa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Programa", function() { return Programa; });
var Programa = /** @class */ (function () {
    function Programa(photo, name, description, objective, benefit) {
        this.photo = photo;
        this.name = name;
        this.description = description;
        this.objective = objective;
        this.benefit = benefit;
    }
    return Programa;
}());



/***/ }),

/***/ "./src/app/modelo/registro.ts":
/*!************************************!*\
  !*** ./src/app/modelo/registro.ts ***!
  \************************************/
/*! exports provided: Registro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registro", function() { return Registro; });
var Registro = /** @class */ (function () {
    function Registro(inscription, persona, eventId, moduleId, modularsId) {
        this.inscription = inscription;
        this.persona = persona;
        this.eventId = eventId;
        this.moduleId = moduleId;
        this.modularsId = modularsId;
    }
    return Registro;
}());



/***/ }),

/***/ "./src/app/modelo/taller.ts":
/*!**********************************!*\
  !*** ./src/app/modelo/taller.ts ***!
  \**********************************/
/*! exports provided: Taller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Taller", function() { return Taller; });
var Taller = /** @class */ (function () {
    function Taller(photo, name, description, objective, benefit) {
        this.photo = photo;
        this.name = name;
        this.description = description;
        this.objective = objective;
        this.benefit = benefit;
    }
    return Taller;
}());



/***/ }),

/***/ "./src/app/modelo/user.ts":
/*!********************************!*\
  !*** ./src/app/modelo/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
// export class User{
//     constructor(
//        public _id:string,
//        public nombre:string,
//        public apellido:string,
//        public correo:string,
//        public password:string,
//        public role:string,
//        public image: string
//     ){}
// }
var User = /** @class */ (function () {
    function User(_id, name, active, password_hash, rol) {
        this._id = _id;
        this.name = name;
        this.active = active;
        this.password_hash = password_hash;
        this.rol = rol;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.css":
/*!************************************************************!*\
  !*** ./src/app/modulo/add-modulo/add-modulo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.text-alert{\n  color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modulo/add-modulo/add-modulo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n   <br>\n   <div class=\"\">\n      <div class=\"box box-primary\">\n\n         <div class=\"container \">\n            <div >\n               <h1>Registrar Módulo</h1>\n               <span><h3 class=\"text-info\">{{program?.name}}</h3></span>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addModulo=\"ngForm\" class=\"jumbotron\">\n                  <!-- <div class=\"form-group col-sm-8\">\n                     <label for=\"number\">Número del Módulo</label>\n                     <input type=\"number\" class=\"form-control\" id=\"number\" [(ngModel)]=\"modulo.number\" name=\"number\" #number=\"ngModel\" required>\n                     <span *ngIf=\"!number.valid && number.touched\" class=\"text-alert\">\n                        *Número del Módulo requerido.\n                     </span>\n                     <!--<div [hidden]=\"number?.valid || number?.pristine\" class=\"\">\n                              Numero Requerido\n                      </div>\n                  </div> -->\n                  <div class=\"form-group col-sm-8\">\n                    <label for=\"name\" class=\"control-label\">Nombre del Módulo</label>\n                    <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                    [(ngModel)]=\"modulo.name\" name=\"name\" #name=\"ngModel\" required />\n                    <span *ngIf=\"!name.untouched && !name.valid && modulo.name == ''\" class=\"text-alert\">\n                    *Nombre de Módulo requerido.\n                    </span>\n                    <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && modulo.name != '' && modulo.name.length>43\" class=\"text-alert\">\n                    *Nombre de Módulo inválido, excedió el límite de 42 caracteres.\n                    </span>\n                    <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && modulo.name != '' && 3>modulo.name.length\" class=\"text-alert\">\n                    *Nombre de Módulo inválido, tiene menos de 3 caracteres.\n                    </span>\n                    <!-- <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && modulo.name != '' && modulo.name.length<65 && modulo.name.length>2 \" class=\"text-alert\">\n                    *Nombre de Módulo inválido, no se permiten símbolos.\n                    </span> -->\n                     <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                           kjkn\n                       </div>-->\n                  </div>\n                  <div class=\"form-group col-sm-8\">\n                    <label for=\"content\" class=\" control-label\">Contenido</label>\n                    <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"content\" \n                    [(ngModel)]=\"modulo.content\" name=\"content\" #content=\"ngModel\" required >\n                    <span *ngIf=\"!content.valid && content.touched && modulo.content== ''\" class=\"text-alert\">\n                     *Detalle de Módulo requerido.\n                    <br></span>\n                    <span *ngIf=\"content.dirty && content.touched && !content.valid && content.name != '' && modulo.content.length>150 \" class=\"text-alert\">\n                     *Detalle de Módulo inválido, excedió el límite de 150 caracteres.\n                     <br></span>\n                    <span *ngIf=\"!content?.pattern && content.dirty && content.touched && !content.valid && modulo.content != '' && modulo.content.length<3 \" class=\"text-alert\">\n                     *Detalle de Módulo inválido, tiene menos de 3 caracteres.\n                     <br></span>\n                  </div>\n                  <!-- <div class=\"form-group col-sm-8\">\n                     <label for=\"content\" class=\" control-label\">Programa</label>\n                     <input type=\"text\" class=\"form-control\" id=\"content\" [(ngModel)]=\"program._id\" name=\"content\" #content=\"ngModel\" required>\n                  </div> -->\n                  <!-- <div class=\"form-group col-sm-8\">\n                     <label for=\"program\">Programa</label>\n                     <select class=\"form-control\" id=\"program\" required [(ngModel)]=\"modulo.programs\" name=\"program\" #program=\"ngModel\">\n                        <option *ngFor=\"let program of programs\" [value]=\"program._id\">{{program.name}}</option>\n                     </select>\n                  </div> -->\n                  <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                     <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addModulo.form.valid\">Guardar</button>\n                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                  </div>\n               </form>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/modulo/add-modulo/add-modulo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modulo/add-modulo/add-modulo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddModuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModuloComponent", function() { return AddModuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _modelo_modulo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/modulo */ "./src/app/modelo/modulo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddModuloComponent = /** @class */ (function () {
    function AddModuloComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.modulo = new _modelo_modulo__WEBPACK_IMPORTED_MODULE_3__["Modulo"](null, '', '', ''); //number, name, content, program
    }
    AddModuloComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.queryProgram();
    };
    AddModuloComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    AddModuloComponent.prototype.queryProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (response) {
            _this.program = response;
            // console.log(this.program);
            _this.queryModules();
        }, function (error) {
            console.log(error);
        });
    };
    AddModuloComponent.prototype.queryModules = function () {
        var _this = this;
        this._peticionesService.getModulos(this.programId).subscribe(function (result) {
            var modules = result;
            // console.log(result)
            var keys = Object.keys(modules);
            _this.modulo.number = keys.length + 1;
        });
    };
    AddModuloComponent.prototype.onSubmit = function () {
        this.modulo.programs = this.programId;
        this._peticionesService.addModulo(this.modulo).subscribe(function (result) {
            var esperado = result;
            console.log(esperado);
            alert('El Módulo se creo correctamente');
            window.history.back();
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al crear Módulo verifique los datos');
        });
    };
    AddModuloComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddModuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-modulo',
            template: __webpack_require__(/*! ./add-modulo.component.html */ "./src/app/modulo/add-modulo/add-modulo.component.html"),
            styles: [__webpack_require__(/*! ./add-modulo.component.css */ "./src/app/modulo/add-modulo/add-modulo.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddModuloComponent);
    return AddModuloComponent;
}());



/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modulo/edit-modulo/edit-modulo.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modulo/edit-modulo/edit-modulo.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"content-wrapper\">\n    <div class=\"content-wrapper\">      \n      <section class=\"content\">\n        \n        <div class=\"md-form\">\n            <i class=\"fa fa-pencil prefix grey-text\"></i>\n            <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Numero del Modulo</label>\n            <input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloNumber}}\" #number>\n        </div>\n        <br>\n        <div class=\"md-form\">\n            <i class=\"fa fa-pencil prefix grey-text\"></i>\n            <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Nombre del Modulo</label>\n            <input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloName}}\" #name>\n        </div>\n        <br>\n        <div class=\"md-form\">\n          <i class=\"fa fa-comment prefix grey-text\"></i>\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Contenido</label>\n          <textarea type=\"text\" class=\"md-textarea form-control\" rows=\"4\" value=\"{{moduloContent}}\" #content>Contenido</textarea>\n          <!--<input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{moduloContent}}\" #content>\n        </div>\n  \n        <div class=\"modal-footer d-flex justify-content-center\">\n            <button class=\"btn btn-success\" (click)=\"saveModulo()\">Guardar\n               <i class=\"fa fa-paper-plane-o ml-1\"></i>\n            </button>\n            <button class=\"btn btn-success\" (click)=\"cancel()\">Cancelar\n              <i class=\"fa fa-paper-plane-o ml-1\"></i>\n           </button>\n        </div>\n    \n      </section>\n      <router-outlet></router-outlet>\n    </div>\n  </section> -->\n\n  <div class=\"content-wrapper\">\n      <br>\n      <div class=\"\">\n        <div class=\"box box-primary\">\n          <div class=\"container\">\n            <div >\n              <h1>Editar Módulo</h1>\n              <form (ngSubmit)=\" saveModulo()\" #addModulo=\"ngForm\" class=\"jumbotron\" >\n                <!-- <div class=\"form-group col-sm-8\">\n                    <label for=\"number\">Número del Módulo</label>\n                    <input type=\"text\" pattern=\"[0-9]{1,10}\" class=\"form-control\" id=\"number\"\n                    [(ngModel)]=\"moduloNumber\" name=\"number\" #number=\"ngModel\" required>\n                    <div [hidden]=\"number?.valid || number?.pristine\" class=\"text-alert\">\n                      *El número del Módulo es requerido\n                    </div>\n                </div> -->\n                <!-- <div class=\"form-group col-sm-8\">\n                    <label for=\"name\">Nombre del Módulo</label>\n                    <input type=\"text\" pattern=\"[a-zA-Z0-9]{3,20}[ ]{0,1}[a-zA-Z0-9]{0,20}\" class=\"form-control\" id=\"name\"\n                    [(ngModel)]=\"moduloName\" name=\"name\" #name=\"ngModel\" required>\n                    <div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                      *El nombre del Módulo es requerido\n                    </div>\n                </div> -->\n                <div class=\"form-group col-sm-8\">\n                    <label for=\"content\">Contenido</label>\n                    <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"content\" \n                    [(ngModel)]=\"moduloContent\" name=\"content\" #content=\"ngModel\" required >\n                    <span *ngIf=\"!content.valid && content.touched && modulo.content== ''\" class=\"text-alert\">\n                     *Detalle de Módulo requerido.\n                    <br></span>\n                    <span *ngIf=\"content.dirty && content.touched && !content.valid && content.name != '' && modulo.content.length>150 \" class=\"text-alert\">\n                     *Detalle de Módulo inválido, excedió el límite de 150 caracteres.\n                     <br></span>\n                    <span *ngIf=\"!content?.pattern && content.dirty && content.touched && !content.valid && modulo.content != '' && modulo.content.length<3 \" class=\"text-alert\">\n                     *Detalle de Módulo inválido, tiene menos de 3 caracteres.\n                     <br></span>\n                </div>\n                <div class=\"form-group col-sm-8\" style=\"text-align:center\">\n                  <button  type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addModulo.form.valid\">Guardar</button>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/modulo/edit-modulo/edit-modulo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulo/edit-modulo/edit-modulo.component.ts ***!
  \*************************************************************/
/*! exports provided: EditModuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModuloComponent", function() { return EditModuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditModuloComponent = /** @class */ (function () {
    function EditModuloComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditModuloComponent.prototype.ngOnInit = function () {
        this.queryModuloId();
        this.findModulo();
        //this.queryProgramId();
    };
    EditModuloComponent.prototype.queryModuloId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.moduloId = params.id;
        });
    };
    EditModuloComponent.prototype.findModulo = function () {
        var _this = this;
        this._peticionesService.getModulo(this.moduloId).subscribe(function (result) {
            _this.modulo = result;
            _this.moduloNumber = _this.modulo.number;
            _this.moduloName = _this.modulo.name;
            _this.moduloContent = _this.modulo.content;
            //console.log(this.modulo.number)
            //console.log(this.modulo.name)
            //console.log(this.modulo.content)
        }, function (error) {
            console.log(error);
        });
    };
    EditModuloComponent.prototype.saveModulo = function () {
        //console.log(this.modulo);
        // this.modulo.number = this.numberRef.nativeElement.value;
        // this.modulo.name = this.nameRef.nativeElement.value;
        // this.modulo.content = this.contentRef.nativeElement.value;
        this.modulo.number = this.moduloNumber;
        this.modulo.name = this.moduloName;
        this.modulo.content = this.moduloContent;
        // if (this.numberRef.nativeElement.value == null || this.nameRef.nativeElement.value == '' || this.contentRef.nativeElement.value == '') {
        //    window.alert("Asegurese que todos los campos esten llenos");
        if (this.moduloNumber == null || this.moduloName.value == '' || this.moduloContent == '') {
            window.alert("Asegurese que todos los campos esten llenos");
        }
        else {
            this._peticionesService.updateModulo(this.modulo).subscribe(function (result) {
                var res = result;
                console.log(res);
                alert('Se Guardo correctamente la edicion');
                window.history.back();
            }, function (error) {
                console.log(error);
                alert('Error al Guardar verifique los datos');
            });
        }
    };
    //save() {
    //console.log(this.modulo);
    //this.close.nativeElement.click();
    //}
    //queryProgramId(){
    //this.route.params.subscribe(params => {
    //this.programId=params.id;
    //});
    //}
    EditModuloComponent.prototype.cancel = function () {
        // this.router.navigate(['home/modulos']);
        window.history.back();
    };
    EditModuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-modulo',
            template: __webpack_require__(/*! ./edit-modulo.component.html */ "./src/app/modulo/edit-modulo/edit-modulo.component.html"),
            styles: [__webpack_require__(/*! ./edit-modulo.component.css */ "./src/app/modulo/edit-modulo/edit-modulo.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditModuloComponent);
    return EditModuloComponent;
}());



/***/ }),

/***/ "./src/app/modulo/modulo.component.css":
/*!*********************************************!*\
  !*** ./src/app/modulo/modulo.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modulo/modulo.component.html":
/*!**********************************************!*\
  !*** ./src/app/modulo/modulo.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n   <section class=\"content-header\">\n      <h1>\n         Módulos\n         <small>{{program?.name}}</small>\n      </h1>\n   </section>\n   <section class=\"content\">\n      <a class=\"btn btn-primary a\" (click)=\"addModulo()\"><i class=\"fa fa-book\"></i> Registrar Módulo</a>\n\n      <table class=\"table table-hover\">\n         <thead>\n            <tr>\n               <th>Número</th>\n               <th>Nombre</th>\n               <th>Contenido</th>\n               <th colspan=\"3\">Opciones</th>\n            </tr>\n         </thead>\n         <tbody>\n            <tr *ngFor=\"let modulo of modulos\">\n               <td>{{ modulo.number }}</td>\n               <td>{{ modulo.name }}</td>\n               <td>{{ modulo.content }}</td>\n               <td>\n                  <a class=\"btn btn-warning\" (click)=\"editModulo(modulo._id)\">EDITAR</a>\n               </td>\n            </tr>\n         </tbody>\n      </table>\n      <div align=\"center\">\n        <button class=\"btn btn-primary\"  (click)=\"cancelar()\">Volver</button>\n      </div>\n   </section>\n   <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/modulo/modulo.component.ts":
/*!********************************************!*\
  !*** ./src/app/modulo/modulo.component.ts ***!
  \********************************************/
/*! exports provided: ModuloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuloComponent", function() { return ModuloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuloComponent = /** @class */ (function () {
    function ModuloComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    ModuloComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.queryProgram();
        this.findModulos();
    };
    ModuloComponent.prototype.queryProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (response) {
            _this.program = response;
        }, function (error) {
            console.log(error);
        });
    };
    ModuloComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    ModuloComponent.prototype.findModulos = function () {
        var _this = this;
        console.log(this.programId);
        this._peticionesService.getModulos(this.programId).subscribe(function (result) {
            _this.modulos = result;
            console.log(_this.modulos);
        }, function (error) {
            console.log(error);
        });
    };
    ModuloComponent.prototype.editModulo = function (_id) {
        this.router.navigate(['/home/modulo/edit', _id]);
    };
    ModuloComponent.prototype.addModulo = function () {
        this.router.navigate(['/home/modulo/add', this.programId]);
    };
    ModuloComponent.prototype.cancelar = function () {
        window.history.back();
    };
    ModuloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modulo',
            template: __webpack_require__(/*! ./modulo.component.html */ "./src/app/modulo/modulo.component.html"),
            styles: [__webpack_require__(/*! ./modulo.component.css */ "./src/app/modulo/modulo.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], ModuloComponent);
    return ModuloComponent;
}());



/***/ }),

/***/ "./src/app/obj-key.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/obj-key.pipe.ts ***!
  \*********************************/
/*! exports provided: ObjKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjKey", function() { return ObjKey; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjKey = /** @class */ (function () {
    // export class ObjKeyPipe implements PipeTransform {
    //   transform(value: any, args?: any): any {
    //     return null;
    //   }
    // }
    // export class ObjKey implements PipeTransform {
    //   transform(value: any, args: any[] = null): any {
    //     return Object.keys(value).map(key => Object.assign({ key }, value[key]));
    //   }
    // }
    function ObjKey() {
    }
    ObjKey.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    ObjKey = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'objKey'
            // pure: false
        })
        // export class ObjKeyPipe implements PipeTransform {
        //   transform(value: any, args?: any): any {
        //     return null;
        //   }
        // }
        // export class ObjKey implements PipeTransform {
        //   transform(value: any, args: any[] = null): any {
        //     return Object.keys(value).map(key => Object.assign({ key }, value[key]));
        //   }
        // }
    ], ObjKey);
    return ObjKey;
}());



/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.css":
/*!******************************************************************!*\
  !*** ./src/app/programa/add-programa/add-programa.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  } \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  } \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/programa/add-programa/add-programa.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <br>\n   <div class=\"\">\n     <div class=\"box box-primary\">\n     \n       <div class=\"container \">\n           <div >\n               <h1>Registrar Programa</h1>\n               <br>\n               <form (ngSubmit)=\"onSubmit()\" #addProgram=\"ngForm\" class=\"jumbotron\">\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"name\" class=\"control-label\" >Nombre del Programa</label>\n                           <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                           [(ngModel)]=\"program.name\" name=\"name\" #name=\"ngModel\" required />\n                           <span *ngIf=\"!name.untouched && !name.valid && program.name == ''\" class=\"text-alert\">\n                            *Nombre de Programa requerido.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length>43\" class=\"text-alert\">\n                            *Nombre de Programa inválido, excedió el límite de 42 caracteres.\n                           </span>\n                           <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length<3\" class=\"text-alert\">\n                            *Nombre de Programa inválido, tiene menos de 3 caracteres.\n                           </span>\n                           <!-- <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length<65 && program.name.length>2 \" class=\"text-alert\">\n                            *Nombre de Programa inválido, no se permiten símbolos.\n                           </span> -->\n                       <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                           kjkn\n                       </div>-->\n                   </div>\n                   <div class=\"form-group col-sm-8\">\n                       <label for=\"ubicacion\" class=\" control-label\">Detalles</label>\n                               <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                                [(ngModel)]=\"program.description\" name=\"details\" #details=\"ngModel\" required >\n                               <span *ngIf=\"!details.valid && details.touched && program.description == ''\" class=\"text-alert\">\n                                *Detalle de Programa requerido.\n                               <br></span>\n                               <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && program.description.length>150 \" class=\"text-alert\">\n                                *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                                <br></span>\n                               <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.description != '' && program.description.length<3 \" class=\"text-alert\">\n                                *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                                <br></span>\n                               <!-- <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.description != '' && program.description.length<151 && program.description.length>2 \" class=\"text-alert\">\n                                *Detalle de Programa inválido, use .,¿?¡!- no se permiten otros símbolos.\n                               </span> -->\n                           <!--<div [hidden]=\"ubicacion?.valid || ubicacion?.pristine\" class=\"\">\n                               Ubicacion requerida\n                           </div>-->\n                   </div>\n                   <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                       <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addProgram.form.valid\">Guardar</button>\n                       <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n                    </div>\n               </form>\n           </div>\n       </div>\n     </div> \n   </div>\n</div>"

/***/ }),

/***/ "./src/app/programa/add-programa/add-programa.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/programa/add-programa/add-programa.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProgramaComponent", function() { return AddProgramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _modelo_programa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modelo/programa */ "./src/app/modelo/programa.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProgramaComponent = /** @class */ (function () {
    function AddProgramaComponent(_peticionesService, router, route) {
        this._peticionesService = _peticionesService;
        this.router = router;
        this.route = route;
        this.program = new _modelo_programa__WEBPACK_IMPORTED_MODULE_3__["Programa"]("", '', '', '', {}); //name, details
    }
    AddProgramaComponent.prototype.ngOnInit = function () {
        this.query();
    };
    AddProgramaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.program);
        this._peticionesService.addProgram(this.program).subscribe(function (result) {
            var esperado = result;
            console.log(esperado);
            alert('El Programa se creó correctamente');
            _this.router.navigate(['home/programs']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al crear Programa verifique los datos');
        });
    };
    AddProgramaComponent.prototype.query = function () { };
    AddProgramaComponent.prototype.cancel = function () {
        window.history.back();
    };
    AddProgramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-programa',
            template: __webpack_require__(/*! ./add-programa.component.html */ "./src/app/programa/add-programa/add-programa.component.html"),
            styles: [__webpack_require__(/*! ./add-programa.component.css */ "./src/app/programa/add-programa/add-programa.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddProgramaComponent);
    return AddProgramaComponent;
}());



/***/ }),

/***/ "./src/app/programa/alert-create/alert-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/programa/alert-create/alert-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programa/alert-create/alert-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/programa/alert-create/alert-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" style=\"border: rosybrown\" id=\"modalAlert\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n     <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n            <h4 class=\"modal-title w-100 font-weight-bold\">Alerta</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #close>\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body mx-3 \">\n            <div *ngIf='(programs.length == 0)'><h5> Tiene 0 programas, necesita \n                        <strong >CREAR PROGRAMA</strong> para agregar al evento</h5>\n            </div>\n            <div *ngIf='(programs.length > 0)'><h5> Estos son los programas que tiene para añadir al nuevo Evento, si usted quiere crear o registrar un nuevo programa elija la opción \n              <strong >CREAR PROGRAMA</strong> y si no \n              <strong >CREAR EVENTO</strong></h5>\n            </div>\n              <li *ngFor=\"let programa of programs\" style=\"color: plum\"><strong> * {{programa.name}}</strong></li>\n            \n            </div>\n          <div class=\"modal-footer d-flex justify-content-center\" >\n              <button *ngIf='(programs.length == 0)' disabled type=\"button\" class=\"btn btn-success\" (click)=\"continuar()\">CREAR EVENTO</button>\n              <button *ngIf='(programs.length > 0)' type=\"button\" class=\"btn btn-success\" (click)=\"continuar()\">CREAR EVENTO</button>\n              <button type=\"submit\" class=\"btn btn-warning\"(click)=\"craerProgram()\">CREAR PROGRAMA</button>\n          </div>\n     </div>\n   </div>\n  </div>\n<!-- <div class=\"text-center\">\n  <li><a class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalAlert\"><i class=\"fa fa-book\"></i> Registrar Programa</a></li>\n</div> -->"

/***/ }),

/***/ "./src/app/programa/alert-create/alert-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/programa/alert-create/alert-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: AlertCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertCreateComponent", function() { return AlertCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertCreateComponent = /** @class */ (function () {
    function AlertCreateComponent(_peticionesService, route, router) {
        this._peticionesService = _peticionesService;
        this.route = route;
        this.router = router;
    }
    AlertCreateComponent.prototype.ngOnInit = function () {
        this.queryPrograms();
    };
    AlertCreateComponent.prototype.queryPrograms = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (response) {
            _this.programs = response;
            console.log(_this.programs.length);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    AlertCreateComponent.prototype.craerProgram = function () {
        this.router.navigate(['/home/program/add']);
        this.close.nativeElement.click();
    };
    AlertCreateComponent.prototype.continuar = function () {
        this.router.navigate(['/home/eventos/add']);
        this.close.nativeElement.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("close", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AlertCreateComponent.prototype, "close", void 0);
    AlertCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-create',
            template: __webpack_require__(/*! ./alert-create.component.html */ "./src/app/programa/alert-create/alert-create.component.html"),
            styles: [__webpack_require__(/*! ./alert-create.component.css */ "./src/app/programa/alert-create/alert-create.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertCreateComponent);
    return AlertCreateComponent;
}());



/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.css":
/*!********************************************************************!*\
  !*** ./src/app/programa/edit-programa/edit-programa.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/programa/edit-programa/edit-programa.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"content-wrapper\">\n  <div class=\"content-wrapper\">      \n    <section class=\"content\">\n      \n      <div class=\"md-form\">\n          <i class=\"fa fa-pencil prefix grey-text\"></i>\n          <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Nombre del Programa</label>\n          <input type=\"text\" pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" id=\"form34\" class=\"form-control validate\" value=\"{{programName}}\" #name>\n      </div>\n      <br>\n      <div class=\"md-form\">\n        <i class=\"fa fa-comment prefix grey-text\"></i>\n        <label data-error=\"wrong\" data-success=\"right\" for=\"form8\">Detalles</label>\n        <textarea type=\"text\" pattern=\"[a-zA-Z0-9 ]{3,150}\" class=\"md-textarea form-control\" rows=\"4\" value=\"{{programDetails}}\" #details>Detalles</textarea>\n        <!--<input type=\"text\" id=\"form34\" class=\"form-control validate\" value=\"{{programDetails}}\" #details>\n      </div>\n\n      <div class=\"modal-footer d-flex justify-content-center\">\n          <button class=\"btn btn-success\" (click)=\"saveProgram()\">Guardar\n             <i class=\"fa fa-paper-plane-o ml-1\"></i>\n          </button>\n          <button class=\"btn btn-success\" (click)=\"cancel()\">Cancelar\n            <i class=\"fa fa-paper-plane-o ml-1\"></i>\n         </button>\n      </div>\n  \n    </section>\n    <router-outlet></router-outlet>\n  </div>\n</section> -->\n\n<div class=\"content-wrapper\">\n  <br>\n  <div class=\"\">\n    <div class=\"box box-primary\">\n      <div class=\"container\">\n        <div >\n          <h1>Editar Programa</h1>\n          <form (ngSubmit)=\" saveProgram()\" #updateProgram=\"ngForm\" class=\"jumbotron\" >\n            <div class=\"form-group col-sm-8\">\n                <label for=\"name\">Nombre del Programa</label>\n                <input type=\"text\" pattern=\"[A-Za-zÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 ]{3,42}\" class=\"form-control\" id=\"name\" \n                [(ngModel)]=\"programName\" name=\"name\" #name=\"ngModel\" required />\n                <span *ngIf=\"!name.untouched && !name.valid && program.name == ''\" class=\"text-alert\">\n                *Nombre de Programa requerido.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length>43\" class=\"text-alert\">\n                *Nombre de Programa inválido, excedió el límite de 42 caracteres.\n                </span>\n                <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && 3>program.name.length\" class=\"text-alert\">\n                *Nombre de Programa inválido, tiene menos de 3 caracteres.\n                </span>\n                <!-- <span *ngIf=\"!name?.pattern && name.dirty && name.touched && !name.valid && program.name != '' && program.name.length<65 && program.name.length>2 \" class=\"text-alert\">\n                *Nombre de Programa inválido, no se permiten símbolos.\n                </span> -->\n            </div>\n            <div class=\"form-group col-sm-8\">\n                <label for=\"details\">Detalles</label>\n                <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9 .,¿?¡!-]{3,150}\" class=\"form-control\" id=\"ubicacion\" \n                [(ngModel)]=\"programDetails\" name=\"details\" #details=\"ngModel\" required >\n                <span *ngIf=\"!details.valid && details.touched && program.details == ''\" class=\"text-alert\">\n                *Detalle de Programa requerido.\n                <br></span>\n                <span *ngIf=\"details.dirty && details.touched && !details.valid && details.name != '' && program.details.length>150 \" class=\"text-alert\">\n                *Detalle de Programa inválido, excedió el límite de 150 caracteres.\n                <br></span>\n                <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.details != '' && program.details.length<3 \" class=\"text-alert\">\n                *Detalle de Programa inválido, tiene menos de 3 caracteres.\n                <br></span>\n                <!-- <span *ngIf=\"!details?.pattern && details.dirty && details.touched && !details.valid && program.details != '' && program.details.length<151 && program.details.length>2 \" class=\"text-alert\">\n                *Detalle de Programa inválido, use .,-¿?¡! no se permiten otros símbolos.\n                </span> -->\n            </div>\n            <div class=\"form-group col-sm-8\" style=\"text-align:center\">\n              <button  type=\"submit\" class=\"btn btn-success\" [disabled]=\"!updateProgram.form.valid\">Guardar</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">Cancelar</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/programa/edit-programa/edit-programa.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/programa/edit-programa/edit-programa.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProgramaComponent", function() { return EditProgramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProgramaComponent = /** @class */ (function () {
    function EditProgramaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    EditProgramaComponent.prototype.ngOnInit = function () {
        this.queryProgramId();
        this.findProgram();
    };
    EditProgramaComponent.prototype.queryProgramId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
        });
    };
    EditProgramaComponent.prototype.findProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (result) {
            _this.program = result;
            _this.programName = _this.program.name;
            _this.programDetails = _this.program.details;
            //console.log(this.program.name)
            //console.log(this.program.details)
        }, function (error) {
            console.log(error);
        });
    };
    EditProgramaComponent.prototype.saveProgram = function () {
        var _this = this;
        // this.program.name = this.nameRef.nativeElement.value;
        // this.program.details = this.detailsRef.nativeElement.value;
        this.program.name = this.programName;
        this.program.details = this.programDetails;
        // if (this.nameRef.nativeElement.value == '' || this.detailsRef.nativeElement.value == '') {
        //    window.alert("Asegurese que todos los campos esten llenados");
        if (this.programName == '' || this.programDetails == '') {
            window.alert("Asegurese que todos los campos esten llenados");
        }
        else {
            console.log(this.program);
            this._peticionesService.updateProgram(this.program).subscribe(function (result) {
                console.log(result);
                var res = result;
                alert('Se guardó correctamente la edición');
                _this.router.navigate(['home/programs']);
                //    window.history.back();          
            }, function (error) {
                console.log(error);
                alert('Error al guardar verifique los datos');
            });
        }
    };
    EditProgramaComponent.prototype.cancel = function () {
        // this.router.navigate(['home/programs']);
        window.history.back();
    };
    EditProgramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-programa',
            template: __webpack_require__(/*! ./edit-programa.component.html */ "./src/app/programa/edit-programa/edit-programa.component.html"),
            styles: [__webpack_require__(/*! ./edit-programa.component.css */ "./src/app/programa/edit-programa/edit-programa.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EditProgramaComponent);
    return EditProgramaComponent;
}());



/***/ }),

/***/ "./src/app/programa/programa.component.css":
/*!*************************************************!*\
  !*** ./src/app/programa/programa.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programa/programa.component.html":
/*!**************************************************!*\
  !*** ./src/app/programa/programa.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>\n      Programas\n      <small>Vigentes</small>\n    </h1>\n  </section>\n  <section class=\"content\">\n    <a class=\"btn btn-primary a\" (click)=\"addProgram()\">\n      <i class=\"fa fa-book\"></i> Registrar Programa</a>\n\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Nombre</th>\n          <th>Detalles</th>\n          <th>Módulos</th>\n          <th colspan=\"3\">Ajustes</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let program of programs\">\n          <td>{{ program.name }}</td>\n          <td>{{ program.description }}</td>\n          <td>\n            <a class=\"btn btn-info\" (click)=\"send(program._id)\">VER MÓDULOS</a>\n          </td>\n          <td>\n            <a class=\"btn btn-warning\" (click)=\"editProgram(program._id)\">EDITAR</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n  </section>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/programa/programa.component.ts":
/*!************************************************!*\
  !*** ./src/app/programa/programa.component.ts ***!
  \************************************************/
/*! exports provided: ProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaComponent", function() { return ProgramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Identity } from '../services/global';
var ProgramaComponent = /** @class */ (function () {
    function ProgramaComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
    }
    ProgramaComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.queryRol();
        this._peticionesService.getPrograms().subscribe(function (result) {
            _this.programs = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    // send(_id:string) {
    //   this.router.navigate(['home/modulos', _id]);
    // }
    ProgramaComponent.prototype.editProgram = function (_id) {
        this.router.navigate(['/home/programas/edit', _id]);
    };
    ProgramaComponent.prototype.addProgram = function () {
        this.router.navigate(['/home/programas/add']);
    };
    ProgramaComponent.prototype.queryRol = function () {
        var _this = this;
        //console.log(Identity.rol)
        this._peticionesService.getRole(_services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].rol).subscribe(function (result) {
            _this.role = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    ProgramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programa',
            template: __webpack_require__(/*! ./programa.component.html */ "./src/app/programa/programa.component.html"),
            styles: [__webpack_require__(/*! ./programa.component.css */ "./src/app/programa/programa.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], ProgramaComponent);
    return ProgramaComponent;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL, Identity, Roles, CarteraS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteraS", function() { return CarteraS; });
var GLOBAL = {
    url: 'http://localhost:3000/'
};
// export var LogIn = {
//    token: ''
// }
var Identity = {
    _id: '',
    name: '',
    active: null,
    password_hash: '',
    rol: '',
};
var Roles = [
    {
        _id: '5aea1b1f60896154cd282fb4',
        name: 'Admin'
    },
    {
        _id: '5aea1b1f60896154cd282fb5',
        name: 'Ejecutivo'
    },
    {
        _id: '5aea36445f00ed76e827868b',
        name: 'Gerente'
    }
];
var CarteraS = {
    name: '',
    user: ''
};


/***/ }),

/***/ "./src/app/services/persona.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/persona.service.ts ***!
  \*********************************************/
/*! exports provided: PersonaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaService", function() { return PersonaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PersonaService = /** @class */ (function () {
    function PersonaService() {
        this.nombre_persona = 'nombre de la persona';
    }
    PersonaService.prototype.prueba = function (nombre_persona) {
        return nombre_persona;
    };
    PersonaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PersonaService);
    return PersonaService;
}());



/***/ }),

/***/ "./src/app/services/peticiones.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/peticiones.service.ts ***!
  \************************************************/
/*! exports provided: PeticionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionesService", function() { return PeticionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeticionesService = /** @class */ (function () {
    function PeticionesService(
    // private _httpClient: HttpClient,
    _http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
        // this.url = "https://jsonplaceholder.typicode.com/users";
    }
    PeticionesService.prototype.getInicio = function () {
        return this._http.get(this.url + 'pages');
    };
    PeticionesService.prototype.putInicio = function (inicio, id) {
        var body = JSON.stringify(inicio);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/inicio/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putInicioF = function (fileToUpload, inicio, id) {
        var endpoint = this.url + 'pages/home/inicioF/' + id;
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        formData.append('body', JSON.stringify({ inicio: inicio }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putService = function (services, id) {
        var body = JSON.stringify(services);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/services/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putOur = function (our, id) {
        var body = JSON.stringify(our);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/our/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putOurF = function (fileToUpload, our, id) {
        var endpoint = this.url + 'pages/home/ourF/' + id;
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        formData.append('body', JSON.stringify({ our: our }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putTeam = function (team, id) {
        var body = JSON.stringify(team);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/team/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putTeamF = function (filesToUpload, team, id) {
        var endpoint = this.url + 'pages/home/teamF/' + id;
        var formData = new FormData();
        // formData.append('fileKey', filesToUpload[0], filesToUpload[0].name);
        // for (const file: fileObj in filesToUpload) {
        var fn = [];
        for (var i = 0; i < filesToUpload.length; i++) {
            fn.push(filesToUpload[i].id);
            formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
        }
        // }
        formData.append('body', JSON.stringify({ team: team, fileName: fn }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putGalery = function (galery, id) {
        var body = JSON.stringify(galery);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/galery/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putGaleryF = function (filesToUpload, galery, id) {
        var endpoint = this.url + 'pages/home/galeryF/' + id;
        var formData = new FormData();
        var fn = [];
        for (var i = 0; i < filesToUpload.length; i++) {
            fn.push(filesToUpload[i].id);
            formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
        }
        formData.append('body', JSON.stringify({ galery: galery, fileName: fn }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putClients = function (clients, id) {
        var body = JSON.stringify(clients);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/home/Clients/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putClientsF = function (filesToUpload, clients, id) {
        var endpoint = this.url + 'pages/home/clientsF/' + id;
        var formData = new FormData();
        var fn = [];
        for (var i = 0; i < filesToUpload.length; i++) {
            fn.push(filesToUpload[i].id);
            formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
        }
        formData.append('body', JSON.stringify({ clients: clients, fileName: fn }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putSomosInicio = function (inicio, id) {
        var body = JSON.stringify(inicio);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/somos/inicio/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putSomosInicioF = function (fileToUpload, inicio, id) {
        var endpoint = this.url + 'pages/somos/inicioF/' + id;
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        formData.append('body', JSON.stringify({ inicio: inicio }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putVersion = function (version, id) {
        var body = JSON.stringify(version);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/somos/version/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putInteresInicio = function (inicio, id) {
        var body = JSON.stringify(inicio);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/interes/inicio/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putInteresInicioF = function (fileToUpload, inicio, id) {
        var endpoint = this.url + 'pages/interes/inicioF/' + id;
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        formData.append('body', JSON.stringify({ inicio: inicio }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.putInteresList = function (list, id) {
        var body = JSON.stringify(list);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/interes/list/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.putInteresListF = function (filesToUpload, list, id) {
        var endpoint = this.url + 'pages/home/listF/' + id;
        var formData = new FormData();
        var fn = [];
        for (var i = 0; i < filesToUpload.length; i++) {
            fn.push(filesToUpload[i].id);
            formData.append(filesToUpload[i].id, filesToUpload[i].file, filesToUpload[i].file.name);
        }
        formData.append('body', JSON.stringify({ list: list, fileName: fn }));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        return this._http
            .put(endpoint, formData, { headers: headers });
    };
    PeticionesService.prototype.getCatEgresos = function () {
        return this._http.get(this.url + 'categoriaEgresos');
    };
    PeticionesService.prototype.getEvents = function () {
        return this._http.get(this.url + 'events');
    };
    PeticionesService.prototype.getTalleres = function () {
        return this._http.get(this.url + 'workshops');
    };
    PeticionesService.prototype.getConsultorias = function () {
        return this._http.get(this.url + 'consults');
    };
    PeticionesService.prototype.getEvent = function (id) {
        return this._http.get(this.url + 'events/' + id);
    };
    PeticionesService.prototype.addProgram = function (program) {
        var body = JSON.stringify(program);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'programs/add', body, { headers: headers });
    };
    PeticionesService.prototype.getPrograms = function () {
        return this._http.get(this.url + 'programs');
    };
    PeticionesService.prototype.getProgram = function (_id) {
        return this._http.get(this.url + 'programs/' + _id);
    };
    PeticionesService.prototype.addModulo = function (modulo) {
        var body = JSON.stringify(modulo);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'modules/add', body, { headers: headers });
    };
    PeticionesService.prototype.getModulos = function (idProgram) {
        console.log(idProgram);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'modules/lista/' + idProgram, { headers: headers });
    };
    PeticionesService.prototype.getEventModuls = function (eventId) {
        console.log(eventId);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'modules/eventoModuls/' + eventId, { headers: headers });
    };
    PeticionesService.prototype.getModulo = function (_id) {
        return this._http.get(this.url + 'modules/' + _id);
    };
    PeticionesService.prototype.addEvent = function (event) {
        var body = JSON.stringify(event);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'events', body, { headers: headers });
    };
    PeticionesService.prototype.addPerson = function (person) {
        var body = JSON.stringify(person);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'persons', body, { headers: headers });
    };
    PeticionesService.prototype.getPersons = function () {
        return this._http.get(this.url + 'persons');
    };
    PeticionesService.prototype.getFacilitadores = function () {
        return this._http.get(this.url + 'facilitators');
    };
    PeticionesService.prototype.getFacilitador = function (id) {
        return this._http.get(this.url + 'facilitators/' + id);
    };
    PeticionesService.prototype.addFacilitador = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'facilitators/register', body, { headers: headers });
    };
    PeticionesService.prototype.updateFacilitador = function (facilitador_object) {
        console.log(facilitador_object);
        var body = JSON.stringify(facilitador_object);
        var idfacilitador = facilitador_object._id;
        // console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'facilitators/update/' + idfacilitador, body, { headers: headers });
    };
    PeticionesService.prototype.getRole = function (id) {
        return this._http.get(this.url + 'users/rolName/' + id);
    };
    PeticionesService.prototype.updateUser = function (user_object) {
        console.log(user_object);
        var body = JSON.stringify(user_object);
        var idUser = user_object._id;
        //console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'users/' + idUser, body, { headers: headers });
    };
    PeticionesService.prototype.updateProgram = function (program_object) {
        //   console.log(program_object, 'test');
        var body = JSON.stringify(program_object);
        var idProgram = program_object._id;
        // console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'programs/edit/' + idProgram, body, { headers: headers });
    };
    PeticionesService.prototype.updateModulo = function (modulo_object) {
        console.log(modulo_object);
        var body = JSON.stringify(modulo_object);
        var idModulo = modulo_object._id;
        // console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'modules/edit/' + idModulo, body, { headers: headers });
    };
    PeticionesService.prototype.getSucursales = function () {
        return this._http.get(this.url + 'offices');
    };
    PeticionesService.prototype.getSucursal = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'offices/' + id, { headers: headers });
    };
    PeticionesService.prototype.getRoles = function () {
        return this._http.get(this.url + 'roles');
    };
    // postFile(fileToUpload: File): Observable<boolean> {
    //   const endpoint = this.url + 'persons/upload';
    //   // const endpoint = this.url + 'importFromExcel/upload';
    //   const formData: FormData = new FormData();
    //   formData.append('fileKey', fileToUpload, fileToUpload.name);
    //   let headers = new HttpHeaders();
    //   /** In Angular 5, including the header Content-Type can invalidate your request */
    //   headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json');
    //   // let options = new RequestOptions({ headers: headers });
    //   return this._http
    //     .post(endpoint, formData, { headers: headers })
    //   // .catch((e) => Observable.throw(e))
    //   // .subscribe();
    // }
    PeticionesService.prototype.getModulars = function (eventId) {
        console.log(eventId);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'events/getModulars/' + eventId, { headers: headers });
    };
    PeticionesService.prototype.addNewTaller = function (taller) {
        var body = JSON.stringify(taller);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'events/addNewTaller/', body, { headers: headers });
    };
    // getEventTallerInscriptions(event){
    //   let body = JSON.stringify(event);	
    //   console.log(body);
    //   var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');		
    //   return this._http.post(this.url + 'events/getEventTallerInscriptions/', body, { headers: headers });		
    // }
    PeticionesService.prototype.getEventTallerInscriptions = function (id) {
        return this._http.get(this.url + 'events/getEventTallerInscriptions/' + id);
    };
    /////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    PeticionesService.prototype.updateInicio_programs = function (page, id) {
        var body = JSON.stringify(page);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/programs/inicio/' + id, body, { headers: headers });
    };
    // addProgramWithFile(fileToUpload: File, program): Observable<Object> {
    //   const endpoint = this.url + 'programs/addProgramWithFile';
    //   const formData: FormData = new FormData();
    //   formData.append('fileKey', fileToUpload, fileToUpload.name);
    //   formData.append('body', JSON.stringify({ program: program }));
    //   let headers = new HttpHeaders();
    //   /** In Angular 5, including the header Content-Type can invalidate your request */
    //   headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json');
    //   return this._http
    //     .post(endpoint, formData, { headers: headers })
    // }
    PeticionesService.prototype.addBenefitToProgram = function (programId, benefit) {
        var body = JSON.stringify(benefit);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'programs/addBenefitToProgram/' + programId, body, { headers: headers });
    };
    PeticionesService.prototype.updateInicio_talleres = function (page, id) {
        var body = JSON.stringify(page);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/taller/inicio/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.addTaller = function (taller) {
        var body = JSON.stringify(taller);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'workshops/addTaller', body, { headers: headers });
    };
    PeticionesService.prototype.getTaller = function (_id) {
        return this._http.get(this.url + 'workshops/' + _id);
    };
    PeticionesService.prototype.updateTaller = function (taller) {
        //   console.log(program_object, 'test');
        var body = JSON.stringify(taller);
        var idTaller = taller._id;
        // console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'workshops/edit/' + idTaller, body, { headers: headers });
    };
    PeticionesService.prototype.addBenefitToTaller = function (TallerId, benefit) {
        var body = JSON.stringify(benefit);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'workshops/addBenefitToTaller/' + TallerId, body, { headers: headers });
    };
    PeticionesService.prototype.updateInicio_consultoria = function (page, id) {
        var body = JSON.stringify(page);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'pages/consultoria/inicio/' + id, body, { headers: headers });
    };
    PeticionesService.prototype.addConsultoria = function (consultoria) {
        var body = JSON.stringify(consultoria);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'consults/addConsultoria', body, { headers: headers });
    };
    PeticionesService.prototype.getConsultoria = function (idConsultoria) {
        return this._http.get(this.url + 'consults/' + idConsultoria);
    };
    PeticionesService.prototype.updateConsultoria = function (consul) {
        var body = JSON.stringify(consul);
        var idConsul = consul._id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'consults/updateConsultoria/' + idConsul, body, { headers: headers });
    };
    PeticionesService.prototype.addAlcanceToConsultoria = function (consultoriaId, alcanceObject) {
        var body = JSON.stringify(alcanceObject);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'consults/addAlcanceToConsultoria/' + consultoriaId, body, { headers: headers });
    };
    PeticionesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/services/sucursal.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sucursal.service.ts ***!
  \**********************************************/
/*! exports provided: SucursalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalService", function() { return SucursalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';

//import { Router } from '@angular/router';
//import { AsyncLocalStorage } from 'angular-async-local-storage';
var SucursalService = /** @class */ (function () {
    function SucursalService(
    //private _router: Router,
    //protected localStorage: AsyncLocalStorage,
    _http) {
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
    }
    SucursalService.prototype.getSucursales = function () {
        return this._http.get(this.url + 'offices');
    };
    SucursalService.prototype.getSucursal = function (id) {
        return this._http.get(this.url + 'offices/' + id);
    };
    SucursalService.prototype.addOffice = function (office) {
        var body = JSON.stringify(office);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'offices/add', body, { headers: headers });
    };
    SucursalService.prototype.editOffice = function (office) {
        var body = JSON.stringify(office);
        console.log(body);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.put(this.url + 'offices', body, { headers: headers });
    };
    SucursalService.prototype.getCompanys = function () {
        return this._http.get(this.url + 'company');
    };
    SucursalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SucursalService);
    return SucursalService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/local-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';



var UserService = /** @class */ (function () {
    function UserService(_router, 
    // protected localStorage: AsyncLocalStorage,
    localStorage, _http) {
        this._router = _router;
        this.localStorage = localStorage;
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].url;
    }
    UserService.prototype.register = function () {
        return "texto desde el servicio usuario";
    };
    //metodo para autenticar el usuario
    UserService.prototype.signup = function (user_to_login, gettoken) {
        if (gettoken === void 0) { gettoken = null; }
        if (gettoken != null) {
            user_to_login.gettoken = gettoken;
        }
        var params = JSON.stringify(user_to_login);
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'login', params, { headers: headers });
    };
    UserService.prototype.getNombre = function (password) {
        return this._http.get(this.url + 'users/password' + password);
    };
    UserService.prototype.getPassword = function (name) {
        return this._http.get(this.url + 'users/name' + name);
    };
    UserService.prototype.getUser = function (_id) {
        return this._http.get(this.url + 'users/' + _id);
    };
    UserService.prototype.signin = function (user_to_login) {
        var body = JSON.stringify(user_to_login); //get interface
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'users/login', body, { headers: headers });
    };
    UserService.prototype.initApp = function () {
        this._http.get(this.url + 'users/roles');
        this.localStorage.getItem('Identity').subscribe(function (data) {
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/somos/somos.component.css":
/*!*******************************************!*\
  !*** ./src/app/somos/somos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/somos/somos.component.html":
/*!********************************************!*\
  !*** ./src/app/somos/somos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- inicio -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Incio</h1>\n        <form (ngSubmit)=\"saveInicio()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Imagen</label>\n            <input type=\"file\" name=\"myImage\" accept=\".jpg, .jpeg\" (change)=\"handleFileInput($event.target.files)\" />\n          </div>\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Linea</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"line1\" [(ngModel)]=\"page.inicio.line\" name=\"line1\" #line1=\"ngModel\" required />\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- Version -->\n  <div class=\"content\">\n    <div class=\"box box-primary\">\n      <div class=\"container \">\n        <h1>Version</h1>\n        <form (ngSubmit)=\"saveVersion()\" #inicio=\"ngForm\" class=\"\">\n          <div class=\"form-group col-sm-8\">\n            <label for=\"name\" class=\"control-label\">Titulo</label>\n            <!-- pattern=\"[a-zA-Z]{3,20}[ ]{0,1}[a-zA-Z]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\" -->\n            <input type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"tittle\" [(ngModel)]=\"page.version.tittle\" name=\"tittle\" #tittle=\"ngModel\" required />\n          </div>\n          <!-- <div *ngFor=\"let service of page.version.services\"> -->\n          <div class=\"form-group col-sm-8\" *ngFor=\"let key of page.version.mision | objKey\">\n            <label *ngIf=\"key != '_id' && key != 'photo'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n            <input *ngIf=\"key != '_id' && key != 'photo'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"{{page.version.mision[key]}}\" [(ngModel)]=\"page.version.mision[key]\" name=\"{{page.version.mision[key]}}\" #name=\"ngModel\"\n              required />\n          </div>\n          <div class=\"form-group col-sm-8\" *ngFor=\"let key of page.version.vision | objKey\">\n            <label *ngIf=\"key != '_id' && key != 'photo'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n            <input *ngIf=\"key != '_id' && key != 'photo'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"{{page.version.vision[key]}}\" [(ngModel)]=\"page.version.vision[key]\" name=\"{{page.version.vision[key]}}\" #name=\"ngModel\"\n              required />\n          </div>\n          <div class=\"form-group col-sm-8\" *ngFor=\"let key of page.version.valores | objKey\">\n            <label *ngIf=\"key != '_id' && key != 'photo'\" for=\"name\" class=\"control-label\"> {{key}}</label>\n            <input *ngIf=\"key != '_id' && key != 'photo'\" type=\"text\" pattern=\"[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{3,20}[ ]{0,1}[a-zA-ZÑ-ñÁ-áÉ-éÍ-íÓ-óÚ-ú0-9]{0,20}[ ]{0,1}[a-zA-Z]{0,20}\"\n              class=\"form-control\" id=\"{{page.version.valores[key]}}\" [(ngModel)]=\"page.version.valores[key]\" name=\"{{page.version.valores[key]}}\" #name=\"ngModel\"\n              required />\n          </div>\n          <!-- </div> -->\n          <button type=\"submit\" class=\"btn btn-success\">Guardar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/somos/somos.component.ts":
/*!******************************************!*\
  !*** ./src/app/somos/somos.component.ts ***!
  \******************************************/
/*! exports provided: SomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomosComponent", function() { return SomosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SomosComponent = /** @class */ (function () {
    function SomosComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    SomosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getInicio().subscribe(function (res) {
            _this.page = res[0].somos;
            _this.id = res[0]._id;
        });
    };
    SomosComponent.prototype.handleFileInput = function (files) {
        this.file = files.item(0);
    };
    SomosComponent.prototype.saveInicio = function () {
        if (this.file == undefined) {
            this._peticionesService.putSomosInicio(this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
        else {
            this._peticionesService.putSomosInicioF(this.file, this.page.inicio, this.id).subscribe(function (res) {
                alert('Guardado Exitosamente');
            }, function (error) {
                var errorMessage = error;
                console.log(errorMessage);
            });
        }
    };
    SomosComponent.prototype.saveVersion = function () {
        this._peticionesService.putVersion(this.page.version, this.id).subscribe(function (res) {
            alert('Guardado Exitosamente');
        }, function (err) {
            var errorMessage = err;
            console.log(errorMessage);
        });
    };
    SomosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-somos',
            template: __webpack_require__(/*! ./somos.component.html */ "./src/app/somos/somos.component.html"),
            styles: [__webpack_require__(/*! ./somos.component.css */ "./src/app/somos/somos.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], SomosComponent);
    return SomosComponent;
}());



/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sucursal/addSucursal/addsucursal.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/sucursal/addSucursal/addsucursal.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n    <div class=\"\">\n        <div class=\"box box-primary\">\n\n            <div class=\"container \">\n                <div >\n                    <h1>Registrar Sucursal</h1>\n                    <br>\n                    <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" class=\"jumbotron\">\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"name\" class=\"control-label\">Nombre de Sucursal</label>\n                            <input type=\"text\" pattern=\"[a-zA-Z]{3,10}[ ]{0,1}[a-zA-Z]{0,10}\" class=\"form-control\" id=\"name\" [(ngModel)]=\"office.name\"\n                                name=\"name\" #name=\"ngModel\" required />\n                            <span *ngIf=\"!name.valid && name.touched\" class=\"text-alert\">\n                                *Nombre de Sucursal requerido.\n                            </span>\n                            <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                            kjkn\n                        </div>-->\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Ubicación</label>\n                            <input type=\"text\" pattern=\"[a-zA-Z0-9#]{4,20}([ ]{0,1}[a-zA-Z0-9#]{0,20}){0,2}\" class=\"form-control\" id=\"ubicacion\" [(ngModel)]=\"office.ubicacion\"\n                                name=\"ubicacion\" #ubicacion=\"ngModel\" required>\n                            <span *ngIf=\"!ubicacion.valid && ubicacion.touched\" class=\"text-alert\">\n                                *Ubicación de Sucursal invalido.\n                            </span>\n                            <!--<div [hidden]=\"ubicacion?.valid || ubicacion?.pristine\" class=\"\">\n                                Ubicacion requerida\n                            </div>-->\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Telefonos</label>\n                            <input type=\"text\" class=\"form-control\" id=\"phones\" [(ngModel)]=\"office.phones\" name=\"phones\" #phones=\"ngModel\" required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Latitud</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lat\" [(ngModel)]=\"office.lat\" name=\"lat\" #lat=\"ngModel\" required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Longitud</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lng\" [(ngModel)]=\"office.lng\" name=\"lng\" #lng=\"ngModel\" required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"departament\">Departamento</label>\n                            <select class=\"form-control\" id=\"departament\" [(ngModel)]=\"office.departament\" name=\"departament\" #departament=\"ngModel\"\n                                required>\n                                <option value=\"Cochabamba\">Cochabamba</option>\n                                <option value=\"La Paz\">La Paz</option>\n                                <option value=\"Santa Cruz\">Santa Cruz</option>\n                            </select>\n                            <!-- <input type=\"text\" class=\"form-control\" id=\"departament\" required\n                                [(ngModel)]=\"office.departament\" name=\"departament\" #departament=\"ngModel\" > -->\n                            <span *ngIf=\"!departament.valid && departament.touched\" class=\"text-alert\">\n                                *Departamento de Sucursal requerido.\n                            </span>\n                            <!--<div [hidden]=\"departament?.valid || departament?.pristine\" class=\"\">\n                               *Departamento requeridos\n                            </div>-->\n                        </div>\n                        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\">Guardar</button>\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sucursal/addSucursal/addsucursal.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sucursal/addSucursal/addsucursal.component.ts ***!
  \***************************************************************/
/*! exports provided: AddSucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSucursalComponent", function() { return AddSucursalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_offices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/offices */ "./src/app/modelo/offices.ts");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sucursal.service */ "./src/app/services/sucursal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSucursalComponent = /** @class */ (function () {
    function AddSucursalComponent(_peticionSucursalService, route, router) {
        this._peticionSucursalService = _peticionSucursalService;
        this.route = route;
        this.router = router;
        this.office = new _modelo_offices__WEBPACK_IMPORTED_MODULE_1__["Offices"]('', '', null, '', ''); //name,ubicacion,caja,departament,company_id
    }
    AddSucursalComponent.prototype.ngOnInit = function () {
        this.queryCompany();
    };
    AddSucursalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.office.company_id = this.companys[0]._id;
        console.log(this.office);
        this._peticionSucursalService.addOffice(this.office).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            // this.router.navigate(['home/event', this.eventId]);
            alert('Se Creo correctamente la Sucursal');
            _this.router.navigate(['home/sucursales']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al Crear Sucursal verifique los datos');
        });
    };
    AddSucursalComponent.prototype.queryCompany = function () {
        var _this = this;
        this._peticionSucursalService.getCompanys().subscribe(function (result) {
            _this.companys = result;
            console.log(_this.companys);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('No existe compañia');
        });
    };
    AddSucursalComponent.prototype.cancelar = function () {
        this.router.navigate(['home/sucursales']);
    };
    AddSucursalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addsucursal',
            template: __webpack_require__(/*! ./addsucursal.component.html */ "./src/app/sucursal/addSucursal/addsucursal.component.html"),
            styles: [__webpack_require__(/*! ./addsucursal.component.css */ "./src/app/sucursal/addSucursal/addsucursal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__["SucursalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSucursalComponent);
    return AddSucursalComponent;
}());



/***/ }),

/***/ "./src/app/sucursal/editSucursal/editsucursal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sucursal/editSucursal/editsucursal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n  \n.text-alert{\n    color:#dd4b39;\n}"

/***/ }),

/***/ "./src/app/sucursal/editSucursal/editsucursal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/sucursal/editSucursal/editsucursal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <br>\n    <div class=\"\">\n        <div class=\"box box-primary\">\n\n            <div class=\"container \">\n                <div >\n                    <h1>Editar Sucursal</h1>\n                    <br>\n                    <form (ngSubmit)=\"onSubmit()\" #addEjecutivo=\"ngForm\" class=\"jumbotron\">\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"name\" class=\"control-label\">Nombre de Sucursal</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"office.name\" name=\"name\" #name=\"ngModel\" required />\n                            <!--<div [hidden]=\"name?.valid || name?.pristine\" class=\"text-alert\">\n                            kjkn\n                        </div>-->\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Ubicación</label>\n                            <input type=\"text\" class=\"form-control\" id=\"ubicacion\" [(ngModel)]=\"office.ubicacion\" name=\"ubicacion\" #ubicacion=\"ngModel\"\n                                required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Telefonos</label>\n                            <input type=\"text\" class=\"form-control\" id=\"phones\" [(ngModel)]=\"office.phones\" name=\"phones\" #phones=\"ngModel\"\n                                required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Latitud</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lat\" [(ngModel)]=\"office.lat\" name=\"lat\" #lat=\"ngModel\"\n                                required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"ubicacion\" class=\" control-label\">Longitud</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lng\" [(ngModel)]=\"office.lng\" name=\"lng\" #lng=\"ngModel\"\n                                required>\n                        </div>\n                        <div class=\"form-group col-sm-8\">\n                            <label for=\"departament\">Departamento</label>\n                            <input type=\"text\" disabled class=\"form-control\" id=\"department\" [(ngModel)]=\"office.departament\" name=\"department\" #department=\"ngModel\"\n                                required>\n                        </div>\n                        <div class=\"form-group col-sm-8\" style=\"text-align:center \">\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addEjecutivo.form.valid\">Guardar</button>\n                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelar()\">Cancelar</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sucursal/editSucursal/editsucursal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sucursal/editSucursal/editsucursal.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditSucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSucursalComponent", function() { return EditSucursalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modelo_offices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modelo/offices */ "./src/app/modelo/offices.ts");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sucursal.service */ "./src/app/services/sucursal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditSucursalComponent = /** @class */ (function () {
    function EditSucursalComponent(_peticionSucursalService, route, router) {
        this._peticionSucursalService = _peticionSucursalService;
        this.route = route;
        this.router = router;
        this.office = new _modelo_offices__WEBPACK_IMPORTED_MODULE_1__["Offices"]('', '', null, '', null); //name,ubicacion,caja,departament,company_id
    }
    EditSucursalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.officeId = params.id;
            // console.log(this.eventId)
            // this.queryRol();
        });
        this.queryCompany();
    };
    EditSucursalComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.office);
        this._peticionSucursalService.editOffice(this.office).subscribe(function (result) {
            var esperado = result;
            // console.log(esperado);
            // this.router.navigate(['home/event', this.eventId]);
            alert('Se Creo correctamente la Sucursal');
            _this.router.navigate(['home/sucursal']);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error al Crear Sucursal verifique los datos');
        });
    };
    EditSucursalComponent.prototype.queryCompany = function () {
        var _this = this;
        this._peticionSucursalService.getSucursal(this.officeId).subscribe(function (result) {
            _this.office = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('No existe compañia');
        });
    };
    EditSucursalComponent.prototype.cancelar = function () {
        this.router.navigate(['home/sucursales']);
    };
    EditSucursalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editsucursal',
            template: __webpack_require__(/*! ./editsucursal.component.html */ "./src/app/sucursal/editSucursal/editsucursal.component.html"),
            styles: [__webpack_require__(/*! ./editsucursal.component.css */ "./src/app/sucursal/editSucursal/editsucursal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sucursal_service__WEBPACK_IMPORTED_MODULE_2__["SucursalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditSucursalComponent);
    return EditSucursalComponent;
}());



/***/ }),

/***/ "./src/app/sucursal/sucursal.component.css":
/*!*************************************************!*\
  !*** ./src/app/sucursal/sucursal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sucursal/sucursal.component.html":
/*!**************************************************!*\
  !*** ./src/app/sucursal/sucursal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  \n  <section class=\"content-header\">\n     <h1>\n       Sucursales\n        <small> Cecap</small>\n     </h1>\n     <div>     \n      <ol class=\"breadcrumb\" >\n          <li *ngIf='(role?.name==\"Admin\")||(role?.name==\"Gerente\")'><a class=\"btn btn-primary fa fa-book\" [routerLink]=\"['/home/sucursales/add']\"><i class=\"fa fa-book\"></i>Registrar Sucursal</a></li>\n         \n      </ol>\n    </div> \n  </section>\n  <section class=\"content h\">\n     <table class=\"table table-hover\">\n        <thead>\n           <tr class=\"text-info cabecera hover\">\n              <th><h4 class=\"text-center font-family-serif\"><strong>Nombre de Sucursal</strong> </h4></th>\n              <th><h4 class=\"text-center\"><strong>Telefonos</strong></h4></th>\n              <th><h4 class=\"text-center\"><strong>Dirección</strong></h4></th>\n           </tr>\n        </thead>\n\n        <tbody>\n\n           <tr *ngFor=\"let i of sucursales\" class=\"bg-info text-center\">\n              <td> {{i.name}}</td>\n              <td>{{i.phones}}</td>\n              <td>{{i.ubicacion}}</td>\n              <!-- <td>{{i.caja}}</td> -->\n              <td>\n                 <a class=\"btn btn-warning\" (click)=\"sendEdit(i._id)\">Editar</a>\n              </td>\n           </tr>\n        </tbody>\n     </table>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/sucursal/sucursal.component.ts":
/*!************************************************!*\
  !*** ./src/app/sucursal/sucursal.component.ts ***!
  \************************************************/
/*! exports provided: SucursalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SucursalComponent", function() { return SucursalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sucursal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sucursal.service */ "./src/app/services/sucursal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SucursalComponent = /** @class */ (function () {
    function SucursalComponent(_peticionesService, _peticionSucursalService, route, router) {
        this._peticionesService = _peticionesService;
        this._peticionSucursalService = _peticionSucursalService;
        this.route = route;
        this.router = router;
    }
    SucursalComponent.prototype.ngOnInit = function () {
        this.queryRol();
        this.querySucursales();
    };
    SucursalComponent.prototype.sendEdit = function (id) {
        this.router.navigate(['/home/sucursales/edit/', id]);
    };
    SucursalComponent.prototype.querySucursales = function () {
        var _this = this;
        this._peticionSucursalService.getSucursales().subscribe(function (result) {
            _this.sucursales = result;
            console.log(_this.sucursales);
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            alert('Error ');
        });
    };
    SucursalComponent.prototype.verSucursal = function (id) {
        //console.log("facilitadorComponent");
        this.router.navigate(['/home/sucursal/detalleCaja/', id]);
    };
    SucursalComponent.prototype.queryRol = function () {
        var _this = this;
        //console.log(Identity.rol)
        this._peticionesService.getRole(_services_global__WEBPACK_IMPORTED_MODULE_3__["Identity"].rol).subscribe(function (result) {
            _this.role = result;
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
        });
    };
    SucursalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sucursal',
            template: __webpack_require__(/*! ./sucursal.component.html */ "./src/app/sucursal/sucursal.component.html"),
            styles: [__webpack_require__(/*! ./sucursal.component.css */ "./src/app/sucursal/sucursal.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_4__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_4__["PeticionesService"],
            _services_sucursal_service__WEBPACK_IMPORTED_MODULE_1__["SucursalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SucursalComponent);
    return SucursalComponent;
}());



/***/ }),

/***/ "./src/app/workshop/workshop.component.css":
/*!*************************************************!*\
  !*** ./src/app/workshop/workshop.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workshop/workshop.component.html":
/*!**************************************************!*\
  !*** ./src/app/workshop/workshop.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n      <section class=\"content\">\n            <div>\n                  <ol class=\"breadcrumb\">\n                        <h1>Taller</h1>\n                        <li>\n                              <a class=\"btn btn-primary\" [routerLink]=\"['/home/workshop/'+event?._id]\">\n                                    <i class=\"fa fa-book\"></i> Agregar Taller</a>\n                        </li>\n                  </ol>\n            </div>\n            <table class=\"table table-hover\">\n                  <thead>\n                        <tr>\n                              <th>Nombre</th>\n                              <th>Descripcion</th>\n                              <th>Objetivo</th>\n                              <th colspan=\"3\">Ajustes</th>\n                        </tr>\n                  </thead>\n                  <tbody>\n                        <tr *ngFor=\"let w of workshops\">\n                              <td>{{ w.name }} </td>\n                              <td>{{ w.description }}</td>\n                              <td>{{ w.objective }}</td>\n                              <td>\n                                    <button class=\"btn btn-warning\" (click)=\"edit(w._id)\"> Editar</button>\n                              </td>\n                        </tr>\n                  </tbody>\n            </table>\n            <div class=\"\" style=\"text-align: center\">\n                  <button class=\"btn btn-primary\" (click)=\"cancelar()\">Volver</button>\n            </div>\n\n      </section>\n      <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/workshop/workshop.component.ts":
/*!************************************************!*\
  !*** ./src/app/workshop/workshop.component.ts ***!
  \************************************************/
/*! exports provided: WorkshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopComponent", function() { return WorkshopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkshopComponent = /** @class */ (function () {
    //////////////////////////////////////////////
    function WorkshopComponent(route, router, _peticionesService) {
        this.route = route;
        this.router = router;
        this._peticionesService = _peticionesService;
        this.lista_personasPorModulo = [];
        this.lista_personasEventoTaller = [];
        this.lista_personas = [];
    }
    WorkshopComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //       this.eventId = params.id;
        //       console.log(this.eventId)
        //       this._peticionesService.getEvent(this.eventId).subscribe(resp => {
        //             this.event = resp;
        //             this.queryModules();
        //             this.queryEventTallerInscription();
        //       });
        // });
        this.queryTaller();
    };
    WorkshopComponent.prototype.queryTaller = function () {
        var _this = this;
        this._peticionesService.getTalleres().subscribe(function (response) {
            _this.workshops = response;
            // this.lista_personas = this.lista;
            console.log(_this.workshops, response);
        });
    };
    WorkshopComponent.prototype.cancelar = function () {
        window.history.back();
    };
    WorkshopComponent.prototype.ngAfterViewInit = function () { };
    WorkshopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workshop',
            template: __webpack_require__(/*! ./workshop.component.html */ "./src/app/workshop/workshop.component.html"),
            styles: [__webpack_require__(/*! ./workshop.component.css */ "./src/app/workshop/workshop.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], WorkshopComponent);
    return WorkshopComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alvaro/practicaEmpresarial/CMR--ALVARO/cp/fe2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map