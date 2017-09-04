import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'; // I added this

@Injectable()
export class AuthGuard implements CanActivate {

   // I added this
  constructor(private router: Router){
    //...
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      // I added this
      this.router.navigate(['/users'])
      console.log('You are not authenticated!')
    return false;
  }
}
