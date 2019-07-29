import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';
import { Injectable } from '@angular/core';
var ServiceBase = /** @class */ (function () {
    function ServiceBase(httpClient) {
        this.httpClient = httpClient;
    }
    ServiceBase.prototype.get = function (resource) {
        return this.httpClient.get(Constants.API_ENDPOINT + resource);
    };
    ServiceBase.prototype.post = function (resource, object) {
        return this.httpClient.post(Constants.API_ENDPOINT + resource, object);
    };
    ServiceBase.prototype.delete = function (resource) {
        return this.httpClient.delete(Constants.API_ENDPOINT + resource);
    };
    ServiceBase = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ServiceBase);
    return ServiceBase;
}());
export { ServiceBase };
//# sourceMappingURL=base.service.js.map