import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DocumentsService } from '../services/documents.service';
import { RecordsService } from '../services/records.service';
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(documentService, recordsService) {
        this.documentService = documentService;
        this.recordsService = recordsService;
        this.documentColumnsToDisplay = ['Title'];
        this.documentRecordsColumnsToDisplay = ['Content'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.getDocuments();
    };
    DataTableComponent.prototype.getDocuments = function () {
        var _this = this;
        this.documentService.getDocuments().subscribe(function (data) {
            console.log(data);
            !!data ? _this.dataSource = data : null,
                function (error) { console.log(error); };
        });
    };
    DataTableComponent.prototype.deleteDocument = function (document) {
        var _this = this;
        this.documentService.deleteDocument(document).subscribe(function () {
            var index = _this.dataSource.map(function (elem) { return elem.ID; }).indexOf(document.ID);
            _this.dataSource.splice(index, 1);
        }, function (error) { console.log(error); });
    };
    DataTableComponent.prototype.deleteRecord = function (record) {
        var _this = this;
        this.recordsService.deleteRecord(record).subscribe(function () {
            var documentRecords = _this.dataSource
                .find(function (elem) { return elem.ID === record.DocumentID; })
                .Records;
            var index = documentRecords.map(function (elem) { return elem.ID; }).indexOf(record.ID);
            documentRecords.splice(index, 1);
        }, function (error) {
            console.log(error);
        });
    };
    DataTableComponent = tslib_1.__decorate([
        Component({
            selector: 'data-table',
            styleUrls: ['data-table.css'],
            templateUrl: 'data-table.html',
            animations: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [DocumentsService,
            RecordsService])
    ], DataTableComponent);
    return DataTableComponent;
}());
export { DataTableComponent };
//# sourceMappingURL=data-table.component.js.map