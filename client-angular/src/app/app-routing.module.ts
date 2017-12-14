import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { Component010Component } from './component/component010/component010.component';
import { Component011Component } from './component/component011/component011.component';
import { Component012Component } from './component/component012/component012.component';

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

import { Pipe001Component } from './pipe/pipe001/pipe001.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/index', //重定向路由
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'http001',
    component: Http001Component
  },
  {
    path: 'component001',
    component: Component001Component
  },
  {
    path: 'component002',
    component: Component002Component
  },
  {
    path: 'component003',
    component: Component003Component
  },
  {
    path: 'component004',
    component: Component004Component
  },
  {
    path: 'component005',
    component: Component005Component
  },
  {
    path: 'component006',
    component: Component006Component
  },
  {
    path: 'component007',
    component: Component007Component
  },
  {
    path: 'component008',
    component: Component008Component
  },
  {
    path: 'component009',
    component: Component009Component
  },
  {
    path: 'component010',
    component: Component010Component
  },
  {
    path: 'component011',
    component: Component011Component
  },
  {
    path: 'component012',
    component: Component012Component
  },
  {
    path: 'router001',
    component: Router001Component
  },
  {
    path: 'router002',
    component: Router002Component
  },
  {
    path: 'router003',
    component: Router003Component
  },
  {
    path: 'router004',
    component: Router004Component
  },
  {
    path: 'router005/:id',
    component: Router005Component
  },
  {
    path: 'router006/:id',
    component: Router006Component
  },
  {
    path: 'router007',
    component: Router007Component
  },
  {
    path: 'router008',
    component: Router008Component
  },
  {
    path: 'redirectToRouter001',
    redirectTo: '/router001', //重定向路由
    pathMatch: 'full'
  },
  {
    path: 'router009',
    component: Router009Component,
    children: [
      {
        path: '',
        component: Router009Children001Component,
      },
      {
        path: 'children/:id',
        component: Router009Children002Component
      }
    ]
  },
  {
    path: 'router010',
    component: Router010Component,
    children: [
      {
        path: '',
        component: Router010children001Component,
      },
      {
        path: 'router010chilren002',
        component: Router010children002Component,
        outlet: "aux"
      }
    ]
  },
  {
    path: 'router011',
    component: Router011Component,
    canActivate: [LoginGuard],
  },
  {
    path: 'router012',
    component: Router012Component,
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'router013/:id',
    component: Router013Component,
    resolve: {
      product: ProductResolveGuard
    },
  },
  {
    path: 'observable001',
    component: Observable001Component
  },
  {
    path: 'pipe001',
    component: Pipe001Component
  },
  {
    path: '**',
    component: Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
