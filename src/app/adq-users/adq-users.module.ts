import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdqUsersComponent } from './adq-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdqUsersComponent],
  exports: [AdqUsersComponent],
})
export class AdqUsersModule { }
