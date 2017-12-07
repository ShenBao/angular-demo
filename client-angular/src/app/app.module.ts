import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { IndexComponent } from './index/index.component';

const routerConfig = [
  {
    path: '',
    component: IndexComponent
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
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
