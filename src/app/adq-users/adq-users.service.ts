import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

/**
 * Service bidon
 */
@Injectable()
export class AdqUsersService {
  
  constructor(
    private http: HttpClient,  
  ) {}

  get() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}