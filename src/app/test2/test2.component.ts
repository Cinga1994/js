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
    // this.sum(1, 2, 3, 4);
    // this.testJQuery();
    // this.testEvent();
    let a = $('#test-link');
    let b = $('#testMouseMoveDiv');
    console.log(a);
    a.on('click', function () { alert('hello') });
    a.click(function () { alert('another way') });
    // $(function () {
    //   $('#testMouseMoveDiv').mousemove(function (e) {
    //     $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    //   });
    // });

    function event(e) {
      $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    }

    b.mousemove(event);
    setTimeout(function () {
      b.off('mousemove', event);
    }, 3000);

    let input = $('#test-input');
    input.val('change');
    input.change(function () { console.log('text has been changed') });

    let b1 = $("#button1");
    let b2 = $("#button2");
    function popwindow() {
      window.open('/');
    }
    b1.click(function () { popwindow(); });
    b2.click(function () {
      setTimeout(function () {
        popwindow()
      }, 3000);
    });
    let form = $('#test-form'),
      langs = form.find('[name=lang]'),
      selectAll = form.find('label.selectAll :checkbox'),
      selectAllLabel = form.find('label.selectAll span.selectAll'),
      deselectAllLabel = form.find('label.selectAll span.deselectAll'),
      invertSelect = form.find('a.invertSelect');
    // 重置初始化状态:
    form.find('*').show().off();
    form.find(':checkbox').prop('checked', false).off();
    deselectAllLabel.hide();
    // 拦截form提交事件:
    form.off().submit(function (e) {
      e.preventDefault();
      alert(form.serialize());
    });
    selectAll.click(function () {
      if (this.checked) {
        langs.prop('checked', true);
        selectAllLabel.hide();
        deselectAllLabel.show();
      } else {
        langs.prop('checked', false);
        selectAllLabel.show();
        deselectAllLabel.hide();
      }
    });
    invertSelect.click(function () {
      langs.map(function () {
        $(this).prop('checked', !$(this).prop('checked'));
      });
    });
    langs.click(function () {
      if (langs.filter(':checked').length === langs.length) {
        selectAll.prop('checked', true);
        selectAllLabel.hide();
        deselectAllLabel.show();
      } else {
        selectAll.prop('checked', false);
        selectAllLabel.show();
        deselectAllLabel.hide();
      }
    });

  }
  testEvent() {
    let a = $('test-link');
    a.on('click', function () { alert('hello') });
  }
  testJQuery() {
    let ul = $('#test-div>ul');
    ul.append('<li><span>Haskell</span></li>');

    let ps = document.createElement('li');
    ps.innerHTML = 'Pascal';
    ul.prepend(ps);
    ul.append(ps);
    console.log(ul);
    let js = $('#test-div>ul>li:first-child');
    js.after('<li><span>Second</span></li>');
    js.remove();
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
