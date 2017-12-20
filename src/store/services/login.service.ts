
import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    handleError: any;

    constructor(public _http: Http) { }

    getUserData() {
      return this._http.get('assets/db.json');
                        // .map(rs => rs.json());
    }
}



      // return this._http.get('assets/db.json')
      //           .map((res: Response) => res.json())
      //           .catch(this.handleError);
