import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Character } from './../shared/character';
import { Movie } from './../shared/movie';
import { GenericObject } from './../shared/generic-object';

import { CharacterDetailsService } from './../character-details/character-details.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})

export class CharacterDetailsComponent implements OnInit {
  
  character: Character;
  fetched_species: GenericObject[] = [];
  fetched_starships: GenericObject[] = [];
  fetched_vehicles: GenericObject[] = [];
  fetched_films: Movie[] = [];
  homeworldLoaded: boolean = false;
 
  constructor(
    private http: HttpClient,
    private activatedRoute:ActivatedRoute,
    private characterDetailsService: CharacterDetailsService
  ) { }

  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.getCharacter(id);
  }

  getCharacter(id: number) {
    this.http.get<Character>('https://swapi.co/api/people/' + id + '/')
    .subscribe(character => {
      this.character = character;
      this.loadHomeworld();
      this.loadSpecies();
      this.loadVehicles();
      this.loadStarships();
      this.loadMovies();
    });
  }

  loadHomeworld() {
    this.http.get<GenericObject>(this.character.homeworld)
    .subscribe(res => {
      this.character.homeworld = res.name;
      this.homeworldLoaded = true;
    });  
  }

  loadMovies() {
    this.character.films.forEach(film => {
      this.http.get<Movie>(film)
      .subscribe( res => {
        this.fetched_films.push(res);
      });
    });
  }

  loadSpecies() {
    this.character.species.forEach(species => {
      this.http.get<GenericObject>(species)
      .subscribe( res => {
        this.fetched_species.push(res);
      });
    });
  }

  loadVehicles() {
    this.character.vehicles.forEach(vehicle => {
      this.http.get<GenericObject>(vehicle)
      .subscribe( res => {
        this.fetched_vehicles.push(res);
      });
    });
  }

  loadStarships() {
    this.character.starships.forEach(starship => {
      this.http.get<GenericObject>(starship)
      .subscribe( res => {
        this.fetched_starships.push(res); 
      });
    });
  }
   isLoaded(): boolean {
     return this.homeworldLoaded && 
     this.character.species.length === this.fetched_species.length && 
     this.character.vehicles.length === this.fetched_vehicles.length && 
     this.character.starships.length === this.fetched_starships.length;
   }

}
