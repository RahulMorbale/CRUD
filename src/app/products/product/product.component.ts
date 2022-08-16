import { AppService } from './../../service/app.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productdetails: product[] = []
  constructor(private route: Router, private service: AppService) { }
  ngOnInit(): void {
    this.service.getData("products").subscribe((res: any) => {
      this.productdetails = res
    })
  }
  createproduct() {
    this.route.navigate(['createproduct'])
  }
  update(id: number) {
    this.route.navigate(['createproduct', id])
  }
  delete( id: number,index: number) {
    this.service.deletedata("products", id).subscribe((res) => {
      console.log(res)
      this.productdetails.splice(index, 1)
    })
  }
}
