import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(route: string): Observable<any> {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type':  'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // }),
      // params: searchParams
    };

    return this.http.get(environment.proxyUrl + environment.apiUrl + route, httpOptions);
  }
}
