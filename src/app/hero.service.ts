import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {

    //获取英雄数据
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }
    //promise异步获取heroes列表
    mNumber: number = 0;

    getHeroes(): Hero[] {
        return HEROES;
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.getHeroes());
            }, 2000);
        })
    }
    //callback方式调用promise
    callback(success, error) {
        let a = true;
        if(a){
            success(this.getHeroes());
        }else{
            error("error!");
        }
        
    }
    //函数作为参数被调用
    getData(success: Function) {
        setTimeout(() => {
            success(10, 20);
        }, 2000);
    }
    //链式调用原理
    add(num): HeroService {
        this.mNumber += num;
        return this;
    }

    minus(num): HeroService {
        this.mNumber -= num;
        return this;
    }
}