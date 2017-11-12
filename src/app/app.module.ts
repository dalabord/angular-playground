import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdqUsersModule } from './adq-users/adq-users.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AdqUsersComponent } from './adq-users/adq-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'users', component: AdqUsersComponent },
  { path: 'user/:id', component: AdqUsersComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Import du module de routage avec valorisation des routes
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AdqUsersModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
