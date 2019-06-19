import { ServiceBase } from './base.service';
import { Observable } from 'rxjs';
import { DocumentRecord } from '../models/document-record.model';

export class RecordsService extends ServiceBase {
    addRecord(record: string): Observable<any> {
        return this.post(`documents/1/record`, record)
    }

    deleteRecord(record : DocumentRecord): Observable<any> {
        return this.delete(`documents/${record.DocumentID}/records/${record.ID}`)
    }
}