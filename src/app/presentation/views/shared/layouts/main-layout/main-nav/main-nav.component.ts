import { Component } from '@angular/core';
import { Session, Subscription } from '@supabase/supabase-js';
import { SessionUserService } from '../../../services/SessionUserService.service';
import { NgIcon } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  imports: [NgIcon, RouterModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css',
})
export class MainNavComponent {
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
