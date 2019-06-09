import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '404', component : NotFoundComponent},
      { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],
  providers: [
    EnvironmentUrlService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
