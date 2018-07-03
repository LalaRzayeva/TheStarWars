import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../shared/character';
import { Movie } from './../shared/movie';
import { ServerResponse } from './../shared/server-response';

import { CharacterDetailsService } from './../character-details/character-details.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: Movie[];
  
  constructor(
    private http: HttpClient,
    private characterDetailsService: CharacterDetailsService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.http.get<ServerResponse<Movie>>('https://swapi.co/api/films/')
    .subscribe(res => {
      this.movies = res.results;
      console.log(res);
      this.loadCharacters();
    });
  }

  loadCharacters() {
    this.movies.forEach(movie => {
      movie.fetched_characters = [];
      movie.characters.forEach(url => {
        this.http.get<Character>(url).subscribe(character => {
          movie.fetched_characters.push(character);
        });
      });
    });
  } 
  
  isCharactersLoaded(movie: Movie): boolean {
    return movie.fetched_characters.length === movie.characters.length;
  }

  isLoaded(): boolean {
    return  this.movies !== undefined && this.movies.every(this.isCharactersLoaded);
  }
}
