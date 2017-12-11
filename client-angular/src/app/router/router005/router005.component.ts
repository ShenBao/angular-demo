import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-router005',
  templateUrl: './router005.component.html',
  styleUrls: ['./router005.component.css']
})
export class Router005Component implements OnInit {

  private paramsId: number;

  constructor(private routeInfo: ActivatedRoute) {

  }

  ngOnInit() {

    // 参数快照的形式
    this.paramsId = this.routeInfo.snapshot.params["id"];

  }

}
