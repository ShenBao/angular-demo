import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-router004',
  templateUrl: './router004.component.html',
  styleUrls: ['./router004.component.css']
})
export class Router004Component implements OnInit {

  private queryParamsId: number;

  constructor(private routeInfo: ActivatedRoute) {
    

  }

  ngOnInit() {

    // 参数快照的形式
    this.queryParamsId = this.routeInfo.snapshot.queryParams["id"];

  }

}
