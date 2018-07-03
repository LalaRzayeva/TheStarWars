import { Routes } from '@angular/router';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterDetailsComponent } from '../character-details/character-details.component';
import { MoviesComponent } from '../movies/movies.component';
import { RecruitmentComponent } from './../recruitment/recruitment.component';


export const routes: Routes = [
{path:'characters/:id', component: CharacterDetailsComponent},
{path:'characters', component: CharactersComponent},
{path:'movies', component: MoviesComponent},
{path:'recruitment', component: RecruitmentComponent},
{path:'', redirectTo: '/characters', pathMatch: 'full'}
];