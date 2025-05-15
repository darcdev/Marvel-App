import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { LogoMarvelFansComponent } from '../../../components/logo-marvel-fans/logo-marvel-fans.component';
import { Session, Subscription } from '@supabase/supabase-js';
import { SessionUserService } from '../../../services/SessionUserService.service';
import { UserLoggedPanelComponent } from '../../../components/user-logged-panel/user-logged-panel.component';

@Component({
  selector: 'app-header',
  imports: [
    NgIcon,
    RouterModule,
    LogoMarvelFansComponent,
    UserLoggedPanelComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  sessionUser: Session | null = null;
  private subscriptionAuthSessionService!: Subscription;

  constructor(public sessionUserServiceService: SessionUserService) {}

  ngOnInit() {
    void this.getSessionUser();
  }

  getSessionUser() {
    this.sessionUserServiceService.session$.subscribe((session) => {
      this.sessionUser = session;
    });
  }

  ngOnDestroy() {
    if (this.subscriptionAuthSessionService) {
      this.subscriptionAuthSessionService.unsubscribe();
    }
  }
}
