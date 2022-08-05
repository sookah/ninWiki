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
    return this.http.get<Village[]>('http://localhost:3000/villages').pipe(
      // retry(2),
      catchError(this.handleError)
    );
  }

  getVillage(id: number): Observable<Village> {
    return this.http.get<Village>(`${this.HOST_URL} / villages / ${id}`).pipe(
      // retry(2),
      catchError(this.handleError)
    );
  }

  getVillageNinjas(village: Village) {
    return this.http.get<Ninja[]>(`${this.HOST_URL} / villages / ${village.id} / ninjas`);
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


// get get fix fix fix get create create add require express require cors run loglevel debug app app app app api app api api api file file file secure false

// const app express const cors require const express require dev server dev server proxyconfig src proxy.conf.json target

// http localhost 3000 target http localhost 3000

// angular cli 

// Proxy CORS in Angular

// When you're developing frameworks, there are some handy tricks that can be used to bypass CORS. Proxy servers, Angular app

// Trying to access an https resource that has an invalid certificate will cause this error.

// Trying to access an http resource from a page with an https origin will also cause this error.

// The server did not respond to the actual request (even if it responded to the Preflight request). One scenario might be an HTTP service being developed that panicked without returning any data.

// How to prevent CORS-based attacks

// As a way to bypass CORS also introduces security issues and provides the potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF). For this more server side server configuration can be implemented.