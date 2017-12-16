import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService] //providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
  // template: `<h1>{{title}}</h1>
  // <h2>{{hero.name}} details</h2>`
})
export class AppComponent implements OnInit {
  private title = 'tour of heros';
  private hero: Hero = {
    id: 1,
    name: 'windstrom'
  };
  private selectedHero: Hero;

  heroes: Hero[];

  //实例化service，构造函数将私有的heroService标记为注入HeroService的靶点
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroService.add(5).add(5).minus(7);
    console.log(this.heroService.mNumber);
    this.getHeroes();

    this.heroService.getData((a: number, b: number) => {
      let sum = a + b; // 展示在网页上
      console.log(sum);
    });


  }
  getHeroes(): void {
    let self = this;
    // this.heroService.getHeroesSlowly().then(function (value) { self.heroes = value });
    //传递函数，相当于传递指针，函数执行后value的值传递给heroes
    this.heroService.callback((value) => {
      this.heroes = value;
    }, (str) => {
      console.log(str);
    });
  }
  onSelect(item: Hero) {
    this.selectedHero = item;
    console.log(item.id + item.name);
  }
  detailClick(str) {
    console.log("appComponent " + str);
  }
}
