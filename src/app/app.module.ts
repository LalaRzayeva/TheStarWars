import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MoviesComponent } from './movies/movies.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';

import { RecruitmentService } from './recruitment/recruitment.service';
import { CharacterDetailsService } from './character-details/character-details.service';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailsComponent,
    MoviesComponent,
    RecruitmentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    CharacterDetailsService,
    RecruitmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
