import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/_core/models/i-product';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css'],
})
export class ProductCardListComponent implements OnInit {
  @Input() productsList: IProduct[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productsList']) {
      console.log(this.productsList);
    }
  }
}
