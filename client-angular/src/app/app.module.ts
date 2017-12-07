import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { Http001Component } from './http/http001/http001.component';

const routerConfig = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'http001',
    component: Http001Component
  },
  {
    path: '**',
    component: Code404Component
  }
];


@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    IndexComponent,
    ListComponent,
    Http001Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
