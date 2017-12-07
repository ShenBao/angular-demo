import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

@Component({
  selector: 'app-http001',
  templateUrl: './http001.component.html',
  styleUrls: ['./http001.component.css']
})
export class Http001Component implements OnInit {

  results: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let t = Date.now();
    this.http.get('https://cnodejs.org/api/v1/topics?limit=10&t=' + t).subscribe(res => {
      console.log(res)
      this.results = res['data'];
      console.log(this.results)
    });
  }

}
