import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { Http001Component } from './http/http001/http001.component';
import { Component001Component } from './component/component001/component001.component';
import { Component002Component } from './component/component002/component002.component';
import { Component003Component } from './component/component003/component003.component';
import { Component004Component } from './component/component004/component004.component';
import { Component005Component } from './component/component005/component005.component';
import { Component006Component } from './component/component006/component006.component';
import { Component007Component } from './component/component007/component007.component';
import { Component008Component } from './component/component008/component008.component';
import { Component009Component } from './component/component009/component009.component';
import { Router001Component } from './router/router001/router001.component';
import { Router002Component } from './router/router002/router002.component';
import { Router003Component } from './router/router003/router003.component';
import { Router004Component } from './router/router004/router004.component';
import { Router005Component } from './router/router005/router005.component';
import { Router006Component } from './router/router006/router006.component';
import { Router007Component } from './router/router007/router007.component';
import { Router008Component } from './router/router008/router008.component';


@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    IndexComponent,
    ListComponent,
    Http001Component,
    Component001Component,
    Component002Component,
    Component003Component,
    Component004Component,
    Component005Component,
    Component006Component,
    Component007Component,
    Component008Component,
    Component009Component,
    Router001Component,
    Router002Component,
    Router003Component,
    Router004Component,
    Router005Component,
    Router006Component,
    Router007Component,
    Router008Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { // 开启基于Hash的路由模式
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      // useValue: environment.APP_BASE_HREF
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
