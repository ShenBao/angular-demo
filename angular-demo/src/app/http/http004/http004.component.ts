import { Component, OnInit } from '@angular/core';
import { WebSocketService } from "../shared/web-socket.service";

@Component({
  selector: 'app-http004',
  templateUrl: './http004.component.html',
  styleUrls: ['./http004.component.css']
})
export class Http004Component implements OnInit {

  data: Array<any> = [];

  constructor(private wsService: WebSocketService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
      data => {
        console.log(data);
        this.data.push(data);
      },
      err => console.log(err),
      () => console.log("流已经结束")
      );
  }

  sendMessageToServer() {
    this.wsService.sendMessage("Hello from client");
  }
}
