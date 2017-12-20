
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class GuradService implements CanActivate {
    constructor(private _route: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

}
