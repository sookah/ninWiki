import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Village } from './villages/shared/village.model';
import { Ninja } from './villages/shared/ninja.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  LOCAL_API_URL = 'http://localhost:3000';
  REMOTE_API_URL = '';
  HOST_URL = ''

  isLocal: boolean = true

  constructor(private http: HttpClient) {
    this.HOST_URL = this.isLocal ? this.LOCAL_API_URL : this.REMOTE_API_URL;
  }
  getVillages(): Observable<Village[]> {
    return this.http.get<Village[]>(`${this.HOST_URL}/villages`).pipe(
      // retry(2),
      catchError(this.handleError)
    );
  }

  getVillage(id: number): Observable<Village> {
    return this.http.get<Village>(`${this.HOST_URL}/villages/${id}`).pipe(
      // retry(2),
      catchError(this.handleError)
    );
  }

  getVillageNinjas(village: Village) {
    return this.http.get<Ninja[]>(`${this.HOST_URL}/villages/${village.id}/ninjas`);
  }

  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
      // tap( // Log the result or error
      // {
      //   next: (data) => console.log(filename, data),
      //   error: (error) => console.log(filename, error)
      // }
      // )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `NinWiki returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something unknown happened, we try again.'));
  }
}
