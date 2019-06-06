import { NgModule } from '@angular/core';
import { DocumentsService } from './documents.service';
import { RecordsService } from './records.service';

@NgModule({
    declarations: [
        DocumentsService,
        RecordsService
    ],
})

export class ServicesModule {} 