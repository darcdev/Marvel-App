import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharacterEntity } from '@app/domain/entities/Character.entity';
import { GetAllCharactersService } from '@app/domain/usecases/characters/get-all-characters.service';
import { StatesRequest } from '@app/presentation/constants/statesRequest';
import { TagModule } from 'primeng/tag';
import { LoaderRequestComponent } from '../../../../theme/components/loader-request/loader-request.component';
import { MessageErrorComponent } from '../../../../theme/components/messageError/messageError.component';

@Component({
  selector: 'app-marvel-characters-list',
  templateUrl: './marvel-characters-list.component.html',
  styleUrls: ['./marvel-characters-list.component.css'],
  imports: [
    CommonModule,
    TagModule,
    LoaderRequestComponent,
    MessageErrorComponent,
  ],
})
export class MarvelCharactersListComponent implements OnInit {
  characters: CharacterEntity[] = [];
  statusRequest: StatesRequest = StatesRequest.IDLE;
  StatesRequest = StatesRequest;

  constructor(private _getAllCharactersUseCase: GetAllCharactersService) {}

  ngOnInit(): void {
    void this.loadCharacters();
  }

  async loadCharacters(): Promise<void> {
    this.statusRequest = StatesRequest.LOADING;
    try {
      const characters = await this._getAllCharactersUseCase.execute();
      this.characters = characters;
      this.statusRequest = StatesRequest.SUCCESS;
    } catch (error) {
      this.statusRequest = StatesRequest.ERROR;
    }
  }
}
