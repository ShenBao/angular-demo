import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-router009.children002',
  templateUrl: './router009.children002.component.html',
  styleUrls: ['./router009.children002.component.css']
})
export class Router009Children002Component implements OnInit {

  public pId:number;

  constructor(
    private routeInfo: ActivatedRoute
  ) {
    this.pId = routeInfo.snapshot.params["id"];
  }

  ngOnInit() {
  }

}
