import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Obj } from '../communication/communication003/communication003children/communication003children.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public data: Array<Object> = [

    // 基础
    {
      title: '基础',
      list: [
        {
          path: 'component001',
          name: 'template字符模板',
        },
        {
          path: 'component002',
          name: '基于class的类型验证',
        },
        {
          path: 'component003',
          name: '双向绑定',
        },
        {
          path: 'component004',
          name: 'ngFor 来显示列表',
        },
        {
          path: 'component005',
          name: 'styles字符模板',
        },
        {
          path: 'component006',
          name: '处理点击事件',
        },
        {
          path: 'component007',
          name: '使用 ngIf 隐藏空的详情',
        },
        {
          path: 'component008',
          name: '[class.selected]="hero === selectedHero" 来控制当前选中',
        },
        {
          path: 'component009',
          name: 'Dom属性绑定',
        },
        {
          path: 'component010',
          name: '事件绑定',
        },
        {
          path: 'component011',
          name: 'HTML属性绑定',
        },
        {
          path: 'component012',
          name: '双向绑定:自定义实现、ngModel的实现',
        },
        {
          path: 'component013',
          name: 'innerHTML指令',
        },
        {
          path: 'component014',
          name: '杂七杂八的练习',
        },
        {
          path: 'component015',
          name: 'todolist',
        },
      ]
    }

    // router
    // {
    //   title: 'router',
    //   list: [
    //     {
    //       path: '',
    //       name: '默认路由跳转，查看app-routing的配置',
    //     },
    //     {
    //       path: '',
    //       name: '404路由配置，查看app-routing的配置',
    //     },
    //     {
    //       path: 'router001',
    //       name: 'location.back()',
    //     },
    //     {
    //       path: 'router002',
    //       name: 'routerLink的简单用法、及js路由的跳转、参数传递、参数获取',
    //     },
    //     {
    //       path: 'router003',
    //       name: '在路由时传递数据',
    //     },
    //     {
    //       path: 'router004?id=88888',
    //       name: '去router004查看结果：get获取参数，如：/router004?id=888888',
    //     },
    //     {
    //       path: 'router005/88',
    //       name: '去router005查看结果,获取参数,如：/router005/88，获取88',
    //     },
    //     {
    //       path: 'router006/666',
    //       name: '去router006查看结果，获取参数，如：/router006/666，以及当前路由参数变化时，重新获取',
    //     },
    //     {
    //       path: 'router007?id=888&title=xiaobao',
    //       name: '去router007查看结果，当前路由参数变化时，重新获取',
    //     },
    //     {
    //       path: 'router007?id=66&title=ziwei',
    //       name: '去router007，这个带有参数 queryParams',
    //     },
    //   ]
    // }





  ]


  constructor(private router: Router) { }


  toRouter007() {
    this.router.navigate(['router007'], {
      queryParams: {
        id: 88,
        title: 'xiaobao'
      }
    });
  }

  ngOnInit() {
  }

}
