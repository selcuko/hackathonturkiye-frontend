import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }

  search(endpoint: any): Observable<any> {

    const url = environment.apiUrl + endpoint;
    return this.http.get(url);
  }

  post(serviceName: string, data?: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.post(url, data);
  }

  put(serviceName: string, data?: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.put(url, data);
  }

  get(serviceName: string, data?: any) {
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, data);
  }

}
