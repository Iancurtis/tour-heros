import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from "@angular/router";

// <-- custom module
import { AppRoutingModule } from "./app-routing.module";

// <-- Every component must be declared in one—and only one—Angular module.
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service";

@NgModule({
  imports: [ // <-- which contains the list of external modules that the app uses
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
