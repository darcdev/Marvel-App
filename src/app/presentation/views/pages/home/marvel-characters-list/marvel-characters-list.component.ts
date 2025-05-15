import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharacterEntity } from '@app/domain/entities/Character.entity';
import { GetAllCharactersService } from '@app/domain/usecases/characters/get-all-characters.service';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-marvel-characters-list',
  templateUrl: './marvel-characters-list.component.html',
  styleUrls: ['./marvel-characters-list.component.css'],
  imports: [CommonModule, TagModule],
})
export class MarvelCharactersListComponent implements OnInit {
  characters: CharacterEntity[] = [];

  constructor(private _getAllCharactersUseCase: GetAllCharactersService) {}

  ngOnInit(): void {
    this._getAllCharactersUseCase.execute().then((characters) => {
      this.characters = characters;
    });
  }
}
