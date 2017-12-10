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
import { Router001Component } from './router/router001/router001.component';
import { Router002Component } from './router/router002/router002.component';

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
    path: 'router001',
    component: Router001Component
  },
  {
    path: 'router002',
    component: Router002Component
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
