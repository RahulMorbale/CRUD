import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface ICanDeactivate {
  deactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  // deactivate:boolean
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<ICanDeactivate>{
  component: Object | undefined;
  route: ActivatedRouteSnapshot | undefined;
  constructor() { }


  canDeactivate(component: ICanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.deactivate ? component.deactivate(): true
    // throw new Error('Method not implemented.');
  }

}
