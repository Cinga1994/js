import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'selenium-webdriver';

@Component({
    selector: 'login',
    templateUrl: './index.html'
})

export class LoginComponent implements OnInit {
    username: string;
    password: string;

    title = "login----"

    constructor(private http: Http) {

    }

    ngOnInit() {
        // init
        console.log('init');

        // loacl 
        this.username = 'jiaxiangwang';
        this.password = 'xinjia';
    }

    loginClicked(e) {
        console.log(e);
        console.log(this.username);
        console.log(this.password);

        this.http.get('https://api.github.com/repos/octocat/Hello-World')
            .toPromise()
            .then((response: any) => {
                console.log(response._body)
            })
            .catch(error => {
                console.log(error)
            });

    }
}