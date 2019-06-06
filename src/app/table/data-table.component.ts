import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DocumentModel } from '../models/document.model';
import { DocumentsService } from '../services/documents.service';
import { DocumentRecord } from '../models/document-record.model';
import { RecordsService } from '../services/records.service';

@Component({
  selector: 'data-table',
  styleUrls: ['data-table.css'],
  templateUrl: 'data-table.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit {
  constructor(
    private documentService : DocumentsService,
    private recordsService : RecordsService
  ) {}

  expandedElement: DocumentModel;
  documentColumnsToDisplay = ['Title'];
  documentRecordsColumnsToDisplay = ['Content']
  dataSource : DocumentModel[]
  dataSourceRecords: DocumentRecord[]


  ngOnInit() {
    this.getDocuments()
  }
  
  getDocuments() {
    this.documentService.getDocuments().subscribe(data => {
      console.log(data)
      !!data ? this.dataSource = data : null,
        (error: any) => {console.log(error)}
    })
  }

  deleteRecord(record: DocumentRecord) {
    this.recordsService.deleteRecord(record).subscribe(() => {
      let documentRecords = this.dataSource
        .find(elem => elem.ID === record.DocumentID)
        .Records;
      const index = documentRecords.map(elem => elem.ID).indexOf(record.ID)
      documentRecords.splice(index, 1)
    }, (error: any) => {console.log(error)
    })
  }
}