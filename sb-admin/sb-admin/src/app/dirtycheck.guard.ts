import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './component-can-deactivate';

@Injectable({
  providedIn: 'root'
})
export class DirtycheckGuard implements  CanDeactivate<ComponentCanDeactivate> {

  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(component.canDeactivate()){
            return true;
        }
        else{
            return confirm('leave this site ? go to next page.. ??');
        }
        return component.canDeactivate();

  }


}
