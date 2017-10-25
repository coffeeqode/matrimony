import {User} from '../model/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {
    }   

    canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean {
       
        if (localStorage.getItem("currentUser")) {
            console.log("Current user found");
            return true;
        };
        console.log("current user not found");
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
