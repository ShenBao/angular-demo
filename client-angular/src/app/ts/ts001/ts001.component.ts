import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts001',
  templateUrl: './ts001.component.html',
  styleUrls: ['./ts001.component.css']
})
export class Ts001Component implements OnInit {

  title = '你好angular4.x';  /*属性*/

  msg: any;  /*另一种定义属性的方法*/

  msg1: string = '这是一个string类型的msg';


  //定义属性我们还可以给他加修饰符


  public username = "张三";   /*username可以是任意类型*/


  public student: string = '这是一个学生的属性';


  /*声明属性的几种方式*/

  /*
    public 共有  *（默认）           可以在这个类里面使用、也可以在类外面使用
  
    protected  保护类型        他只有在当前类和它的子类里面可以访问
  
  
    private   私有                  只有在当前类才可以访问这个属性
  
  */

  //属性

  public id = '123555';


  public h = "";

  //数据循环

  public list = [];

  public list2: any[];

  public list3: any[];

  public list4: any[];
  //对象

  public obj = {
    name: '张三'
  }

  constructor() {

    this.msg = '这是msg，另一种定义属性的方法';

    //去服务器请求数据  新闻

    this.h = "<h2>这是新闻的数据</h2>";

    this.list = ['1111', '2222', '3333'];

    this.list2 = ['数学', '语文', '外语'];

    this.list3 = [
      { 'title': '1111111111111111111' },
      { 'title': '22222222222222222' },
      { 'title': '3333333333333333333' }
    ];

    this.list4 = [

      {
        'catename': "宝马",
        "list": [
          { 'title': '宝马x1' },
          { 'title': '宝马x3' },
          { 'title': '宝马x2' },
          { 'title': '宝马x4' },
        ]
      }, {
        'catename': "奥迪",
        "list": [
          { 'title': '奥迪q1' },
          { 'title': '奥迪q2' },
          { 'title': '奥迪q3' },
          { 'title': '奥迪q4' },
        ]

      },
    ]

  }

  ngOnInit() {

  }

}
