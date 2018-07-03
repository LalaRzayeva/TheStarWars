import { Injectable } from '@angular/core';
import { Character } from './../shared/character';

@Injectable()
export class RecruitmentService {

  urls: string[] = [];

  constructor() { }

  addCharacter(character: Character) {
    this.urls.push(character.url);
  }

  removeCharacter(character: Character) {
    let index = this.urls.indexOf(character.url);
    if (index > -1) {
      this.urls.splice(index, 1);
    }
  }

  isRecruited(character: Character) {
    return this.urls.includes(character.url);
  }
}
