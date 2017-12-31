import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from "@angular/http";

import { Observable } from "rxjs";
import 'rxjs/Rx';


@Component({
  selector: 'app-http006',
  templateUrl: './http006.component.html',
  styleUrls: ['./http006.component.css']
})
export class Http006Component implements OnInit {

  constructor(private http: Http, private jsonp: Jsonp) { }

  ngOnInit() {

    // this.requestData();  

    this.requestDataJsonp();
  }

  requestData() {

    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).map(res => res.json())  /*返回的数据转换成json*/
      .subscribe(function (data) {

        console.log(data);

      }, function (err) {

        console.log(err);
      })
  }

  requestDataJsonp() {
    // callback=JSONP_CALLBACK
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";
    this.jsonp.get(url).map(res => res.json())  /*返回的数据转换成json*/
      .subscribe(function (data) {

        console.log(data);

      }, function (err) {

        console.log(err);
      })
  }




}
