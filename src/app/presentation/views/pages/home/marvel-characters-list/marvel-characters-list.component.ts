import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-marvel-characters-list',
  templateUrl: './marvel-characters-list.component.html',
  styleUrls: ['./marvel-characters-list.component.css'],
  imports: [CommonModule, TagModule],
})
export class MarvelCharactersListComponent implements OnInit {
  characters: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // For now, we'll use mock data instead of calling the use case
    this.characters = this.getMockCharacters();

    // In a real implementation, you would use:
    // this.getCharactersUseCase.execute().subscribe(characters => {
    //   this.characters = characters;
    // });
  }

  private getMockCharacters(): any[] {
    return [
      {
        id: '1011334',
        name: '3-D Man',
        description:
          'A mysterious hero with the ability to see in three dimensions.',
        thumbnail:
          'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        comics: 12,
        series: 3,
        events: 1,
      },
      {
        id: '1',
        name: 'Iron Man',
        description:
          "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero Iron Man.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
        comics: 2572,
        series: 505,
        events: 30,
      },
      {
        id: '2',
        name: 'Captain America',
        description:
          "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
        comics: 2104,
        series: 473,
        events: 25,
      },
      {
        id: '3',
        name: 'Thor',
        description:
          'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
        comics: 1872,
        series: 387,
        events: 22,
      },
      {
        id: '4',
        name: 'Hulk',
        description:
          "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
        comics: 1723,
        series: 321,
        events: 24,
      },
      {
        id: '5',
        name: 'Black Widow',
        description:
          "Despite super spy Natasha Romanoff's checkered past, she's become one of S.H.I.E.L.D.'s most deadly assassins and a frequent member of the Avengers.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
        comics: 1112,
        series: 243,
        events: 18,
      },
      {
        id: '3',
        name: 'Thor',
        description:
          'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_03.jpg',
        comics: 1872,
        series: 387,
        events: 22,
      },
      {
        id: '4',
        name: 'Hulk',
        description:
          "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg',
        comics: 1723,
        series: 321,
        events: 24,
      },
      {
        id: '5',
        name: 'Black Widow',
        description:
          "Despite super spy Natasha Romanoff's checkered past, she's become one of S.H.I.E.L.D.'s most deadly assassins and a frequent member of the Avengers.",
        thumbnail:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg',
        comics: 1112,
        series: 243,
        events: 18,
      },
    ];
  }
}
