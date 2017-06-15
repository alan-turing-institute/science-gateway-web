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
var engineer_service_1 = require('./engineer.service');
var DisplayComponent = (function () {
    function DisplayComponent(engineerService) {
        this.engineerService = engineerService;
    }
    DisplayComponent.prototype.getEngineers = function () {
        this.selectedEngineers = this.engineerService.getEngineers();
        console.log(this.selectedEngineers);
    };
    DisplayComponent.prototype.filterEngineers = function (searchTerm) {
        this.selectedEngineers = this.engineerService.filterEngineers(searchTerm);
        //console.log(this.selectedEngineers);
    };
    DisplayComponent.prototype.ngOnInit = function () {
        this.selectedEngineers = this.engineerService.filterEngineers("");
    };
    DisplayComponent.prototype.ngOnChanges = function (changes) {
        this.selectedEngineers = this.engineerService.filterEngineers(changes["searchTerm"].currentValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DisplayComponent.prototype, "searchTerm", void 0);
    DisplayComponent = __decorate([
        core_1.Component({
            selector: 'rse-display',
            providers: [engineer_service_1.EngineerService],
            template: "\n          <ul class=\"engineers\">\n            <li *ngFor=\"let engineer of selectedEngineers\">\n                <label> {{engineer.name}} </label>\n            </li>\n          </ul>\n      "
        }), 
        __metadata('design:paramtypes', [engineer_service_1.EngineerService])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=display.component.js.map