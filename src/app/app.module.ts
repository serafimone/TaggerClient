import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule, MatTabsModule, MatIconModule } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { DataTableComponent } from './table/data-table.component';
import { DocumentsService } from './services/documents.service';
import { RecordsService } from './services/records.service';
import { GetDocumentComponent } from './getdocument/get-document.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule
  ],
  entryComponents: [DataTableComponent, GetDocumentComponent, LoginComponent, RegisterComponent],
  declarations: [DataTableComponent, GetDocumentComponent, LoginComponent, RegisterComponent],
  bootstrap: [DataTableComponent, GetDocumentComponent, LoginComponent, RegisterComponent],
  providers: [
    DocumentsService,
    RecordsService
  ]
})
export class AppModule { }