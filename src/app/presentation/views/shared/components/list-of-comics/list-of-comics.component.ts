import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { MessageService } from 'primeng/api';
import { ComicCardComponent } from './comic-card/comic-card.component';

@Component({
  selector: 'app-list-of-comics',
  templateUrl: './list-of-comics.component.html',
  styleUrls: ['./list-of-comics.component.css'],
  imports: [CommonModule, ButtonModule, ComicCardComponent],
  providers: [DialogService, MessageService],
})
export class ListOfComicsComponent implements OnInit {
  @Input() comics: ComicEntity[] = [];

  ngOnInit(): void {}
}
