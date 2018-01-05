import {AuthService} from './auth.service';

import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class NonAuthGuardService implements CanActivate, CanActivateChild {
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.resolve();
        }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.resolve();
        }  

    constructor(private authService: AuthService,   
        private router: Router) {
    }

    resolve() {
        if(!this.authService.isLogined) {
            return true;
        }

        this.router.navigate(['account']);
        return false;
    }
}
