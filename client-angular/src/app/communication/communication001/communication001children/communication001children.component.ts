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

  constructor() {
    let i = 0;
    setInterval(()=>{
      this.str = `三秒已到，子组件的值变了: ${i++}`
    },1000);
  }

  ngOnInit() {
  }

}
