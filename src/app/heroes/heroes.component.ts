import { Component, OnInit } from '@angular/core';
//import { Hero } from '../hero'; //Preguntar a Manuel
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  
  constructor(private HeroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
/*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}*/
getHeroes(): void {
  this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
}
}