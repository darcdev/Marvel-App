import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { MessageService } from 'primeng/api';
import { FooterComicDetailComponent } from './comic-detail/footer-comic-detail/footer-comic-detail.component';

@Component({
  selector: 'app-list-of-comics',
  templateUrl: './list-of-comics.component.html',
  styleUrls: ['./list-of-comics.component.css'],
  imports: [CommonModule, ButtonModule],
  providers: [DialogService, MessageService],
})
export class ListOfComicsComponent implements OnInit, OnDestroy {
  comics: ComicEntity[] = [
    {
      id: 1,
      title: 'Amazing Spider-Man #1',
      description: 'Peter Parker returns as the Amazing Spider-Man!',
      issueNumber: 1,
      pageCount: 32,
      prices: [{ type: 'printPrice', price: 3.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'Amazing Spider-Man',
      },
      dates: [{ type: 'onsaleDate', date: '2023-01-15T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'Stan Lee', role: 'writer' },
          { name: 'Steve Ditko', role: 'artist' },
        ],
      },
    },
    {
      id: 2,
      title: 'Avengers #10',
      description:
        "Earth's Mightiest Heroes face their greatest challenge yet!",
      issueNumber: 10,
      pageCount: 40,
      prices: [{ type: 'printPrice', price: 4.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'Avengers',
      },
      dates: [{ type: 'onsaleDate', date: '2023-02-20T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'Jason Aaron', role: 'writer' },
          { name: 'Ed McGuinness', role: 'artist' },
        ],
      },
    },
    {
      id: 3,
      title: 'X-Men #5',
      description: 'The X-Men must protect a world that hates and fears them.',
      issueNumber: 5,
      pageCount: 36,
      prices: [{ type: 'printPrice', price: 3.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'X-Men',
      },
      dates: [{ type: 'onsaleDate', date: '2023-03-10T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'Jonathan Hickman', role: 'writer' },
          { name: 'Leinil Francis Yu', role: 'artist' },
        ],
      },
    },
    {
      id: 4,
      title: 'Black Panther #7',
      description: "T'Challa defends Wakanda from a new threat.",
      issueNumber: 7,
      pageCount: 38,
      prices: [{ type: 'printPrice', price: 4.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'Black Panther',
      },
      dates: [{ type: 'onsaleDate', date: '2023-04-10T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'Ta-Nehisi Coates', role: 'writer' },
          { name: 'Leinil Francis Yu', role: 'artist' },
        ],
      },
    },
    {
      id: 5,
      title: 'Captain Marvel #12',
      description: 'Carol Danvers soars to new heights!',
      issueNumber: 12,
      pageCount: 32,
      prices: [{ type: 'printPrice', price: 3.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'Captain Marvel',
      },
      dates: [{ type: 'onsaleDate', date: '2023-05-15T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'G. Willow Wilson', role: 'writer' },
          { name: 'Nicole Scott', role: 'artist' },
        ],
      },
    },
    {
      id: 6,
      title: 'Iron Man #3',
      description:
        'Tony Stark faces industrial espionage and a new armored villain.',
      issueNumber: 3,
      pageCount: 36,
      prices: [{ type: 'printPrice', price: 4.99 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
        extension: 'jpg',
      },
      series: {
        name: 'Iron Man',
      },
      dates: [{ type: 'onsaleDate', date: '2023-06-10T00:00:00+0000' }],
      creators: {
        items: [
          { name: 'Dan Slott', role: 'writer' },
          { name: 'Salvador Larroca', role: 'artist' },
        ],
      },
    },
  ];

  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  showDetails(comic: ComicEntity): void {
    this.ref = this.dialogService.open(ComicDetailComponent, {
      header: 'Comic Details',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        comic: comic,
      },
      templates: {
        footer: FooterComicDetailComponent,
      },
    });
  }

  onPageChange(event: any): void {}
}
