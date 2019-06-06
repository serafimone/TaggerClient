import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { DataTableComponent } from './table/data-table.component';
import { DocumentsService } from './services/documents.service';
import { RecordsService } from './services/records.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DataTableComponent],
  declarations: [DataTableComponent],
  bootstrap: [DataTableComponent],
  providers: [
    DocumentsService,
    RecordsService
  ]
})
export class AppModule { }