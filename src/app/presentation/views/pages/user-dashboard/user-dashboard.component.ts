import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ListOfComicsComponent } from '../../shared/components/list-of-comics/list-of-comics.component';
@Component({
  selector: 'app-user-dashboard',
  imports: [ListOfComicsComponent, PaginatorModule],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export class UserDashboardComponent {
  first: number = 0;
  rows: number = 10;

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
  }
}
