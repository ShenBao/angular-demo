import {CanDeactivate} from "@angular/router";
import { Router012Component } from '../router/router012/router012.component';

export class UnsavedGuard implements CanDeactivate<Router012Component> {

  canDeactivate() {

    return window.confirm("你还没有保存.确定要离开么?");
  }

}
