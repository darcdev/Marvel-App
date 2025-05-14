import { Component } from '@angular/core';
import { MainBannerComponent } from '../../shared/components/main-banner/main-banner.component';
import { MarvelCharactersListComponent } from './marvel-characters-list/marvel-characters-list.component';

@Component({
  selector: 'app-home',
  imports: [MainBannerComponent, MarvelCharactersListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
