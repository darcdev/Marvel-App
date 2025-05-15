import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComicDetailComponent } from '../comic-detail/comic-detail.component';
import { FooterComicDetailComponent } from '../comic-detail/footer-comic-detail/footer-comic-detail.component';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.css',
  imports: [CommonModule, ButtonModule, NgIcon],
  providers: [DialogService, MessageService],
})
export class ComicCardComponent {
  @Input() comic!: ComicEntity;

  ref: DynamicDialogRef | null = null;

  constructor(
    private dialogService: DialogService,
    public messageService: MessageService
  ) {}

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  showDetails(comic: ComicEntity): void {
    this.ref = this.dialogService.open(ComicDetailComponent, {
      header: 'Detalles del cómic',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      modal: true,
      data: {
        comic: comic,
      },
      templates: {
        footer: FooterComicDetailComponent,
      },
    });
  }

  addToFavorites(comic: ComicEntity): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Favorito',
      detail: 'Comic agregado a favoritos',
    });
  }
}
