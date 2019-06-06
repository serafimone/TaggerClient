import { DocumentModel } from '../models/document.model';
import { Observable } from 'rxjs';
import { ServiceBase } from './base.service';

export class DocumentsService extends ServiceBase {

    getDocuments() : Observable<DocumentModel[]>{
        return this.get<DocumentModel[]>('documents')
    }

    getDocument(id: number) : Observable<DocumentModel> {
        return this.get<DocumentModel>(`documents/${id}`)
    }

    deleteDocument(id: number) : Observable<any> {
        return this.delete(`documents/${id}`)
    }
}
    