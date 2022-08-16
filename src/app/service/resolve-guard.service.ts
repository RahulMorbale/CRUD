import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from '../products/Models/product';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardService implements Resolve<product>{

  constructor(private service: AppService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): product | Observable<product> | Promise<product> {
    // throw new Error('Method not implemented.');
    const id = route.params['id']
    return this.service.getProductById("products", id)
  }

}
