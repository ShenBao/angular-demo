import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
              Observable<boolean>|Promise<boolean>|boolean {

    let loggedIn:boolean = Math.random() <0.5;

    if(!loggedIn){
      console.log("LoginGuard:用户未登录"+new Date());
    }else {
      console.log("LoginGuard:用户已登录");
    }
    return loggedIn;
  }

}
