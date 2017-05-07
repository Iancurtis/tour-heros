import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetails(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
