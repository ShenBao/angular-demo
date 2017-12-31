import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

@Component({
  selector: 'app-http002',
  templateUrl: './http002.component.html',
  styleUrls: ['./http002.component.css']
})
export class Http002Component implements OnInit {

  resData: Observable<any>;

  constructor(
    private http: HttpClient
  ) {

    this.resData = this.http.get('/api/stock');

  }

  ngOnInit() {
  }

}
