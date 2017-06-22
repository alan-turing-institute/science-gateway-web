"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mycomponents_1 = require('./mycomponents');
var MyComponentService = (function () {
    function MyComponentService() {
    }
    MyComponentService.prototype.getMyComponents = function () {
        return mycomponents_1.MYCOMPONENTS;
    };
    MyComponentService.prototype.renderTextBox = function (myLabel) {
        return "<label>" + myLabel + ":<input type=\"text\" name=\"name\" /></label>";
    };
    MyComponentService.prototype.getComponents = function () {
        var _this = this;
        var components = this.getMyComponents();
        var listItems = [];
        components.forEach(function (aComponent) {
            if (aComponent.type.valueOf() === "text") {
                listItems.push(_this.renderTextBox(aComponent.label));
            }
        });
        return listItems;
    };
    MyComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyComponentService);
    return MyComponentService;
}());
exports.MyComponentService = MyComponentService;
//# sourceMappingURL=mycomponent.service.js.map