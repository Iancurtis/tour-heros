import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/attr-directive" routerLinkActive="active">属性指令</a>
    </nav>
    <router-outlet></router-outlet>
    <button id="start">Test</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  ngOnInit() {
    const startButton = document.querySelector('#start');
    Observable.fromEvent(startButton, 'click')
      .subscribe((event) => {
        Observable.interval(1000)
          .subscribe((x) => console.log(x));
      });
  }
}
