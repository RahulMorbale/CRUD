import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'customerdetails/:id',component:CustomerdetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingpracticeRoutingModule { }
