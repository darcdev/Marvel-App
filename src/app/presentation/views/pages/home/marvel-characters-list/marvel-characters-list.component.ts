import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetAllCharactersUseCaseService } from '@app/domain/usecases/characters/get-all-characters.service';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-marvel-characters-list',
  templateUrl: './marvel-characters-list.component.html',
  styleUrls: ['./marvel-characters-list.component.css'],
  imports: [CommonModule, TagModule],
})
export class MarvelCharactersListComponent implements OnInit {
  characters: any[] = [];

  constructor(
    private _getAllCharactersUseCase: GetAllCharactersUseCaseService
  ) {}

  ngOnInit(): void {
    this._getAllCharactersUseCase.execute().then((characters) => {
      this.characters = characters;
    });
  }
}
