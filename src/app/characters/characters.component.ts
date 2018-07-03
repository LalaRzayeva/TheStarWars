import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../shared/character';
import { GenericObject } from './../shared/generic-object';
import { ServerResponse } from './../shared/server-response';

import { RecruitmentService } from './../recruitment/recruitment.service';
import { CharacterDetailsService } from './../character-details/character-details.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  loadedPlanetsCount: number = 0;
  p: number = 1;
  count: number;

  constructor(
    private http: HttpClient,
    private characterDetailsService: CharacterDetailsService,
    private recruitmentService: RecruitmentService
  ) { }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page: number) {
    this.http.get<ServerResponse<Character>>('https://swapi.co/api/people/?page=' + page)
    .subscribe(res => {
      this.p = page;
      this.count = res.count;
      this.characters = res.results;
      this.loadHomeworlds();
    });
  }

  loadHomeworlds() {
    this.loadedPlanetsCount = 0;
    this.characters.forEach(char => {
      this.http.get<GenericObject>(char.homeworld).subscribe(res => {
        char.homeworld = res.name;
        this.loadedPlanetsCount++;
      })
    });
  }

  isLoaded() {
    return this.characters.length != 0 
      && this.loadedPlanetsCount == this.characters.length;
  }
}
