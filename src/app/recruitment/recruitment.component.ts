import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './../shared/character';

import { RecruitmentService } from './recruitment.service';
import { CharacterDetailsService } from './../character-details/character-details.service';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})

export class RecruitmentComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private recruitmentService: RecruitmentService,
    private characterDetailsService: CharacterDetailsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.recruitmentService.urls.forEach(url => {
      this.http.get<Character>(url)
      .subscribe(character => this.characters.push(character));
    });
  }

  isLoaded(): boolean {
    return this.recruitmentService.urls.length === this.characters.length;
  }

  removeCharacter(character: Character): void {
    let index = this.characters.indexOf(character);
    if (index > -1) {
      this.recruitmentService.removeCharacter(character);
      this.characters.splice(index, 1);
    }
  }

}
