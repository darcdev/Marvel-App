import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { Session } from '@supabase/supabase-js';
import { UserProfileResponse } from '@app/core/models/auth';
import { SessionUserService } from '../../services/SessionUserService.service';
import { LogOutUserCaseService } from '@app/domain/usecases/user/log-out-user-case.service';
import { IAuthUserSession } from '@app/core/interfaces/auth/IAuth-user-session';
import { Router } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
@Component({
  selector: 'app-user-logged-panel',
  imports: [AvatarModule, OverlayPanelModule, ButtonModule, PopoverModule],
  templateUrl: './user-logged-panel.component.html',
  styleUrl: './user-logged-panel.component.css',
})
export class UserLoggedPanelComponent {
  sessionUser: Session | null = null;
  userData: UserProfileResponse | null = null;

  constructor(
    public sessionUserServiceService: SessionUserService,
    private logOutUserCaseService: LogOutUserCaseService,
    public authSupabaseService: IAuthUserSession,
    private router: Router
  ) {}

  ngOnInit() {
    void this.getSessionUser();
  }

  async getSessionUser() {
    this.sessionUser = this.sessionUserServiceService.getUserSession();
    if (this.sessionUser?.user) {
      await this.getProfile();
    }
  }

  async getProfile() {
    try {
      this.userData = await this.authSupabaseService.getUser();
    } catch {
      this.userData = null;
    }
  }

  async logOut() {
    await this.logOutUserCaseService.execute();
    await this.router.navigate(['/']);
  }
}
