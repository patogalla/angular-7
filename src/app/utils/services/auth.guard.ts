import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    console.log("Checking Auth...");
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    if (localStorage.getItem('jwt')) {
      return true;
    }

    let redirectTo = route.data['redirectTo'] ? route.data['redirectTo'] : '/admin/login';
    console.log("Not logged in, redirecting to : " + redirectTo);
    // not logged in so redirect to login page with the return url
    this.router.navigate([redirectTo], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
