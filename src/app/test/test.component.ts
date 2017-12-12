import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var MYAPP = {};
    // MYAPP.name = 'myapp';
    // console.log(MYAPP.name);
    // this.test5();
    // this.test6();
    // this.test7();

    // this.test8();
    // this.test9();
    // var person = {name:'xinjia',age:'18',sex:'fe'}
    // this.test13(person);
    // this.testJson();
    // this.test23();
    // this.testAjax();

    // function Fn(arg1, arg2, call) {
    //   console.log(arg1);
    //   console.log(arg2);
    //   call();
    // }
    // function Call(num) {
    //   setTimeout(() => { console.log('callback' + num) }, 3000);
    // }

    // Fn(1, 'a', Call);

    // let a = function (x,...rest) {
    //   console.log(arguments.length);
    //   return (x > 0) ? x: -x;
    // };
    // console.log(a(-11,10));

    var x;
    console.log(isNaN(x+1));
    
function callback(){
  console.log('Done');
}
  }

  testAjax() {
    let array = [1, 2, 'a', 'A', '@'];
    console.log(array);
    let add = array.splice(1, 2, 'add1', 3);
    console.log(add);
    console.log(array);
  }
  call() {

  }
  testfileupload() {
    var f = document.getElementById("test-file-upload");
    var filename = f.value;
    if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
      alert('Can only upload image file.');
      return false;
    }
  }
  testDom() {
    var menu = document.getElementById('drink-menu');
    var div = document.getElementById('test-div');
    var p = document.getElementById('test-p');
    p.innerHTML = 'Tets';
    p.style.color = '#ff0000';
    p.style.fontWeight = 'bold';
    p.appendChild(menu);
  }
  sortDom() {
    var list = document.getElementById("test-list");
    var children = document.getElementsByTagName('li');
    var i;
    for (i = 0; i < children.length; i++) {
      console.log(children[i]);
    }

  }
  testBrowser() {
    // console.log('window innerWidth: '+window.innerWidth);
    // console.log('window innerHeight: '+window.innerHeight);
    // console.log(window.navigator);
    // console.log(undefined || 2);
    // // window.location.reload();
    // console.log(window.location);
    // console.log(document.title);
    var menu = document.getElementById('drink-menu');
    var drinks = document.getElementsByTagName('dt');
    var drink = document.getElementsByTagName('dd');
    var i, s;
    console.log(menu.tagName);

    for (i = 0; i < drinks.length; i++) {
      console.log(drinks[i].innerHTML + '\n' + drink[i].innerHTML);
    }

  }
  test23() {
    class Student {
      constructor(name) {
        this.name = name;
      }
      hello() {
        console.log('hello' + this.name);
      }
    }
    var gxj = new Student('gxj');
    gxj.hello();
    class PrimaryStudent extends Student {
      constructor(name, grade) {
        super(name);
        this.grade = grade;
      }
      mygrade() { //不能与grade同名
        console.log('grade is ' + this.grade);
      }
    }
    var g = new PrimaryStudent('hhh', 31);
    g.hello();
    g.mygrade();
  }
  test22() {
    function Cat(name) {
      this.name = name || '默认';
    }
    Cat.prototype.say = function () {
      console.log('hello' + this.name);
    }
    function createCat(name) {
      return new Cat(name || {});
    }
    var xiaoming = createCat('小米');
    xiaoming.say();
  }

  test() {
    var x = 0, y = 1;
    var arr = [];
    arr[0] = x;
    arr[1] = y;
    for (var j = 2; j < 10; j++) {
      arr[j] = arr[j - 1] + arr[j - 2];
    }
    console.log(arr);
  }
  jsontojs() {
    var js = JSON.parse('{"name":"ming","age":14}');
    console.log(js);
  }

  testJson() {
    var xiaoming = {
      name: 'Ming',
      age: 14,
      'middle school': 'No5',
      skill: ['java', 'C', 'C#']
    }
    function convert(key, value) {
      if (typeof (value) === 'string') {
        return value.toUpperCase();
      }
      return value;
    }
    var j = JSON.stringify(xiaoming, convert, ' ');
    console.log(j);
  }
  test21() {
    var re = /[\w]+[@][\w]*/;
    var result = re.test('C1@dd');
    var re2 = /^(\w)@(\w)$/;
    var result2 = re2.exec('C@d');
    console.log(result2);
  }
  test20() {
    var date = new Date();
    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate()); //day
    console.log(date.getDay()); //week
    console.log(date.getFullYear());

  }
  test19() {
    function getSum(arr) {
      var sum = function () {
        return arr.reduce(function (x, y) { return x + y; });
      }
      return sum;
    }
    var f = getSum([1, 2]);
    console.log(f);
    console.log(f());
  }
  test18() {
    var arr = [1, 2, 3, 4];
    function sum(arr) {
      return arr.reduce(function (x, y) { return x + y; });
    }

    console.log(sum(arr));
  }
  test17() {
    var arr = ['1', 'apple', 2, 1, 'Aplle'];
    var y = arr.sort(function (x, y) {
      if (x > y) return -1;
      else return 1;
    });
    // var y = arr.map(Number);
    // var y = arr.map(function (x) { return parseInt(x); });
    console.log(y);
    // var z = y.reduce(function (x, y) { return 10*x + y;});
    // console.log(z);
    // console.log(arr.reduce(function(x,y){return x+y}));
  }
  test16() {
    var arr = [1, 2, 3, 4];
    function sqrt(x) {
      return x * x;
    }
    arr.map(sqrt);
    console.log(arr.map(sqrt));
  }
  test15() {
    var xinjia = {
      name: 'xinjia',
      birth: 1994,
      age: function () {
        var that = this;
        function getAge() {
          var y = new Date().getFullYear();
          return y - that.birth;
        }
        return getAge();
      }
    };
    console.log(xinjia.age());
  }
  test14() {
    var xinjia = {
      name: 'xinjia',
      birth: 1994,
      age: getAge
    };
    function getAge() {
      var y = new Date().getFullYear();
      return y - this.birth;
    }
    console.log(getAge.call(xinjia, [])); //age

  }

  test13({ name, age, sex }) {
    var np = { name, age, sex }

    console.log(np);
    console.log(name);
    console.log(age);
    console.log(sex);
  }
  test12() {
    var x = 1, y = 2;
    [x, y] = [y, x];
    console.log(x);
    console.log(y);
  }
  test11() {
    //same var in both inner and outer function ??? 
    var x = 'outer';
    function inner() {
      var x = 'inner';
      console.log(x);
    }
    inner();
    console.log(x);
    inner();
  }
  test10() {
    var map = new Map([[1, 'a'], [2, 'b'], [3, 'c']]);
    for (var x of map) {
      console.log(x[0] + ' ' + x[1]);
    }
  }
  test9() {
    var a = ['1', '2', '3'];
    var [x, y, z] = a;
    console.log(x);
    console.log(y);
    console.log(z);
  }
  test8() {
    let a = 7;
    let b = 7;

    console.log(a === b);

    let c = [a];
    let d = [a];

    console.log(c === d);

    let m = { a: 7 };
    let n = { a: 9 };

    let arr = [m, n]; // deepCopy

    let newArr = arr;

    console.log(newArr === arr);

    let newArr2 = arr.slice(0, 1);

    console.log(newArr2 === arr);


    newArr[0].a = 10;
    newArr2[0].a = 20;

    console.log(arr);
    console.log(newArr);
    console.log(newArr2);



  }

  test7() {

    let a = 7;
    let b = a;
    b = 8;

    console.log(a);
    console.log(b);
    console.log('------------------');

    let m = { a: 7 };
    let n = { a: 9 };
    let c = [m, n];
    let d = c;
    c[0].a = 10;
    // m.a = 8;
    console.log(c);
    console.log(d);

  }

  test6() {
    // var 
    for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        console.log(i);
      }, 2000);
    }
    // console.log('aaaaa: ' + i);
  }

  test5() {


    var x = 'hello';
    console.log(x + y);
    var y = 1;
    function innerfun() {
      var x = 'inner hello';
      console.log(x + y);
    }
    innerfun();
  }
  area_of_circle(r, pi) {
    if (arguments[1] === undefined) {
      pi = 3.14;
    }
    var area = pi * r * r;
    return area;
  }


  // if(pi  != undefined){
  //   console.log(pi);
  // }else{
  //   console.log('hi');
  // }



  sum(a, b, c, ...rest) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
    console.log(rest);
  }
  test3() {
    var y = function (x) {
      // if(x !== 'number'){
      //   return 'not a no';
      // }
      if (arguments.length === 0) {
        return 'no argumens'
      }
      if (x >= 0) {
        return x;
      } else {
        return -x;
      }
    };
    console.log(y());
  }
  abs(x) {
    if (x >= 0) {
      return x;
    } else {
      return -x;
    }
  }

  test2() {
    var s = new Set([1, 2, 3, '2']);
    var m = new Map([['xinjia', 18], ['jasp', 12], ['joy', 22]]);
    // s.add(3);
    // s.add(4);
    // s.delete(2);
    // var a = [1,2,3];
    // for(var b of a){
    //   console.log(b);
    // }
    s.forEach(function (value, value2, set) {
      console.log(value);
    })
    m.forEach(function (value, key, map) {
      console.log(key + value);
    })
    // console.log(m);
  }

  test1() {
    // 'use strict';
    var a = "hello";
    //  a[1] = 'a'; 不能对字符串子串进行修改
    var name = "xinjia";
    var message = `${a} , ${name}`;

    var array = [1, 2, '3', null, true]
    var arrb = [[1, 2, 3], ['A', 'B'], 4, 5];
    array.length = 8;
    array[9] = false;
    array = array.slice(1, 4);
    array.push("push");
    array.pop();
    array.unshift('A', 'B');
    array.shift();
    array.sort();
    array.reverse();
    array.splice(2, 2, 'happy', 'cinga');
    var arrayCopy = array.slice();

    var xinjia = {
      name: 'xinjia',
      birth: 1994,
      school: 'cityu',
      height: 160
    }
    delete xinjia.name;
    var boolean = false;
    var b = 2;

    var height = 160;
    var weight = 45;
    var bmi = height / (weight * weight);
    // console.log(bmi);
    // if(bmi<18.5){
    //   console.log('too thin');
    // }else if(bmi<25){
    //  console.log('normal');
    // }
    for (var key in xinjia) {
      console.log(key);
    }
    // var x=0;
    // for(var i=0;i<array.length;i++){
    //     console.log('hello '+array[i]+'\n');
    // }
    var j = array.length - 1;
    while (j >= 0) {
      console.log('hello ' + array[j] + '\n');
      j--;
    }

    console.log(xinjia.name + xinjia.height);
    console.log('toString' in xinjia);
    console.log(xinjia.hasOwnProperty('name'));
    console.log(arrb[2]);
    console.log(array.join('*'));//return string 
    console.log(array.concat(array));
    console.log(array === arrayCopy);//
    console.log(array.indexOf('3'));
    console.log(array.length);

    console.log(a.substring(0, 7));
    console.log(`this is
    a multiply paragraph`);
    console.log('test6');
  }



}
