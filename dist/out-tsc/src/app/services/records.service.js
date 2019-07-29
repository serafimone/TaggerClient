import * as tslib_1 from "tslib";
import { ServiceBase } from './base.service';
var RecordsService = /** @class */ (function (_super) {
    tslib_1.__extends(RecordsService, _super);
    function RecordsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordsService.prototype.deleteRecord = function (record) {
        return this.delete("documents/" + record.DocumentID + "/records/" + record.ID);
    };
    return RecordsService;
}(ServiceBase));
export { RecordsService };
//# sourceMappingURL=records.service.js.map