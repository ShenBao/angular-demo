import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-communication001children',
  templateUrl: './communication001children.component.html',
  styleUrls: ['./communication001children.component.css']
})
export class Communication001childrenComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  str: string;

  @Input()
  toChildrenClickHandler;

  @Input()
  toSendDataHandler;

  toSend: string = '这是要传给父组件的数据'

  toSendFHandler(){
    this.toSendDataHandler(this.toSend);
  }

  constructor() {
    let i = 0;
    setInterval(()=>{
      this.str = `三秒已到，子组件的值变了: ${i++}`
    },1000);
  }

  ngOnInit() {
  }

}
