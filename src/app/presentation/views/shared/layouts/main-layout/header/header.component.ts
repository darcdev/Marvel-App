import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { LogoMarvelFansComponent } from '../../../components/logo-marvel-fans/logo-marvel-fans.component';

@Component({
  selector: 'app-header',
  imports: [NgIcon, RouterModule, LogoMarvelFansComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
