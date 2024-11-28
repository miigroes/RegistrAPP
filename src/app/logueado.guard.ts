import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class LogueadoGuard {
  constructor(public navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('ingresado')) {
      return true;
    } else {
      this.navCtrl.navigateRoot('login');
      return false;
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class NoLogueadoGuard {
  constructor(private navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!localStorage.getItem('ingresado')) {
      return true;
    } else {
      this.navCtrl.navigateRoot('home');
      console.log("Redirected to 'home' because the user is already logged in.");
      return false;
    }
  }
}


