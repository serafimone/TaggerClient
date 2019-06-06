import { DocumentRecord } from './document-record.model';

export interface DocumentModel {
    ID: number,
    Title: string,
    Records: DocumentRecord[]
}