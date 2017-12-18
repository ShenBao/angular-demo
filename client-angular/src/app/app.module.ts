import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

import { Http000Component } from './http/http000/http000.component';
import { Http001Component } from './http/http001/http001.component';
import { Http002Component } from './http/http002/http002.component';
import { Http003Component } from './http/http003/http003.component';
import { Http004Component } from './http/http004/http004.component';
import { WebSocketService } from "./http/shared/web-socket.service";


import { Component001Component } from './component/component001/component001.component';
import { Component002Component } from './component/component002/component002.component';
import { Component003Component } from './component/component003/component003.component';
import { Component004Component } from './component/component004/component004.component';
import { Component005Component } from './component/component005/component005.component';
import { Component006Component } from './component/component006/component006.component';
import { Component007Component } from './component/component007/component007.component';
import { Component008Component } from './component/component008/component008.component';
import { Component009Component } from './component/component009/component009.component';
import { Component010Component } from './component/component010/component010.component';
import { Component011Component } from './component/component011/component011.component';
import { Component012Component } from './component/component012/component012.component';
import { Component013Component } from './component/component013/component013.component';
import { Component014Component } from './component/component014/component014.component';
import { Component015Component } from './component/component015/component015.component';

import { Router001Component } from './router/router001/router001.component';
import { Router002Component } from './router/router002/router002.component';
import { Router003Component } from './router/router003/router003.component';
import { Router004Component } from './router/router004/router004.component';
import { Router005Component } from './router/router005/router005.component';
import { Router006Component } from './router/router006/router006.component';
import { Router007Component } from './router/router007/router007.component';
import { Router008Component } from './router/router008/router008.component';
import { Router009Component } from './router/router009/router009.component';
import { Router009Children001Component } from './router/router009/router009.children001/router009.children001.component';
import { Router009Children002Component } from './router/router009/router009.children002/router009.children002.component';
import { Router010Component } from './router/router010/router010.component';
import { Router010children001Component } from './router/router010/router010children001/router010children001.component';
import { Router010children002Component } from './router/router010/router010children002/router010children002.component';
import { Router011Component } from './router/router011/router011.component';
import { LoginGuard } from "./guard/login.guard";
import { Router012Component } from './router/router012/router012.component';
import { UnsavedGuard } from "./guard/unsaved.guard";
import { Router013Component } from './router//router013/router013.component';
import { ProductResolveGuard } from "./guard/product.guard";
import { Observable001Component } from './rxjs/observable001/observable001.component';
import { Observable002Component } from './rxjs/observable002/observable002.component';

import { Pipe001Component } from './pipe/pipe001/pipe001.component';
import { CustomPipe } from './pipe/custom.pipe';

import { Communication001Component } from './communication/communication001/communication001.component';
import { Communication001childrenComponent } from './communication/communication001/communication001children/communication001children.component';
import { Communication002Component } from './communication/communication002/communication002.component';
import { Communication002childrenComponent } from './communication/communication002/communication002children/communication002children.component';
import { Communication003Component } from './communication/communication003/communication003.component';
import { Communication003childrenComponent } from './communication/communication003/communication003children/communication003children.component';
import { Communication003children002Component } from './communication/communication003/communication003children002/communication003children002.component';

import { Lifecycle001Component } from './lifecycle/lifecycle001/lifecycle001.component';
import { Lifecycle001childrenComponent } from './lifecycle/lifecycle001/lifecycle001children/lifecycle001children.component';
import { Lifecycle002Component } from './lifecycle/lifecycle002/lifecycle002.component';
import { Lifecycle003Component } from './lifecycle/lifecycle003/lifecycle003.component';
import { Lifecycle002childrenComponent } from './lifecycle/lifecycle002/lifecycle002children/lifecycle002children.component';
import { Lifecycle003childrenComponent } from './lifecycle/lifecycle003/lifecycle003children/lifecycle003children.component';
import { Lifecycle004Component } from './lifecycle/lifecycle004/lifecycle004.component';
import { Lifecycle004childrenComponent } from './lifecycle/lifecycle004/lifecycle004children/lifecycle004children.component';
import { Lifecycle005Component } from './lifecycle/lifecycle005/lifecycle005.component';
import { Lifecycle005childrenComponent } from './lifecycle/lifecycle005/lifecycle005children/lifecycle005children.component';
import { Lifecycle005children002Component } from './lifecycle/lifecycle005/lifecycle005children002/lifecycle005children002.component';
import { Lifecycle006Component } from './lifecycle/lifecycle006/lifecycle006.component';
import { Lifecycle006children001Component } from './lifecycle/lifecycle006/lifecycle006children001/lifecycle006children001.component';
import { Lifecycle006children002Component } from './lifecycle/lifecycle006/lifecycle006children002/lifecycle006children002.component';
import { Form001Component } from './form/form001/form001.component';
import { Form002Component } from './form/form002/form002.component';
import { Form003Component } from './form/form003/form003.component';
import { Form004Component } from './form/form004/form004.component';
import { Form005Component } from './form/form005/form005.component';

import { MobileValidatorDirective } from './form/directives/mobile-validator.directive';
import { EqualValidatorDirective } from './form/directives/equal-validator.directive';
import { Ts001Component } from './ts/ts001/ts001.component';



@NgModule({
  declarations: [
    MobileValidatorDirective,
    EqualValidatorDirective,
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
    Router008Component,
    Router009Component,
    Router009Children001Component,
    Router009Children002Component,
    Router010Component,
    Router010children001Component,
    Router010children002Component,
    Router011Component,
    Router012Component,
    Router013Component,
    Component010Component,
    Component011Component,
    Component012Component,
    Observable001Component,
    Observable002Component,
    Pipe001Component,
    CustomPipe,
    Communication001Component,
    Communication001childrenComponent,
    Communication002Component,
    Communication002childrenComponent,
    Communication003Component,
    Communication003childrenComponent,
    Communication003children002Component,
    Lifecycle001Component,
    Lifecycle001childrenComponent,
    Lifecycle002Component,
    Lifecycle003Component,
    Lifecycle002childrenComponent,
    Lifecycle003childrenComponent,
    Lifecycle004Component,
    Lifecycle004childrenComponent,
    Lifecycle005Component,
    Lifecycle005childrenComponent,
    Lifecycle005children002Component,
    Component013Component,
    Lifecycle006Component,
    Lifecycle006children001Component,
    Lifecycle006children002Component,
    Form001Component,
    Form002Component,
    Form003Component,
    Form004Component,
    Form005Component,
    Http000Component,
    Http002Component,
    Http003Component,
    Http004Component,
    Ts001Component,
    Component014Component,
    Component015Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    },
    LoginGuard,
    UnsavedGuard,
    ProductResolveGuard,
    WebSocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }