import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IBasket } from 'src/app/_core/models/i-basket';

@Component({
  selector: 'app-cart-table-products',
  templateUrl: './cart-table-products.component.html',
  styleUrls: ['./cart-table-products.component.css']
})
export class CartTableProductsComponent implements OnInit {
  
  @Input() listOfProductBAsket : IBasket[]=[];
  total : any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listOfProductBAsket']) {
      console.log(this.listOfProductBAsket);
      this.CountTotal();
    }
   
  }


  CountTotal(){
   this.listOfProductBAsket.forEach(element => {

    if(element?.quantity && element?.product?.price){
      this.total += (element?.product?.price * element?.quantity);
    }
   });
   
    console.log( "this.total" );

   console.log( this.total );
  }
}
