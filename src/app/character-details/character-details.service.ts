import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from './../shared/character';

@Injectable()
export class CharacterDetailsService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private location: Location
  ) { }

  goToDetails(character: Character) {
    let characterId = this.getIdFromUrl(character.url);
    this.router.navigate(['/characters/'+ characterId]);
  }

  getIdFromUrl(url: string): number {
    let array = url.split('/').filter(String);
    return parseInt(array[array.length-1]);
  }

 goToMovies() {
  this.router.navigate(['/movies/']);
 }

 goBack(): void {
  this.location.back();
 }
}
