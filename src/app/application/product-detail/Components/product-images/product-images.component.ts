import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/_core/models/i-product';
import { IProductImages } from 'src/app/_core/models/i-productImages';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css'],
})
export class ProductImagesComponent implements OnInit {
  @Input() productSelected: IProduct | undefined;
  imageSelected: string | undefined;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['productSelected']) {
      this.imageSelected = this.productSelected?.image;
    }
  }

  changeMainImage(index: any) {
    this.imageSelected = this.productSelected?.productImages?.find(
      (x) => x.id == index
    )?.image;
  }
}
