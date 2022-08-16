import { ResolveGuardService } from './../service/resolve-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductComponent } from './product/product.component';
import { CanDeactivateService } from '../service/Guards/can-deactivate.service';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'createproduct', component: CreateProductComponent },
  {
    path: 'createproduct/:id', component: CreateProductComponent,
    resolve: { user: ResolveGuardService }, canDeactivate: [CanDeactivateService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
