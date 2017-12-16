import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input() //装饰器，变量从外部传入
    hero: Hero;
    @Output()
    myclick = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    clickButton(event) {
        console.log(event);
        this.myclick.emit(this.hero.name + ' clickButton~~~~');
    }
    
}