import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ListOfComicsComponent } from '../../shared/components/list-of-comics/list-of-comics.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-discover',
  imports: [
    ListOfComicsComponent,
    PaginatorModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    NgIcon,
  ],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
})
export class DiscoverComponent {
  first: number = 0;
  rows: number = 10;
  value1: string = '';
  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
  }
}
