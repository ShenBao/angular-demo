import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-router007',
  templateUrl: './router007.component.html',
  styleUrls: ['./router007.component.css']
})
export class Router007Component implements OnInit {

  private id: number;

  private title: string;

  constructor(
    private activatedRoute: ActivatedRoute,   //这里需要注入ActivatedRoute模块  
  ) {
    // 参数订阅的方式
    activatedRoute.queryParams.subscribe(queryParams => {
      this.id = queryParams.id;
      this.title = queryParams.title;
    });

  }

  ngOnInit() {
  }

}
