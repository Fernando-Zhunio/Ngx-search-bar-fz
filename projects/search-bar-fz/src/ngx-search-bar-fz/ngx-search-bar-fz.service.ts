import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarFzService {

  constructor(private httpClient:HttpClient) { }


  methodsGet(url: string, params: any): Observable<any> {
    return this.httpClient.get(url, { params });
  }
}
