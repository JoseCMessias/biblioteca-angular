import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { VerificarLoginService } from '../services/verificar-login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginVerificaService: VerificarLoginService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verifiedAccess();
  }

  verifiedAccess() {
    if (this.loginVerificaService.userIsVerified()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}