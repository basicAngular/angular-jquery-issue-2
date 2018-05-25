import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AnonymousGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   const UserDataCheck = localStorage.getItem('UserData');
   //console.log(UserDataCheck);
  	 if(UserDataCheck !== undefined || UserDataCheck.length !== 0 || UserDataCheck !== null){
  		this.router.navigate(['dashboard']);
  		return false;
  	}
    return true;
  }
}
