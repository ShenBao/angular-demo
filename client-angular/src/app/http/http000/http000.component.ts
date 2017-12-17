import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

@Component({
  selector: 'app-http000',
  templateUrl: './http000.component.html',
  styleUrls: ['./http000.component.css']
})
export class Http000Component implements OnInit {

  dataSource: Observable<any>;

  resData: Array<any> = [];

  constructor(
    private http: HttpClient
  ) {

    this.dataSource = this.http.get('/api/stock');

  }

  ngOnInit() {

    // 在这里触发http
    this.dataSource.subscribe(
      (data) => this.resData = data
    );

  }

}
