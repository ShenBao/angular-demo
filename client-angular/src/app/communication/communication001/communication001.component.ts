import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-communication001',
  templateUrl: './communication001.component.html',
  styleUrls: ['./communication001.component.css']
})
export class Communication001Component implements OnInit {

  id: number = 88;

  name: string = 'XiaoBao';

  str: string = '这个值在子组件1秒后变化'

  constructor() { }

  ngOnInit() {
  }

}
