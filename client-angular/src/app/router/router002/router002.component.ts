import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-router002',
  templateUrl: './router002.component.html',
  styleUrls: ['./router002.component.css']
})
export class Router002Component implements OnInit {

  constructor(private router: Router) { }

  toIndex() {
    this.router.navigate(["/index"]);
  }

  toRouter005() {
    // 动态路由
    this.router.navigate(["/router005", 666]);
  }
  toRouter007() {
    this.router.navigate(['router007'], {
      queryParams: {
        id: 88,
        title: 'xiaobao'
      }
    });
  }

  toRouter015() {

    //跳转路由get传值
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': 8888888, 'name': 'ShenBao' }
      // fragment: 'anchor'   //锚点    参考官方文档
    };

    //配置参数
    this.router.navigate(['/router015'], navigationExtras);

  }

  ngOnInit() {
  }

}
