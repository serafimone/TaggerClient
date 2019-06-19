import { Component, OnInit } from "@angular/core";
import { DocumentModel } from '../models/document.model';
import { DocumentsService } from '../services/documents.service';


@Component({
    selector: 'get-document',
    templateUrl: 'get-document.html',
    styleUrls: ['get-document.css'],
})
export class GetDocumentComponent implements OnInit {
    private documents : DocumentModel[];
    private fonts: string[];
    private fontSizes: string[];
    private lineSpacings: string[];

    constructor(private documentService: DocumentsService) {}

    ngOnInit() {
        this.documentService.getDocuments().subscribe(data => {
            if (data != null) {
                this.documents = data
                return
            }
            this.documents = [];
        })
        this.fonts = ["Arial", "Times New Roman", "Calibri"];
        this.fontSizes = ["12", "14", "16", "18"]
        this.lineSpacings = ["1", "1,5", "2"];
    }


}