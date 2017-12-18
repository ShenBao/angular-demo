import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component014',
  templateUrl: './component014.component.html',
  styleUrls: ['./component014.component.css']
})
export class Component014Component implements OnInit {

  public msg:any;
  
    public username:any;
  
    public flag:any;
  
  
    public search:any;
  
    constructor() {
  
        this.msg='这是一个首页组件111'
  
        this.username='张三';
        this.flag=true;
  
        this.search='搜索的内容';
     }
    ngOnInit() {
  
    }
   
    getMsg(){  /*自定义方法*/  
  
      //获取属性的值
      alert(this.msg);
  
    }
  
    setName(){
  
      //改变username的值
      this.username='李四---改变后的值';
    }
  
    keyupFn(e){
  
      // 事件对象<input type="text" (keyup)='keyupFn($event)'>
  
      console.log(e);
  
      if(e.keyCode==13){
  
        alert('按回车了');
  
      }
  
    }
  
    run(e){
     console.log(e);
  
    }
  
    getSearch(){
  
      alert(this.search);
      
    }

}
