import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  search(endpoint: any): Observable<any> {

    const url = environment.apiUrl + endpoint;
    return this.http.get(url);
  }

  contact(endpoint: any, postData:any): Observable<any> {

    const url = environment.apiUrl + endpoint;
    return this.http.post(url, postData);
  }

}
