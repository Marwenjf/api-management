import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authService : AuthenticationService,
    private router : Router) {
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let authorize = false;
      let authorizedRoles : string[] = route.data['roles'] ;
      let roles : string[] = this.authService.roles ;
     for (let role of roles) {
       if(authorizedRoles.includes(role)){
         authorize = true;
       }
     }
      return authorize;
  }

}
