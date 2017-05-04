import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from "./hero.service";

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit{

    @Input() hero: Hero

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

    ngOnInit(): void {
      this.route.params.switchMap((params: Params) =>
        this.heroService.getHero(+params['id'])
      ).subscribe(hero => this.hero = hero)
    }

    /**
     * Going back too far could take users out of the app. In a real app, you can prevent this issue with the CanDeactivate guard. Read more on the CanDeactivate page.
     */
    goBack(): void {
      this.location.back()
    }

}