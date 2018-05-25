import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Globals} from '../globals';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UserService {
  base_url = '';

  constructor(private _http: HttpClient, private globas: Globals) { }
  adminLogin(value): Observable<Iusers[]> {
      return this._http.post<Iusers[]>(this.globas.baseurl+'/admin-login',{data: value})
          .catch(this.errorHandler);
    }
    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "server Error");
    }
}
