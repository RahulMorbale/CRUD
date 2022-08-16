import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingpracticeRoutingModule } from './routingpractice-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerdetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingpracticeRoutingModule
  ]
})
export class RoutingpracticeModule { }
