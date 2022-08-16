import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { ICanDeactivate } from 'src/app/service/Guards/can-deactivate.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit,ICanDeactivate {
  formObj!: FormGroup;
  id: number = 0
  actionname: string = ""
  constructor(private fb: FormBuilder, private service: AppService,
    private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createform()
    // this.id = this.activatedroute.snapshot.params['id']
    // if (this.id) {
    //   this.actionname = "Update"
    //   this.service.getProductById("products", this.id).subscribe((res: any) => {
    //     this.formObj.setValue(res)
    //     console.log(res)
    //   })
    // } else {
    //   this.actionname = "Create"
    // }

    this.activatedroute.data.subscribe((res: any) => {
      console.log(" Data is===>>>", res)
      if (res['user']) {
        this.actionname = 'update'
        this.formObj.patchValue(res['user'])
      } else {
        this.actionname = 'create'
      }
    })

  }
  createform() {
    this.formObj = this.fb.group({
      id: [],
      name: [''],
      productName: [''],
      description: [''],
      quantity: [],
      price: []
    })
  }
  submit() {
    if (this.actionname == "Create") {
      this.service.postData("products", this.formObj.value).subscribe((res) => {
        this.route.navigate([''])
        console.log(res)
      })
    } else {
      this.service.updatedata('products', this.formObj.value).subscribe((res) => {
        this.route.navigate([''])
        alert("Data Updated")
        console.log()
      })
    }
  }

  deactivate():boolean{
    if (this.formObj.dirty) {
      this.actionname = 'update'
      if (confirm("You have not saved details. Do you want to continue")) {
        return true;   // true=> if you click on ok=> navigation successfull
      }
    }
    return false;  // false=> if you click on cancel=>to remain on same page
  }
}
