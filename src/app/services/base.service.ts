import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceBase {
    constructor(
        private httpClient : HttpClient
    ) {}
    
    protected get<T>(resource: string) : Observable<T> {
        return this.httpClient.get<T>(Constants.API_ENDPOINT + resource)
    }

    protected post<T>(resource: string, object:T) : Observable<T> {
        return this.httpClient.post<T>(Constants.API_ENDPOINT + resource, object)
    }

    protected delete(resource: string) : Observable<any> {
        return this.httpClient.delete(Constants.API_ENDPOINT + resource, {responseType: 'text'})
    }
}