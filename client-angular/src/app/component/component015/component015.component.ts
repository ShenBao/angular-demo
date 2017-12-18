import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component015',
  templateUrl: './component015.component.html',
  styleUrls: ['./component015.component.css']
})
export class Component015Component implements OnInit {

 
  public username:any='';
  
    public list=[];
  
    constructor() { 
  
    }
  
    ngOnInit() {
    }
  
    addData(e){
  
      //alert(this.username);  /*双向数据绑定  可以获取文本框的值*/
  
      // this.list.push(this.username)
  
        if(e.keyCode==13){
  
            var obj={  /*每次增加的一个对象数据*/
  
              username:this.username,
              status:1
            }
            this.list.push(obj);
  
            this.username='';
        }
  
    }
    deleteData(key){
  
        this.list.splice(key,1);   /*删除数组的数据*/
    }
  
    changeData(key){ /*改变状态*/
  
        this.list[key].status=2
    }
  
}
