import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of';

import { AdqUsersService } from './adq-users.service';

@Component({
  selector: 'app-adq-users',
  templateUrl: './adq-users.component.html',
  styleUrls: ['./adq-users.component.scss'],
  providers: [ 
    AdqUsersService
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdqUsersComponent implements OnInit {
  users: Observable<Array<Object>>;
  searchFieldListener = new Subject();
  inputField: any;

  constructor(
    private usersService: AdqUsersService,
  ) { }

  ngOnInit() {
    const searchField = this.searchFieldListener
      .switchMap(currentValue => {
        this.inputField = currentValue;
        console.log(`Current value  : ${JSON.stringify(currentValue)}`);
        return this.usersService.get(currentValue as string);
      })
      .share();
      
    searchField.subscribe(v => this.users = Observable.of(v));
  }

}
