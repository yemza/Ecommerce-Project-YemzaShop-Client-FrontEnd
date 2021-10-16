import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/_core/models/i-product';
import { OrdersService } from 'src/app/_core/services/orders.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css'],
})
export class ProductCardListComponent implements OnInit {
  @Input() productsList: IProduct[] = [];

  constructor(private route : Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productsList']) {
      console.log(this.productsList);
    }
  }

  productDetails(i : number){
    console.log('(((((((((((((((((((((((((((((((((((((((((')
    console.log(this.productsList[i].id)
    this.route.navigate(['/product/' + this.productsList[i].id])

  }
}
