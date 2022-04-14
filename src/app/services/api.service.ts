import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const BASE_URL = 'https://api.mocki.io/v2/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  public getInfo(alias: string): Observable<any> {
    return this.http.get(BASE_URL+ `${alias}`, this.options)
    .pipe(
      catchError((err) => {
        console.log('error caught in service', err);
        return throwError(err);
      }));
  }
}
