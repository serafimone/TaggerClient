import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DocumentsService } from './documents.service';
import { RecordsService } from './records.service';
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                DocumentsService,
                RecordsService
            ],
        })
    ], ServicesModule);
    return ServicesModule;
}());
export { ServicesModule };
//# sourceMappingURL=services.module.js.map