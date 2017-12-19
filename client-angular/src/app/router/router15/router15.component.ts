import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router15',
  templateUrl: './router15.component.html',
  styleUrls: ['./router15.component.css']
})
export class Router15Component implements OnInit {

  data: Object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // this.route.params/*获取动态路由*/
    // this.route.queryParams  /*获取get传值*/

    console.log(this.route.queryParams);

    this.route.queryParams.subscribe( (data)=>{
      console.log(data);
      this.data = data;
    })

  }

}
