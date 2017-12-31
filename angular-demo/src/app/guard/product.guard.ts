import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Router013Component, Product} from '../router/router013/router013.component';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ProductResolveGuard implements Resolve<Router013Component> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    let id: number = route.params['id'];

    // 这里可以进行网络请求以及成功之后判断在执行
    if (id == 1) {
      let p = new Product(88, 'ooxx');
      return p;
    } else {
      this.router.navigate(['/router001']);
    }

  }

}
