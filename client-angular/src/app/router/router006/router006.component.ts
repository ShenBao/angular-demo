import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-router006',
  templateUrl: './router006.component.html',
  styleUrls: ['./router006.component.css']
})
export class Router006Component implements OnInit {

  private paramsId: number;

  constructor(private routeInfo: ActivatedRoute) {

    // 参数订阅的方式
    routeInfo.params.subscribe((params: Params) => this.paramsId = params["id"]);

  }

  ngOnInit() {
  }

}
