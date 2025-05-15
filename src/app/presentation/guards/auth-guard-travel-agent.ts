import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { IAuthUserSession } from '@app/core/interfaces/auth/IAuth-user-session';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardRoute implements CanActivate {
  constructor(
    private router: Router,
    private authSessionService: IAuthUserSession
  ) {}

  canActivate():
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkUserLogged();
  }

  private async checkUserLogged(): Promise<boolean | UrlTree> {
    if (environment.production) {
      try {
        const user = await this.authSessionService.getUser();
        if (!user) {
          await this.router.navigate(['']);
          return false;
        }
      } catch {
        await this.router.navigate(['']);
        return false;
      }

      return true;
    }

    return true;
  }
}
