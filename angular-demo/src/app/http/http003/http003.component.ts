import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
  selector: 'app-http003',
  templateUrl: './http003.component.html',
  styleUrls: ['./http003.component.css']
})
export class Http003Component implements OnInit {

  resData: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    
    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders.set('Authorization', 'my-auth-token');
    this.resData = this.http.get('/api/stock', { headers: myHeaders });

  }

  ngOnInit() {
  }

}
