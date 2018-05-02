webpackJsonp([3],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShoppingPageModule", function() { return EditShoppingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_shopping__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditShoppingPageModule = (function () {
    function EditShoppingPageModule() {
    }
    EditShoppingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_shopping__["a" /* EditShoppingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_shopping__["a" /* EditShoppingPage */]),
            ],
        })
    ], EditShoppingPageModule);
    return EditShoppingPageModule;
}());

//# sourceMappingURL=edit-shopping.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditShoppingPage = (function () {
    function EditShoppingPage(navCtrl, navParams, shoppingListService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toast = toast;
        this.item = this.navParams.get('item');
    }
    EditShoppingPage.prototype.ionViewDidLoad = function () {
        console.log(this.item);
    };
    EditShoppingPage.prototype.saveItem = function (item) {
        var _this = this;
        this.shoppingListService.editItem(item).then(function () {
            _this.toast.show(item.name + " saved!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditShoppingPage.prototype.removeItem = function (item) {
        var _this = this;
        this.shoppingListService.removeItem(item).then(function () {
            _this.toast.show(item.name + " removed!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-shopping',template:/*ion-inline-start:"/Users/desai prateek/Codes/exercises/shoppingFirebase/src/pages/edit-shopping/edit-shopping.html"*/'<!--\n  Generated template for the EditShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n	<ion-label>Name</ion-label>\n	<ion-input [(ngModel)]="item.name" placeholder="ipadPro"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-label>Quantity</ion-label>\n	<ion-input [(ngModel)]="item.quantity" type="number" placeholder="1"></ion-input>\n</ion-item>\n\n<ion-item>\n	<ion-label>Price</ion-label>\n	<ion-input [(ngModel)]="item.price" type="number" placeholder="700"></ion-input>\n</ion-item>\n\n<button ion-button block clear (click)="saveItem(item)">\n	Save\n</button>\n<button ion-button block clear color="danger" (click)="removeItem(item)">\n	Delete\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/desai prateek/Codes/exercises/shoppingFirebase/src/pages/edit-shopping/edit-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], EditShoppingPage);
    return EditShoppingPage;
}());

//# sourceMappingURL=edit-shopping.js.map

/***/ })

});
//# sourceMappingURL=3.js.map