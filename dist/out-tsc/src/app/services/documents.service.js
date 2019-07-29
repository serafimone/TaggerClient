import * as tslib_1 from "tslib";
import { ServiceBase } from './base.service';
var DocumentsService = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsService, _super);
    function DocumentsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentsService.prototype.getDocuments = function () {
        return this.get('documents');
    };
    DocumentsService.prototype.getDocument = function (id) {
        return this.get("documents/" + id);
    };
    DocumentsService.prototype.deleteDocument = function (document) {
        return this.delete("documents/" + document.ID);
    };
    return DocumentsService;
}(ServiceBase));
export { DocumentsService };
//# sourceMappingURL=documents.service.js.map