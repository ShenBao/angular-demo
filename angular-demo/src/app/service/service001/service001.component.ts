import { Component, OnInit } from '@angular/core';

import { StorageService } from '../service.service';


@Component({
  selector: 'app-service001',
  templateUrl: './service001.component.html',
  styleUrls: ['./service001.component.css']
})
export class Service001Component implements OnInit {


  // public storage=new StorageService();   /*可以引入和使用服务  -- 官方不推荐这样的方法*/

  public username: any = '';

  public list = [];


  //private storage:StorageService  依赖注入服务
  constructor(private storage: StorageService) {

    console.log(this.storage);

    // this.storage.setItem('username','张三');

    // alert(this.storage.getItem('username'));



  }

  ngOnInit() {

    //每次刷新获取storage里面 todolist的值

    var todolist = this.storage.getItem('todolist');
    if (todolist) {

      this.list = todolist;
    }

  }

  addData(e) {

    //1.从storage获取  todolist的数据

    //2.如果有数据，拿到这个数据，然后把新数据和这个storage数据拼接，重新写入

    //3.如果没有数据  直接给storage写入数据




    if (e.keyCode == 13) {



      var obj = {  /*每次增加的一个对象数据*/

        username: this.username,
        status: 1
      }



      var todolist = this.storage.getItem('todolist');

      if (todolist) {

        todolist.push(obj);

        //如果有数据，拿到这个数据，然后把新数据和这个storage数据拼接，重新写入
        this.storage.setItem('todolist', todolist);


      } else {



        //3.如果没有数据  直接给storage写入数据
        var arr = [];

        arr.push(obj);



        this.storage.setItem('todolist', arr);

      }


      this.list.push(obj);
      this.username = '';
    }


    // console.log(e);
  }
  deleteData(key) {

    // alert(key);

    this.list.splice(key, 1);   /*删除数组的数据*/

    this.storage.setItem('todolist', this.list);

  }

  changeData(key, status) { /*改变状态*/

    this.list[key].status = status;


    this.storage.setItem('todolist', this.list);
  }

}
