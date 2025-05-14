import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { TagModule } from 'primeng/tag';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  standalone: true,
  imports: [CommonModule, TagModule, NgIcon],
  styleUrls: ['./comic-detail.component.css'],
})
export class ComicDetailComponent implements OnInit {
  comic!: ComicEntity;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data && this.config.data.comic) {
      this.comic = this.config.data.comic;
    }
  }

  getFormattedPrice(price: number): string {
    return price.toFixed(2);
  }

  getCreatorsByRole(role: string): any[] {
    if (!this.comic || !this.comic.creators || !this.comic.creators.items) {
      return [];
    }

    return this.comic.creators.items.filter(
      (creator) => creator.role.toLowerCase() === role.toLowerCase()
    );
  }

  getReleaseDate(): Date | null {
    if (!this.comic || !this.comic.dates || this.comic.dates.length === 0) {
      return null;
    }

    const onSaleDate = this.comic.dates.find(
      (date) => date.type === 'onsaleDate'
    );
    if (onSaleDate) {
      return new Date(onSaleDate.date);
    }

    return null;
  }
}
