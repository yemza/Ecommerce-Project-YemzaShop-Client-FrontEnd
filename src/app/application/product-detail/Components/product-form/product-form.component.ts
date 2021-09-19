import { Component,  Input, OnInit,  SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IOrderDetail } from 'src/app/_core/models/i-order-detail';
import { IProduct } from 'src/app/_core/models/i-product';
import { OrdersService } from 'src/app/_core/services/orders.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() productSelected : IProduct | null =  {} ;
  @Input() ProductFormGroup! : FormGroup ;

  orderDetail : IOrderDetail = {}  


  constructor( private orderService : OrdersService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productSelected']) {
      console.log(this.productSelected);
    }
    if (changes['ProductFormGroup']) {
      console.log(this.ProductFormGroup);
    }
  }


  AddOrderToCard(){
    this.orderDetail.productEntityDAO = this.productSelected!;
    this.orderDetail.quantity = this.quantityContols;
    console.log(this.orderDetail)
    this.orderService.addNewOrderDetail( this.orderDetail);
    console.log(this.orderService.getAllOrdersDetail());

  }


   get quantityContols(){
     return this.ProductFormGroup.controls["quantity"].value;
   }

}
