import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-main-banner',
  imports: [NgIcon, RouterModule],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css',
})
export class MainBannerComponent {}
