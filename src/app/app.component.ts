import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>xinjia</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // private name: any = 'wangjiaxiang';

  constructor() { }

  ngOnInit() {

    // setTimeout(() => {
    //   this.name = 'guangxinjia';
    // },5000);


    // setInterval(()=>{
    //   this.name = Math.random()*10;
    // }, 1000);

  }

}
