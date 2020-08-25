import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service'
import {RouterService} from './router.service'

@Injectable({
  providedIn : 'root'
})
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private routerService:RouterService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      if (this.authService.isUserAuthenticated(this.authService.getBearerToken())) {
        return true
      }
      else {
        this.routerService.routeToLogin();
        return false
      }
  }
}