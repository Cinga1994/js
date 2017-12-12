import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.datatype();
    // this.string();
    // this.array();
    this.sum(1, 2, 3, 4);
    // this.testJQuery();
  }
  testJQuery() {
    let ul = $('#test-div');
    console.log(ul);
  }
  sum(...rest) {
    console.log(rest);
    var result = 0;
    for (let i = 0; i < rest.length; i++) {
      console.log(rest[i]);
      result += rest[i];
    }
    // result =  rest.reduce((x,y)=>{return x+y});
    console.log(result);
    return result;
  }
  array() {
    let arr = ['java', 'js', 'oracle', 4, 2, 1];
    arr.push('push');
    let arr2 = ['add', 5];
    let len = arr.length;
    let concat = arr.concat(arr2);
    let join = arr.join('*');
    let index = arr.indexOf('js');
    let slice = arr.slice(1, 3);
    let splice = arr.splice(0, 1, 'slice');
    arr.forEach(element => {
      console.log(element);
    });
    console.log(`
    ${arr}
    ${arr2}
    ${len}
    ${concat}
    ${join}
    ${index}
    ${slice}
    ${arr}`);
  }
  string() {
    let str = 'I\'m 20' + ' yes';
    let str2 = `Hi
    this is multiple line
    ${str}`
    let length = str2.length;
    let position = str2.indexOf('i');
    let substr = str.substring(1, 5);
    let upper = str.toUpperCase();
    let lower = str.toLowerCase();
    console.log(str);
    console.log(str2);
    console.log(length);
    console.log(str[2]);
    console.log(position);
    console.log(substr);
    console.log(upper);
    console.log(lower);
  }
  datatype() {
    const a;
    var b = null;
    console.log(a);//undefined
    console.log(a + 1);//NaN
    console.log(b);//null
    console.log(a + '1');//undefined1
    console.log(1 / 0);//infinity
    console.log(NaN === NaN);//false
    console.log(isNaN(NaN));//true
  }
}
