import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

/**
 * Service bidon
 */
@Injectable()
export class AdqUsersService {

  constructor(
    private http: HttpClient,  
  ) {}

  get(filter: string) {
/*    let params = new HttpParams();
    if (!!filter) {
      params.set('name', filter);
    }
*/    
    return this.http.get('https://jsonplaceholder.typicode.com/users', {params: new HttpParams().set('name', filter)})
      .catch(e => {
        console.error('Error', e);
        return Observable.empty();
      });
  }
}