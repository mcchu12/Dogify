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

/***/ "./src/app/animations/animations.ts":
/*!******************************************!*\
  !*** ./src/app/animations/animations.ts ***!
  \******************************************/
/*! exports provided: fade, fadeInLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInLeft", function() { return fadeInLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function fade() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.hero-title', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(), { optional: true }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.main', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'transparent' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])(),
                ])),
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ]);
}
function fadeInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateX(-10%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms 50ms cubic-bezier(0.35, 0, 0.25, 1)')
        ])
    ]);
}


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], { scrollPositionRestoration: 'enabled' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_breeds_breeds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/breeds/breeds.component */ "./src/app/components/breeds/breeds.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blog-article/blog-article.component */ "./src/app/components/blog-article/blog-article.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'services', component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_1__["ServicesComponent"] },
    { path: 'breeds', component: _components_breeds_breeds_component__WEBPACK_IMPORTED_MODULE_2__["BreedsComponent"] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'article/:id', component: _components_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_4__["BlogArticleComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav \r\n    #sidenav\r\n    class=\"sidenav\"\r\n    ngClass.gt-xs=\"sidenav--gt-xs\" \r\n    mode=\"push\" \r\n    position=\"end\"\r\n    [fixedInViewport]=\"true\">\r\n\r\n    <button class=\"sidenav__btn-close\" (click)=\"sidenav.close()\">&times;</button>\r\n\r\n    <app-sidenav></app-sidenav>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <app-header (toggleEmitter)=\"sidenav.toggle()\"></app-header>\r\n    \r\n    <div class=\"page\">\r\n      \r\n      <router-outlet></router-outlet>\r\n    \r\n      <div class=\"change-orientation\">\r\n        <h3>Change to landscape mode to continue</h3>\r\n      </div>\r\n    \r\n    </div>\r\n    \r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  position: relative;\n  background-color: #FFFFFF; }\n\n.change-orientation {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: none;\n  background-color: #575656;\n  overflow-x: hidden;\n  color: #FFFFFF; }\n\n.change-orientation h3 {\n  position: relative;\n  top: 50%;\n  text-align: center;\n  color: #FFFFFF; }\n\n.sidenav {\n  padding: 2em 0; }\n\n.sidenav--gt-xs {\n  width: 450px;\n  margin-right: -1em;\n  overflow-y: scroll; }\n\n.sidenav__btn-close {\n  display: block;\n  margin-left: auto;\n  font-size: 1.777em;\n  color: rgba(61, 61, 61, 0.86); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLGtCQUFrQjtFQUNsQix5QkNSYSxFQUFBOztBRGlCZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYix5QkNaOEI7RURhOUIsa0JBQWtCO0VBQ2xCLGNDM0JhLEVBQUE7O0FEOEJmO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsY0NsQ2EsRUFBQTs7QURxQ2Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkMxQ3NDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXInO1xyXG5cclxuLy8gOmhvc3Qge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gICB0b3A6IDA7XHJcbi8vIH1cclxuXHJcbi5wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4vLyBQcm9tcHQgdXNlcnMgdG8gY2hhbmdlIHRvIGxhbmRzY2FwZSBtb2RlXHJcbi8vIG9uIHRhYmxldCBzY3JlZW4gc2l6ZSBhbmQgdXBcclxuLy8gc2luY2UgdGhlIGRlc2lnbiBkb2VzIG5vdCBsb29rIGdyZWF0IG9uXHJcbi8vIHRoaXMgcG9ydHJhaXQgb3JpZW50YWlvblxyXG5cclxuLy8gVE9ETzogSXQgY291bGQgYmUgZ3JlYXQgaWYgdGhlcmUgaXMgYSB3YXkgdG8gZm9yY2UgbGFuZHNjYXBlIG1vZGUgbGlrZSBvbiBuYXRpdmUgYXBwIFxyXG4uY2hhbmdlLW9yaWVudGF0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dGUoYmxhY2ssIGxpZ2h0KTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuLmNoYW5nZS1vcmllbnRhdGlvbiBoMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMmVtIDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LS1ndC14cyB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5zaWRlbmF2X19idG4tY2xvc2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMS43NzdlbTtcclxuICBjb2xvcjogcGFsZXR0ZShncmV5KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIkZm9udC1mYW1pbHktLXByaW1hcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xyXG4kZm9udC1mYW1pbHktLXNlY29uZGFyeTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgR2VvcmdpYSwgc2VyaWY7XHJcblxyXG4vLyBEZXNjcmlwdGl2ZSBDb2xvcnNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMzRDNEM0Q7XHJcblxyXG4vLyBDb2xvciBQYWxldHRlIE1vZGlmaWVyc1xyXG4kY29sb3ItcGFsZXR0ZXM6IChcclxuICBncmV5OiAoXHJcbiAgICB4eC1saWdodDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjc1KSxcclxuICAgIHgtbGlnaHQ6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC41KSxcclxuICAgIGxpZ2h0IDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjI5KSxcclxuICAgIGJhc2UgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjE0KSxcclxuICAgIGRhcmsgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjA0KSxcclxuICApLFxyXG4gIGJsYWNrOiAoXHJcbiAgICBsaWdodCA6IGxpZ2h0ZW4oJGJsYWNrLCAxMCUpLFxyXG4gICAgYmFzZSAgOiAkYmxhY2ssXHJcbiAgICBkYXJrICA6IGRhcmtlbigkYmxhY2ssIDEwJSlcclxuICApXHJcbik7XHJcbiJdfQ== */"

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
/* harmony import */ var _services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/sidenav-toggle.service */ "./src/app/services/sidenav-toggle.service.ts");
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
    function AppComponent(sidenavToggleService) {
        var _this = this;
        this.sidenavToggleService = sidenavToggleService;
        this.title = 'dogify';
        sidenavToggleService.sidenavToggle$.subscribe(function () {
            _this.sidenav.toggle();
        });
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_1__["SidenavToggleService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_breeds_breeds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/breeds/breeds.component */ "./src/app/components/breeds/breeds.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/container/container.component */ "./src/app/shared/components/container/container.component.ts");
/* harmony import */ var _components_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/blog-article/blog-article.component */ "./src/app/components/blog-article/blog-article.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _services_breed_classification_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/breed-classification.service */ "./src/app/services/breed-classification.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/sidenav-toggle.service */ "./src/app/services/sidenav-toggle.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_routeReuse__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/routeReuse */ "./src/app/shared/routeReuse.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Angular Materials







// Components









// Services



// Others


// FontAwesome




var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_28__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faRoute"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faBone"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faHome"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faSuitcaseRolling"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faPaw"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_29__["faArrowAltCircleRight"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__["faFacebookSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__["faGooglePlusSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__["faYoutubeSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_30__["faTwitterSquare"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _components_breeds_breeds_component__WEBPACK_IMPORTED_MODULE_16__["BreedsComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _shared_components_container_container_component__WEBPACK_IMPORTED_MODULE_19__["ContainerComponent"],
                _components_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_20__["BlogArticleComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["SidenavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FontAwesomeModule"],
            ],
            providers: [
                _services_breed_classification_service__WEBPACK_IMPORTED_MODULE_22__["BreedClassificationService"],
                _services_blog_service__WEBPACK_IMPORTED_MODULE_23__["BlogService"],
                _services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_24__["SidenavToggleService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _shared_routeReuse__WEBPACK_IMPORTED_MODULE_26__["CustomRouteReuse"] },
                { provide: 'BaseUrl', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].BaseUrl },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog-article/blog-article.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/blog-article/blog-article.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container \r\n  *ngIf=\"post\" \r\n  [isBlog]=\"true\" \r\n  [blogTitle]=\"post.title\" \r\n  [blogThumbnail]=\"BaseUrl + post.thumbnail\">\r\n\r\n    <div class=\"post__date\">{{ post.date_posted | date:\"longDate\" }}</div>\r\n\r\n    <div class=\"post__content\" [innerHTML]=\"post.content\"></div>\r\n\r\n    <div class=\"post__author\" fxFlex *ngIf=\"post.author\">\r\n      <mat-card>\r\n        <mat-list fxflex>\r\n          <mat-list-item>\r\n            <img matListAvatar src=\"{{BaseUrl + post.author.avatar}}\" alt={{post.author.name}}>\r\n            <h5 matLine>{{ post.author.name }}</h5>\r\n            <p matLine>{{ post.author.introduction }}</p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-card>\r\n    </div>\r\n\r\n    <div class=\"post__nav\">\r\n      <button mat-button [routerLink]=\"['/article', prev]\">\r\n        <fa-icon [icon]=\"icArrowLeft\"></fa-icon> Prev\r\n      </button>\r\n      <button mat-button [routerLink]=\"['/article', next]\">\r\n        Next <fa-icon [icon]=\"icArrowRight\"></fa-icon>\r\n      </button>\r\n    </div>\r\n</app-container>\r\n"

/***/ }),

/***/ "./src/app/components/blog-article/blog-article.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/blog-article/blog-article.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post__nav {\n  margin-top: 2em; }\n  .post__nav button {\n    display: block;\n    float: left; }\n  .post__nav button ~ button {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nLWFydGljbGUvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJsb2ctYXJ0aWNsZVxcYmxvZy1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lBSUksY0FBYztJQUNkLFdBQVcsRUFBQTtFQUxmO0lBU0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ibG9nLWFydGljbGUvYmxvZy1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RfX25hdiB7XHJcbiAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB+IGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/blog-article/blog-article.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog-article/blog-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlogArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogArticleComponent", function() { return BlogArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BlogArticleComponent = /** @class */ (function () {
    function BlogArticleComponent(BaseUrl, blogService, route) {
        this.BaseUrl = BaseUrl;
        this.blogService = blogService;
        this.route = route;
    }
    BlogArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getPostIds().subscribe(function (res) {
            _this.postIds = res;
            _this.getPost();
        }, function (err) { return console.log(err); });
        this.icArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowLeft"];
        this.icArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"];
    };
    BlogArticleComponent.prototype.getPost = function () {
        var _this = this;
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return _this.blogService.getPost(+params['id']);
        }))
            .subscribe(function (res) {
            _this.post = res;
            if (!res.thumbnail) {
                _this.post.thumbnail = 'static/img/default.jpg';
            }
            _this.setPrevNext(_this.post.id);
        }, function (err) { return console.log(err); });
    };
    BlogArticleComponent.prototype.setPrevNext = function (currentId) {
        var i = this.postIds.indexOf(currentId);
        this.next = this.postIds[(this.postIds.length + i - 1) % this.postIds.length];
        this.prev = this.postIds[(this.postIds.length + i + 1) % this.postIds.length];
    };
    BlogArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-article',
            template: __webpack_require__(/*! ./blog-article.component.html */ "./src/app/components/blog-article/blog-article.component.html"),
            styles: [__webpack_require__(/*! ./blog-article.component.scss */ "./src/app/components/blog-article/blog-article.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseUrl')),
        __metadata("design:paramtypes", [String,
            src_app_services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogArticleComponent);
    return BlogArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container>\r\n\r\n  <div class=\"masonry\" ngClass.gt-xs=\"masonry--gt-xs\">\r\n\r\n    <ng-container *ngIf=\"posts\">\r\n      <div #item class=\"post\" *ngFor=\"let post of posts\">\r\n        \r\n        <div class=\"post-preview\">\r\n          \r\n          <ng-container *ngIf=\"post.thumbnail\">\r\n            <div class=\"thumbnail\" *ngIf=\"post.thumbnail\">\r\n              <img src=\"{{ BaseUrl + post.thumbnail }}\" alt=\"\" (load)=\"resizeAllGridItems()\">  \r\n            </div>\r\n          </ng-container>\r\n\r\n          <div class=\"post__date\">{{ post.date_posted | date:\"longDate\" }}</div>\r\n\r\n          <h3 class=\"post__title\">{{ post.title }}</h3>\r\n          \r\n          <p>\r\n            {{ post.preview }}\r\n          </p>\r\n\r\n          <button class=\"sub-title btn--blog\" [routerLink]=\"['/article', post.id]\">\r\n            Read More\r\n            <fa-icon [icon]=\"['fas', 'arrow-alt-circle-right']\"></fa-icon>\r\n          </button>\r\n        \r\n        </div>\r\n      \r\n      </div>\r\n    </ng-container>\r\n    \r\n  </div>\r\n  \r\n</app-container>\r\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masonry--gt-xs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2em 5vw;\n  grid-auto-rows: 1em;\n  font-size: 0.85em; }\n\n.thumbnail img {\n  margin: 0 0 1em;\n  width: 100%; }\n\n.btn--blog {\n  font-size: 0.85em;\n  font-weight: 700;\n  color: #3D3D3D; }\n\n.btn--blog fa-icon {\n    transition: transform 300ms; }\n\n.btn--blog:hover fa-icon {\n    transform: translateX(50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9nL0M6XFxVc2Vyc1xcbWNjaHVcXERlc2t0b3BcXFByb2plY3RzXFxEb2dpZnlcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibG9nXFxibG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Jsb2cvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFHSSxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUlmO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQ2hCYSxFQUFBOztBRGFmO0lBTUksMkJBQTJCLEVBQUE7O0FBTi9CO0lBVUksMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcic7XHJcblxyXG4ubWFzb25yeS0tZ3QteHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAyZW0gNXZ3O1xyXG4gIGdyaWQtYXV0by1yb3dzOiAxZW07XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuXHJcbi50aHVtYm5haWwge1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLS1ibG9nIHtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAkYmxhY2s7XHJcblxyXG4gIGZhLWljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciBmYS1pY29uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpOyAgXHJcbiAgfVxyXG59IiwiJGZvbnQtZmFtaWx5LS1wcmltYXJ5OiAnTGlicmUgQmFza2VydmlsbGUnLCBHZW9yZ2lhLCBzZXJpZjtcclxuJGZvbnQtZmFtaWx5LS1zZWNvbmRhcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xyXG5cclxuLy8gRGVzY3JpcHRpdmUgQ29sb3JzXHJcbiR3aGl0ZTogI0ZGRkZGRjtcclxuJGJsYWNrOiAjM0QzRDNEO1xyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZSBNb2RpZmllcnNcclxuJGNvbG9yLXBhbGV0dGVzOiAoXHJcbiAgZ3JleTogKFxyXG4gICAgeHgtbGlnaHQ6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC43NSksXHJcbiAgICB4LWxpZ2h0OiB0cmFuc3BhcmVudGl6ZSgkYmxhY2ssIDAuNSksXHJcbiAgICBsaWdodCA6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC4yOSksXHJcbiAgICBiYXNlICA6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC4xNCksXHJcbiAgICBkYXJrICA6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC4wNCksXHJcbiAgKSxcclxuICBibGFjazogKFxyXG4gICAgbGlnaHQgOiBsaWdodGVuKCRibGFjaywgMTAlKSxcclxuICAgIGJhc2UgIDogJGJsYWNrLFxyXG4gICAgZGFyayAgOiBkYXJrZW4oJGJsYWNrLCAxMCUpXHJcbiAgKVxyXG4pO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(BaseUrl, el, blogService) {
        this.BaseUrl = BaseUrl;
        this.el = el;
        this.blogService = blogService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (res) {
            _this.posts = res;
            _this.postItems.changes.subscribe(function () { return _this.resizeAllGridItems(); });
        }, function (err) { return console.log(err); });
    };
    BlogComponent.prototype.resizeGridItem = function (item) {
        var grid = this.el.nativeElement.querySelector('.masonry--gt-xs');
        var gridAttr = window.getComputedStyle(grid);
        var rowHeight = parseInt(gridAttr.getPropertyValue('grid-auto-rows'), 10);
        var rowGap = parseInt(gridAttr.getPropertyValue('grid-row-gap'), 10);
        var contentHeight = item.querySelector('.post-preview').getBoundingClientRect().height;
        var rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = 'span ' + rowSpan;
    };
    BlogComponent.prototype.resizeAllGridItems = function () {
        var _this = this;
        var windowWidth = window.innerWidth;
        if (windowWidth < 600) {
            return;
        }
        var items = this.el.nativeElement.querySelectorAll('.post');
        items.forEach(function (element) {
            _this.resizeGridItem(element);
        });
    };
    BlogComponent.prototype.onResize = function () {
        this.resizeAllGridItems();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('item'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], BlogComponent.prototype, "postItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BlogComponent.prototype, "onResize", null);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/components/blog/blog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseUrl')),
        __metadata("design:paramtypes", [String,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/breeds/breeds.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/breeds/breeds.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container>\r\n  <p>\r\n    AI may be busy taking over the world. However, they can certainly help us\r\n    answer an ubiquitous question that we all ask when meeting a four-legged\r\n    stranger:\r\n    <strong>what kind of good pup is that?</strong>\r\n  </p>\r\n  <p class=\"instruction\">\r\n    <em> Select an image and find out who they are.</em>\r\n  </p>\r\n\r\n  <div class=\"classification\">\r\n    <ng-container *ngIf=\"isProcessing\">\r\n      <div class=\"processing\">\r\n        <p>Processing...</p>\r\n        <mat-progress-bar\r\n          mode=\"indeterminate\"\r\n          color=\"accent\"\r\n        ></mat-progress-bar>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"result\" [ngClass]=\"{ isProcessing: isProcessing }\">\r\n      <div\r\n        class=\"preview\"\r\n        [ngStyle]=\"{ 'background-image': 'url(' + preview + ')' }\"\r\n      ></div>\r\n\r\n      <div class=\"breed\">\r\n        <h4>{{ breed.breed }}</h4>\r\n        <p>{{ breed.temparement }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <input\r\n    fxHide\r\n    #imgPicker\r\n    type=\"file\"\r\n    accept=\".png, .jpg, .jpeg\"\r\n    (change)=\"onImgSelected($event)\"\r\n  />\r\n\r\n  <button mat-fab class=\"fab\" (click)=\"imgPicker.click()\">\r\n    <fa-icon [icon]=\"icPlus\"></fa-icon>\r\n  </button>\r\n</app-container>\r\n"

/***/ }),

/***/ "./src/app/components/breeds/breeds.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/breeds/breeds.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".classification {\n  position: relative; }\n\n.result {\n  opacity: 1;\n  transition: opacity 500ms; }\n\n.isProcessing {\n  opacity: 0; }\n\n.processing {\n  width: 100%;\n  position: absolute;\n  top: 3em;\n  text-align: center; }\n\n.preview {\n  margin: 2em 0;\n  padding: 0 10vw;\n  min-height: 50vh;\n  background-size: cover;\n  background-position: center center;\n  background-origin: content-box;\n  background-repeat: no-repeat; }\n\n.breed {\n  margin: 0 5vw 2em;\n  text-align: center; }\n\n.breed p {\n    text-transform: capitalize; }\n\n.fab {\n  position: fixed;\n  bottom: 1em;\n  right: 1em; }\n\n.instruction {\n  margin: 0;\n  text-align: center;\n  font-size: 0.85rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icmVlZHMvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGJyZWVkc1xcYnJlZWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsOEJBQThCO0VBQzlCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFGcEI7SUFLSSwwQkFBMEIsRUFBQTs7QUFJOUI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JyZWVkcy9icmVlZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uY2xhc3NpZmljYXRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xyXG59XHJcblxyXG4uaXNQcm9jZXNzaW5nIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucHJvY2Vzc2luZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByZXZpZXcge1xyXG4gIG1hcmdpbjogMmVtIDA7XHJcbiAgcGFkZGluZzogMCAxMHZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYnJlZWQge1xyXG4gIG1hcmdpbjogMCA1dncgMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDFlbTtcclxuICByaWdodDogMWVtO1xyXG59XHJcblxyXG4uaW5zdHJ1Y3Rpb24ge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/breeds/breeds.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/breeds/breeds.component.ts ***!
  \*******************************************************/
/*! exports provided: BreedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedsComponent", function() { return BreedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_breed_classification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/breed-classification.service */ "./src/app/services/breed-classification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BreedsComponent = /** @class */ (function () {
    function BreedsComponent(BaseUrl, breedService) {
        this.BaseUrl = BaseUrl;
        this.breedService = breedService;
        this.preview = this.BaseUrl + 'static/img/preview.jpg';
        this.breed = { breed: 'Poodle', temparement: 'Active, Proud, Very Smart' };
    }
    BreedsComponent.prototype.ngOnInit = function () {
        this.icPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        // Global reader to avoid memory leak
        this.reader = new FileReader();
    };
    BreedsComponent.prototype.onImgSelected = function (event) {
        var _this = this;
        // Preview image upload
        this.reader.onload = function () {
            var dataUrl = _this.reader.result.toString();
            _this.preview = dataUrl;
        };
        var file = event.target.files[0];
        if (file) {
            this.isProcessing = true;
            // Upload to server to predict
            this.breedService.predict(file).subscribe(function (res) {
                _this.reader.readAsDataURL(file);
                _this.breed = res;
                _this.isProcessing = false;
            }, function (err) {
                _this.breed = { breed: 'Something went wrong', temparement: 'Try again' };
                console.log(err);
            });
        }
    };
    BreedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breeds',
            template: __webpack_require__(/*! ./breeds.component.html */ "./src/app/components/breeds/breeds.component.html"),
            styles: [__webpack_require__(/*! ./breeds.component.scss */ "./src/app/components/breeds/breeds.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseUrl')),
        __metadata("design:paramtypes", [Object, _services_breed_classification_service__WEBPACK_IMPORTED_MODULE_2__["BreedClassificationService"]])
    ], BreedsComponent);
    return BreedsComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header\r\n  class=\"navbar\"\r\n  ngClass.gt-sm=\"navbar--gt-sm\"\r\n  [ngClass]=\"{ 'navbar--scrolled': navScrolled }\"\r\n  fxLayout=\"row\"\r\n  fxLayoutAlign=\"start center\"\r\n>\r\n  <button class=\"menu-toggle\" fxHide.gt-sm (click)=\"toggleMenu()\">\r\n    <fa-icon [icon]=\"icMenu\"></fa-icon>\r\n  </button>\r\n\r\n  <h3\r\n    class=\"logo\"\r\n    ngClass=\"text-center\"\r\n    ngClass.gt-sm=\"text-left\"\r\n    fxFlex=\"2 1 auto\"\r\n  >\r\n    <a routerLink=\"/\">D.</a>\r\n  </h3>\r\n\r\n  <nav fxHide fxShow.gt-sm class=\"nav--gt-sm\">\r\n    <div class=\"sibling-fade\">\r\n      <a routerLink=\"/services\">Services</a>\r\n      <a routerLink=\"/breeds\">Breeds</a>\r\n      <a routerLink=\"/blog\">Blog</a>\r\n    </div>\r\n  </nav>\r\n\r\n  <nav\r\n    #mobileNav\r\n    [@navAnimation]=\"menuToggle ? 'open' : 'closed'\"\r\n    class=\"nav--mobile\"\r\n    fxHide.gt-sm\r\n  >\r\n    <button class=\"btn-close\" (click)=\"toggleMenu()\">\r\n      &times;\r\n    </button>\r\n\r\n    <div class=\"sibling-fade nav__links\">\r\n      <a routerLink=\"/services\" (click)=\"toggleMenu()\"\r\n        ><span>01</span>Services</a\r\n      >\r\n      <a routerLink=\"/breeds\" (click)=\"toggleMenu()\"><span>02</span>Breeds</a>\r\n      <a routerLink=\"/blog\" (click)=\"toggleMenu()\"><span>03</span>Blog</a>\r\n    </div>\r\n  </nav>\r\n\r\n  <button class=\"sidebar-toggle\" (click)=\"toggleSidenav()\">\r\n    <fa-icon [icon]=\"icMore\"></fa-icon>\r\n  </button>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  width: 100%;\n  padding: 1em 5vw;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  font-size: 0.875em;\n  color: #FFFFFF; }\n\n.navbar--gt-sm {\n  width: 50%;\n  left: 0;\n  z-index: 1; }\n\n.navbar--scrolled {\n  background-color: #FFFFFF;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);\n  color: #3D3D3D;\n  transition: background-color 200ms ease-in-out; }\n\n.nav--gt-sm a {\n  margin-right: 1.5em; }\n\n.nav--mobile {\n  width: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  background-color: #3D3D3D;\n  overflow-x: hidden;\n  transition: width 500ms; }\n\n.nav__links {\n  width: 100%;\n  padding: 0;\n  position: relative;\n  top: 50%;\n  font-size: 1.777em;\n  color: #FFFFFF;\n  transform: translateY(-50%); }\n\n.nav__links a {\n    padding: 1em 2em;\n    display: block;\n    font-weight: 700; }\n\n.nav__links span {\n    margin-right: 2em;\n    font-size: 0.85rem;\n    opacity: 0.5; }\n\n.btn-close {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  font-weight: 500;\n  font-size: 2.125rem;\n  color: #FFFFFF; }\n\n.logo {\n  color: inherit; }\n\n.sibling-fade {\n  visibility: hidden; }\n\n.sibling-fade > * {\n  visibility: visible; }\n\n.sibling-fade > * {\n  transition: opacity 150ms ease-out 100ms, transform 150ms ease-out 100ms; }\n\n.sibling-fade:hover > * {\n  opacity: 0.4;\n  transform: scale(0.9); }\n\n.sibling-fade > *:hover {\n  opacity: 1;\n  transform: scale(1);\n  transition-delay: 0ms, 0ms; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXG1jY2h1XFxEZXNrdG9wXFxQcm9qZWN0c1xcRG9naWZ5XFxmcm9udGVuZC9zcmNcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0NMYSxFQUFBOztBRFFmO0VBQ0UsVUFBVTtFQUNWLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkNmYTtFRGdCYiwwQ0FBMEM7RUFDMUMsY0NoQmE7RURpQmIsOENBQThDLEVBQUE7O0FBR2hEO0VBRUksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AseUJDakNhO0VEa0NiLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGNDN0NhO0VEOENiLDJCQUEyQixFQUFBOztBQVA3QjtJQVVJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBWnBCO0lBZ0JJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWSxFQUFBOztBQUloQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0NuRWEsRUFBQTs7QURzRWY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0VBQXdFLEVBQUE7O0FBRzFFO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaGVscGVyXCI7XHJcblxyXG4ubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW0gNXZ3O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItLWd0LXNtIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdmJhci0tc2Nyb2xsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgY29sb3I6ICRibGFjaztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmF2LS1ndC1zbSB7XHJcbiAgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi0tbW9iaWxlIHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zO1xyXG59XHJcblxyXG4ubmF2X19saW5rcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxLjc3N2VtO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAmIGEge1xyXG4gICAgcGFkZGluZzogMWVtIDJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiA1JTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2libGluZy1mYWRlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWJsaW5nLWZhZGUgPiAqIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uc2libGluZy1mYWRlID4gKiB7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLW91dCAxMDBtcywgdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0IDEwMG1zO1xyXG59XHJcblxyXG4uc2libGluZy1mYWRlOmhvdmVyID4gKiB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxufVxyXG5cclxuLnNpYmxpbmctZmFkZSA+ICo6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwbXMsIDBtcztcclxufVxyXG4iLCIkZm9udC1mYW1pbHktLXByaW1hcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xyXG4kZm9udC1mYW1pbHktLXNlY29uZGFyeTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgR2VvcmdpYSwgc2VyaWY7XHJcblxyXG4vLyBEZXNjcmlwdGl2ZSBDb2xvcnNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMzRDNEM0Q7XHJcblxyXG4vLyBDb2xvciBQYWxldHRlIE1vZGlmaWVyc1xyXG4kY29sb3ItcGFsZXR0ZXM6IChcclxuICBncmV5OiAoXHJcbiAgICB4eC1saWdodDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjc1KSxcclxuICAgIHgtbGlnaHQ6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC41KSxcclxuICAgIGxpZ2h0IDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjI5KSxcclxuICAgIGJhc2UgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjE0KSxcclxuICAgIGRhcmsgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjA0KSxcclxuICApLFxyXG4gIGJsYWNrOiAoXHJcbiAgICBsaWdodCA6IGxpZ2h0ZW4oJGJsYWNrLCAxMCUpLFxyXG4gICAgYmFzZSAgOiAkYmxhY2ssXHJcbiAgICBkYXJrICA6IGRhcmtlbigkYmxhY2ssIDEwJSlcclxuICApXHJcbik7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document) {
        this.document = document;
        this.toggleEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuToggle = false;
        this.sidenavToggle = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.icMenu = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"];
        this.icMore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"];
    };
    // Check if nav has overlay class before adding expanding class
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuToggle = !this.menuToggle;
    };
    HeaderComponent.prototype.toggleSidenav = function () {
        this.toggleEmitter.emit();
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var pos = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        var heroHeight = window.innerHeight / 2 - 70;
        var windowWidth = window.innerWidth;
        // Check scroll position and window width
        if (pos > heroHeight && windowWidth < 960) {
            this.navScrolled = true;
        }
        else if (pos < heroHeight && windowWidth < 960) {
            this.navScrolled = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mobileNav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "mobileNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('navAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        width: '100%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        width: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.sibling-fade a, .btn-close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-10%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, width: '100%' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.sibling-fade a, .btn-close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'none' }))))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["sequence"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.sibling-fade a, .btn-close', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: '0%' }))
                        ])
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container [showTitle]=\"false\">\r\n  <div ngClass.gt-xs=\"home-content\" fxFlex=\"2 1 auto\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayoutAlign.gt-sm=\"center\">\r\n    <h1 class=\"home-headline\">Dogify</h1>\r\n    <p>\r\n      We get it - dog is a important member of the family. More often than not,\r\n      as pet parents, you may be too occupied with work that you do not have time to take care of your precious babies.\r\n      At Dogify, we connect you with other pet lovers who you can keep your dog happy, healthy, and sweet as ever.\r\n    </p>\r\n</div>\r\n\r\n<div class=\"quote sub-title\" fxFlexAlign=\"end\">\r\n  <fa-icon [icon]=\"['fas', 'paw']\"></fa-icon>\r\n  <span>Where dog meet human</span>\r\n</div>\r\n</app-container>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host main {\n  padding-top: 5vh;\n  padding-bottom: 5vh; }\n\n.home-headline {\n  margin-bottom: 0; }\n\n.home-content {\n  padding-right: 10%; }\n\n.quote {\n  margin-top: 3em;\n  text-align: right;\n  font-size: 0.75em; }\n\n.quote span {\n    margin-left: 0.5em; }\n\n.quote:hover fa-icon {\n  -webkit-animation: beat 1s;\n  animation: beat 1s; }\n\n@-webkit-keyframes beat {\n  0% {\n    transform: scale(1); }\n  25% {\n    transform: scale(1.3); }\n  50% {\n    transform: scale(1); }\n  75% {\n    transform: scale(1.3); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes beat {\n  0% {\n    transform: scale(1); }\n  25% {\n    transform: scale(1.3); }\n  50% {\n    transform: scale(1); }\n  75% {\n    transform: scale(1.3); }\n  100% {\n    transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcbWNjaHVcXERlc2t0b3BcXFByb2plY3RzXFxEb2dpZnlcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSHJCO0lBTVEsa0JBQWtCLEVBQUE7O0FBSTFCO0VBRVEsMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJO0lBQUksbUJBQW1CLEVBQUE7RUFDdkI7SUFBSyxxQkFBcUIsRUFBQTtFQUMxQjtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUsscUJBQXFCLEVBQUE7RUFDMUI7SUFBTSxtQkFBbUIsRUFBQSxFQUFBOztBQUw3QjtFQUNJO0lBQUksbUJBQW1CLEVBQUE7RUFDdkI7SUFBSyxxQkFBcUIsRUFBQTtFQUMxQjtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUsscUJBQXFCLEVBQUE7RUFDMUI7SUFBTSxtQkFBbUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaG9tZS1oZWFkbGluZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaG9tZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnF1b3RlIHtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVvdGU6aG92ZXIge1xyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGJlYXQgMXM7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBiZWF0IDFzO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJlYXQge1xyXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG4gICAgMjUlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMyk7fVxyXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgIDc1JSB7dHJhbnNmb3JtOiBzY2FsZSgxLjMpO31cclxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container>\r\n  <div class=\"service-content\" ngClass.gt-xs=\"service-content--gt-xs\">\r\n\r\n    <div class=\"service\">\r\n      <fa-icon [icon]=\"['fas', 'route']\"></fa-icon>\r\n      <h4>Dog Walking</h4>\r\n      <p>\r\n        Whenever your dog needs a walk.\r\n        Services are available 7 days a week.\r\n        You can choose from potty breaks to adventure walks.\r\n      </p>\r\n    </div>\r\n\r\n  <div class=\"service\">\r\n      <fa-icon [icon]=\"['fas', 'bone']\"></fa-icon>\r\n    <h4>Tricks Training</h4>\r\n    <p>\r\n      Our expert trainers will teach your babies new cool\r\n      tricks to impress your friends. Available in sessions or packages.\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"service\">\r\n      <fa-icon [icon]=\"['fas', 'home']\"></fa-icon>\r\n    <h4>House Sitting</h4>\r\n    <p>\r\n      Just because your leaving home; doesn't mean your pet has to!\r\n      Leave them in the comfort of their own home and we will come visit!\r\n    </p>\r\n  </div>\r\n\r\n  <div class=\"service\">\r\n    <fa-icon [icon]=\"['fas', 'suitcase-rolling']\"></fa-icon>\r\n    <h4>Pet Boarding</h4>\r\n    <p>\r\n      A home away from home. Your dog will stay with one\r\n      of our sitters in a family environment.\r\n      Your babes will be taken care of from A to Z.\r\n    </p>\r\n  </div>\r\n  </div>\r\n\r\n  <button class=\"btn\" ngClass.gt-xs=\"btn--gt-xs\" mat-raised-button (click)=\"toggleSidenav()\">Book a Service</button>\r\n\r\n</app-container>"

/***/ }),

/***/ "./src/app/components/services/services.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-content {\n  margin: 2em 0; }\n\n.service-content--gt-xs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2em 3em; }\n\n.service fa-icon {\n  margin-bottom: 0.5em;\n  position: relative;\n  display: inline-block;\n  font-size: 2em; }\n\n.service:hover fa-icon {\n  -webkit-animation: spin 2s cubic-bezier(0, 0.45, 0.32, 1.28);\n  animation: pulse 2s cubic-bezier(0, 0.45, 0.32, 1.28); }\n\n.mat-raised-button {\n  margin: 2em 0 3em;\n  padding: 0.2em 4em;\n  border-radius: 6px; }\n\n@-webkit-keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9DOlxcVXNlcnNcXG1jY2h1XFxEZXNrdG9wXFxQcm9qZWN0c1xcRG9naWZ5XFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VydmljZXNcXHNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVEsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUl0QjtFQUVRLDREQUE0RDtFQUM1RCxxREFBcUQsRUFBQTs7QUFJN0Q7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUt0QjtFQUNJO0lBRUUsMkJBQTJCLEVBQUE7RUFHN0I7SUFFRSxvQ0FBb0MsRUFBQTtFQUd0QztJQUVFLDJCQUEyQixFQUFBLEVBQUE7O0FBYmpDO0VBQ0k7SUFFRSwyQkFBMkIsRUFBQTtFQUc3QjtJQUVFLG9DQUFvQyxFQUFBO0VBR3RDO0lBRUUsMkJBQTJCLEVBQUEsRUFBQTs7QUFJakM7RUFDSSw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5zZXJ2aWNlLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxufVxyXG5cclxuLnNlcnZpY2UtY29udGVudC0tZ3QteHMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAyZW0gM2VtO1xyXG59XHJcblxyXG4uc2VydmljZSB7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VydmljZTpob3ZlciB7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBjdWJpYy1iZXppZXIoMCwgMC40NSwgMC4zMiwgMS4yOCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMCwgMC40NSwgMC4zMiwgMS4yOCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDJlbSAwIDNlbTtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLy8gZnJvbSBhbmltYXRlLmNzcyAtaHR0cDovL2RhbmVkZW4ubWUvYW5pbWF0ZVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgIH1cclxuICBcclxuICAgIDUwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0byB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLnB1bHNlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sidenav-toggle.service */ "./src/app/services/sidenav-toggle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(sidenavToggleService) {
        this.sidenavToggleService = sidenavToggleService;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.prototype.toggleSidenav = function () {
        this.sidenavToggleService.toggleSidenav();
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/components/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_sidenav_toggle_service__WEBPACK_IMPORTED_MODULE_1__["SidenavToggleService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\r\n  <h5>About</h5>\r\n  <p>\r\n    Our mission at Dogify is to be able to provide peace of mind to you knowing that your \r\n    baby receiving the best care possible. Our foundation is built upon a team of highly \r\n    trained and dedicated pet care professionals.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"booking\">\r\n  <h5>Book a service</h5>\r\n  <form class=\"form--booking\">\r\n\r\n    <div class=\"service-options\">\r\n        <div class=\"option\">\r\n          <input id=\"dog-walking\" type=\"radio\" name=\"service\" value=\"dog-walking\" checked> \r\n          <label for=\"dog-walking\">\r\n            <fa-icon [icon]=\"['fas', 'route']\"></fa-icon>\r\n            <div>Dog Walking</div>\r\n          </label>\r\n        </div>\r\n    \r\n        <div class=\"option\">\r\n          <input id=\"tricks-training\" type=\"radio\" name=\"service\" value=\"tricks-training\">\r\n          <label for=\"tricks-training\">\r\n            <fa-icon [icon]=\"['fas', 'bone']\"></fa-icon>\r\n            <div>Trick Training</div>\r\n          </label>\r\n        </div>\r\n    \r\n        <div class=\"option\">\r\n          <input id=\"house-sitting\" type=\"radio\" name=\"service\" value=\"house-sitting\">\r\n          <label for=\"house-sitting\">\r\n            <fa-icon [icon]=\"['fas', 'home']\"></fa-icon>\r\n            <div>House Sitting</div>\r\n          </label>\r\n        </div>\r\n    \r\n          <div class=\"option\">\r\n            <input id=\"pet-boarding\" type=\"radio\" name=\"service\" value=\"pet-boarding\">\r\n            <label for=\"pet-boarding\">\r\n              <fa-icon [icon]=\"['fas', 'suitcase-rolling']\"></fa-icon>\r\n              <div>Pet Boarding</div>\r\n            </label>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"form__address\">\r\n      <label class=\"form__label\" for=\"address\">Where is your address?</label>\r\n      <input id=\"address\" type=\"text\" placeholder=\"Postal Code or Address\">\r\n    </div>\r\n\r\n    <div class=\"form__date\">\r\n      <label class=\"form__label\" for=\"date\">What date you need?</label>\r\n      <input id=\"date\" type=\"date\" placeholder=\"Postal Code or Address\">\r\n    </div>\r\n\r\n    <button class=\"btn\" ngClass.gt-xs=\"btn--gt-xs\" mat-raised-button>Submit</button>\r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"social\">\r\n  <h5>Social</h5>\r\n  <div>\r\n    <fa-icon [icon]=\"['fab', 'facebook-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'instagram']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'twitter-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'google-plus-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'youtube-square']\"></fa-icon>\r\n  </div>\r\n</div>\r\n\r\n<span class=\"copyright\">Copyright 2018 @mcchu - All Right Reserved</span>"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div {\n  margin: 2rem 0;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid rgba(61, 61, 61, 0.25); }\n\n.about, .social h5 {\n  font-size: 0.85em; }\n\n.form--booking {\n  margin: 1em 0; }\n\n.form__label {\n  display: block;\n  font-size: 0.85em;\n  font-weight: 700; }\n\n.service-options {\n  margin-bottom: 1em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1em; }\n\n.option input[type='radio'] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1; }\n\n.option label {\n  padding: 1em;\n  border: 1px solid rgba(61, 61, 61, 0.86);\n  border-radius: 6px;\n  display: block;\n  text-align: center;\n  cursor: pointer; }\n\n.option label fa-icon {\n  margin-bottom: 0.5em; }\n\n.option input[type='radio']:checked + label {\n  background-color: #3D3D3D;\n  color: #FFFFFF; }\n\n.mat-raised-button {\n  padding: 0.2em; }\n\n.copyright {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  display: block;\n  font-size: 0.75em;\n  color: rgba(61, 61, 61, 0.71); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L0M6XFxVc2Vyc1xcbWNjaHVcXERlc2t0b3BcXFByb2plY3RzXFxEb2dpZnlcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWRlbmF2XFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0NDS3dDLEVBQUE7O0FERjFDO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhLEVBQUE7O0FBR2Y7RUFFSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFKZjtFQVFJLFlBQVk7RUFDWix3Q0N6Qm9DO0VEMEJwQyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBYm5CO0VBaUJJLG9CQUFvQixFQUFBOztBQWpCeEI7RUFxQkkseUJDN0NXO0VEOENYLGNDL0NXLEVBQUE7O0FEbURmO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw2QkNwRHNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcic7XHJcblxyXG46aG9zdCA+IGRpdiB7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHBhbGV0dGUoZ3JleSwgeHgtbGlnaHQpO1xyXG59XHJcblxyXG4uYWJvdXQsIC5zb2NpYWwgaDUge1xyXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xyXG59XHJcblxyXG4uZm9ybS0tYm9va2luZyB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5cclxuLmZvcm1fX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDAuODVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2VydmljZS1vcHRpb25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07IFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxZW07XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcGFsZXR0ZShncmV5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwgZmEtaWNvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIGNvbG9yOiAkd2hpdGU7ICBcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gIG1hcmdpbi10b3A6IC0xcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgY29sb3I6IHBhbGV0dGUoZ3JleSwgbGlnaHQpXHJcbn0iLCIkZm9udC1mYW1pbHktLXByaW1hcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xyXG4kZm9udC1mYW1pbHktLXNlY29uZGFyeTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgR2VvcmdpYSwgc2VyaWY7XHJcblxyXG4vLyBEZXNjcmlwdGl2ZSBDb2xvcnNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMzRDNEM0Q7XHJcblxyXG4vLyBDb2xvciBQYWxldHRlIE1vZGlmaWVyc1xyXG4kY29sb3ItcGFsZXR0ZXM6IChcclxuICBncmV5OiAoXHJcbiAgICB4eC1saWdodDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjc1KSxcclxuICAgIHgtbGlnaHQ6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC41KSxcclxuICAgIGxpZ2h0IDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjI5KSxcclxuICAgIGJhc2UgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjE0KSxcclxuICAgIGRhcmsgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjA0KSxcclxuICApLFxyXG4gIGJsYWNrOiAoXHJcbiAgICBsaWdodCA6IGxpZ2h0ZW4oJGJsYWNrLCAxMCUpLFxyXG4gICAgYmFzZSAgOiAkYmxhY2ssXHJcbiAgICBkYXJrICA6IGRhcmtlbigkYmxhY2ssIDEwJSlcclxuICApXHJcbik7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
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

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/components/sidenav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var BlogService = /** @class */ (function () {
    function BlogService(BaseUrl, http) {
        this.BaseUrl = BaseUrl;
        this.http = http;
    }
    BlogService.prototype.getPosts = function () {
        return this.http.get(this.BaseUrl + 'api/blogs');
    };
    BlogService.prototype.getPost = function (id) {
        return this.http.get(this.BaseUrl + 'api/blogs/' + id);
    };
    BlogService.prototype.getPostIds = function () {
        return this.getPosts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (posts) { return posts.map(function (post) { return post.id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return error; }));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseUrl')),
        __metadata("design:paramtypes", [String,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/breed-classification.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/breed-classification.service.ts ***!
  \**********************************************************/
/*! exports provided: BreedClassificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedClassificationService", function() { return BreedClassificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants */ "./src/app/shared/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreedClassificationService = /** @class */ (function () {
    function BreedClassificationService(http) {
        this.http = http;
    }
    BreedClassificationService.prototype.predict = function (file) {
        var fd = new FormData();
        fd.append('file', file);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.http.post(_shared_constants__WEBPACK_IMPORTED_MODULE_3__["BaseUrl"] + 'api/predict', fd));
    };
    BreedClassificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BreedClassificationService);
    return BreedClassificationService;
}());



/***/ }),

/***/ "./src/app/services/sidenav-toggle.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/sidenav-toggle.service.ts ***!
  \****************************************************/
/*! exports provided: SidenavToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavToggleService", function() { return SidenavToggleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidenavToggleService = /** @class */ (function () {
    function SidenavToggleService() {
        // Observable string source
        this.sidenavToggleSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable string stream
        this.sidenavToggle$ = this.sidenavToggleSource.asObservable();
    }
    SidenavToggleService.prototype.toggleSidenav = function () {
        this.sidenavToggleSource.next();
    };
    SidenavToggleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SidenavToggleService);
    return SidenavToggleService;
}());



/***/ }),

/***/ "./src/app/shared/components/container/container.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/container/container.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"hero\"\r\n  ngClass.gt-sm=\"hero--gt-sm\"\r\n  [ngStyle]=\"{ 'background-image': 'url(' + (isBlog ? blogThumbnail : img) + ')' }\"\r\n  fxLayout=\"row\"\r\n  fxLayoutAlign=\"start center\"\r\n>\r\n  <ng-container *ngIf=\"showTitle\">\r\n    <h1 [@fadeInLeft]=\"showTitle ? true : false\" class=\"hero-title\">{{ isBlog ? blogTitle : title }}</h1>\r\n  </ng-container>\r\n\r\n  <div class=\"social social--light\" fxHide fxShow.gt-sm [@fadeInLeft]=\"animated\">\r\n    <fa-icon [icon]=\"['fab', 'facebook-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'instagram']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'twitter-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'google-plus-square']\"></fa-icon>\r\n    <fa-icon [icon]=\"['fab', 'youtube-square']\"></fa-icon>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<main\r\n  class=\"main\"\r\n  ngClass=\"main--sm\"\r\n  [ngClass.gt-sm]=\"{'main--sm': false, 'main--gt-sm': true}\"\r\n  [@fadeInLeft]=\"animated\"\r\n>\r\n  <ng-content></ng-content>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/components/container/container.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/container/container.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.hero {\n  width: 100%;\n  height: 50vh;\n  padding: 0 5vw;\n  position: relative;\n  background-size: cover;\n  background-color: #3D3D3D;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.hero h1 {\n    z-index: 2;\n    color: #FFFFFF;\n    text-transform: capitalize; }\n\n.hero:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 100%); }\n\n.hero--gt-sm {\n  width: 50%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n.main {\n  padding: 2em 5vw;\n  min-height: 50vh;\n  z-index: 3;\n  overflow: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  background-color: #FFFFFF; }\n\n.main--sm {\n  margin: 0 auto;\n  max-width: 750px !important; }\n\n.social--light {\n  position: absolute;\n  bottom: 2em;\n  color: white; }\n\n.main--gt-sm {\n  margin-left: 50%;\n  min-height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFpbmVyL0M6XFxVc2Vyc1xcbWNjaHVcXERlc2t0b3BcXFByb2plY3RzXFxEb2dpZnlcXGZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGNvbnRhaW5lclxcY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb250YWluZXIvQzpcXFVzZXJzXFxtY2NodVxcRGVza3RvcFxcUHJvamVjdHNcXERvZ2lmeVxcZnJvbnRlbmQvc3JjXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQ1BhO0VEUWIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQVI5QjtJQVdJLFVBQVU7SUFDVixjQ2RXO0lEZVgsMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1QsdUdBS0MsRUFBQTs7QUFHSDtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1Q7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHlCQ25EYSxFQUFBOztBRHNEZjtFQUNFLGNBQWM7RUFDZCwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiaGVscGVyXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgcGFkZGluZzogMCA1dnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgaDEge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDBkZWcsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSkgMCUsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDApIDUwJSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLmhlcm8tLWd0LXNtIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBwYWRkaW5nOiAyZW0gNXZ3O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgei1pbmRleDogMztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi0tc20ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNzUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvY2lhbC0tbGlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLS1ndC1zbSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iLCIkZm9udC1mYW1pbHktLXByaW1hcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIEdlb3JnaWEsIHNlcmlmO1xyXG4kZm9udC1mYW1pbHktLXNlY29uZGFyeTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgR2VvcmdpYSwgc2VyaWY7XHJcblxyXG4vLyBEZXNjcmlwdGl2ZSBDb2xvcnNcclxuJHdoaXRlOiAjRkZGRkZGO1xyXG4kYmxhY2s6ICMzRDNEM0Q7XHJcblxyXG4vLyBDb2xvciBQYWxldHRlIE1vZGlmaWVyc1xyXG4kY29sb3ItcGFsZXR0ZXM6IChcclxuICBncmV5OiAoXHJcbiAgICB4eC1saWdodDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjc1KSxcclxuICAgIHgtbGlnaHQ6IHRyYW5zcGFyZW50aXplKCRibGFjaywgMC41KSxcclxuICAgIGxpZ2h0IDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjI5KSxcclxuICAgIGJhc2UgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjE0KSxcclxuICAgIGRhcmsgIDogdHJhbnNwYXJlbnRpemUoJGJsYWNrLCAwLjA0KSxcclxuICApLFxyXG4gIGJsYWNrOiAoXHJcbiAgICBsaWdodCA6IGxpZ2h0ZW4oJGJsYWNrLCAxMCUpLFxyXG4gICAgYmFzZSAgOiAkYmxhY2ssXHJcbiAgICBkYXJrICA6IGRhcmtlbigkYmxhY2ssIDEwJSlcclxuICApXHJcbik7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/container/container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/container/container.component.ts ***!
  \********************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_animations_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/animations/animations */ "./src/app/animations/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(BaseUrl, router) {
        this.BaseUrl = BaseUrl;
        this.router = router;
        this.animated = true;
        this.showTitle = true;
        this.isBlog = false;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ContainerComponent.prototype.init = function () {
        if (!this.isBlog) {
            var route = this.router.url;
            this.img = this.BaseUrl + "static/img" + route + ".jpg";
            this.title = route.replace('/', '');
        }
        else if (!this.blogThumbnail) {
            this.blogThumbnail = this.BaseUrl + 'static/img/default.jpg';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('@fade'),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "animated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "showTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "isBlog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContainerComponent.prototype, "blogTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ContainerComponent.prototype, "blogThumbnail", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/shared/components/container/container.component.html"),
            animations: [
                Object(src_app_animations_animations__WEBPACK_IMPORTED_MODULE_2__["fade"])(),
                Object(src_app_animations_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInLeft"])()
            ],
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/shared/components/container/container.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BaseUrl')),
        __metadata("design:paramtypes", [String,
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants.ts":
/*!*************************************!*\
  !*** ./src/app/shared/constants.ts ***!
  \*************************************/
/*! exports provided: BaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrl", function() { return BaseUrl; });
var BaseUrl = 'http://localhost:5000/';


/***/ }),

/***/ "./src/app/shared/routeReuse.ts":
/*!**************************************!*\
  !*** ./src/app/shared/routeReuse.ts ***!
  \**************************************/
/*! exports provided: CustomRouteReuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouteReuse", function() { return CustomRouteReuse; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Disable component reuse on same route
var CustomRouteReuse = /** @class */ (function (_super) {
    __extends(CustomRouteReuse, _super);
    function CustomRouteReuse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomRouteReuse.prototype.shouldDetach = function (route) { return false; };
    CustomRouteReuse.prototype.store = function (route, detachedTree) { };
    CustomRouteReuse.prototype.shouldAttach = function (route) { return false; };
    CustomRouteReuse.prototype.retrieve = function (route) { return null; };
    CustomRouteReuse.prototype.shouldReuseRoute = function (future, curr) {
        return false;
    };
    return CustomRouteReuse;
}(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]));



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
    production: false,
    BaseUrl: 'http://localhost:5000/'
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

module.exports = __webpack_require__(/*! C:\Users\mcchu\Desktop\Projects\Dogify\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map