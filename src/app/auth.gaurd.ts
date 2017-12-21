
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../store/login/login.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    // router: any;
    constructor(private _route: Router, private authService: LoginService) {

    }

    canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn
        .map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this._route.navigate(['/']);
            return false;
          }
          console.log('entered into canactivate');
          return true;
    });
}

}
