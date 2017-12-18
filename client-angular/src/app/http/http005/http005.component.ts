import { Component, OnInit } from '@angular/core';

import { Http, Jsonp, Headers } from '@angular/http';

@Component({
  selector: 'app-http005',
  templateUrl: './http005.component.html',
  styleUrls: ['./http005.component.css']
})
export class Http005Component implements OnInit {

  public list: any[];
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private jsonp: Jsonp, ) {

  }

  ngOnInit() {
  }
  requestData() {

    var _that = this;

    // alert('请求数据');
    var url = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
    this.http.get(url).subscribe(function (data) {

      //  console.log(JSON.parse(data['_body']));

      var list = JSON.parse(data['_body']);
      //  console.log(_that.list['result']);

      _that.list = list['result'];


    }, function (err) {

      console.log(err);
    })
  }

  requestJsonpData() {


    // jsonp 必须得在url加回到  &callback=JSONP_CALLBACK
    var _that = this;
    // alert('请求数据');
    //var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK";

    var url = "http://127.0.0.1:3000/news?&callback=JSONP_CALLBACK";


    this.jsonp.get(url).subscribe(function (data) {

      console.log(data);

      //  _that.list=data['_body']['result'];


    }, function (err) {

      console.log(err);
    })
  }

  postData() {

    // 1.import { Http,Jsonp,Headers } from '@angular/http';   Headers 定义请求头的

    //2.private headers = new Headers({'Content-Type': 'application/json'});


    //3.post提交数据

    var url = "http://127.0.0.1:3000/dologin";

    this.http.post(url,
      JSON.stringify({ "username": 'zhangsan', "age": '20' }),
      { headers: this.headers }).subscribe(function (data) {

        console.log(data);


      }, function (error) {

        console.log(error);
      })


  }
}
