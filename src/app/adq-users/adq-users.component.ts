import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
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

  constructor(
    private usersService: AdqUsersService,
  ) { }

  ngOnInit() {
    this.users = this.usersService.get();
  }

}
