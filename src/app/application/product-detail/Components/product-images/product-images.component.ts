import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/_core/models/i-product';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {

  @Input() productSelected : IProduct | null = null; 
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productSelected']) {
      console.log(this.productSelected)
    }
  }


}
