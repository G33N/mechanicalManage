import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    console.log(this.auth.currentUserId);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      if (this.auth.authenticated) {
        return true;
      }

      console.log('Access Denied!');
      this.router.navigate(['/welcome']);
      return false;
    }
}
