import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/_core/models/i-product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  myLoop = { id : 0 , name : 'The Unicorn' , description : "You know he's got his own personal stylist.", src :'../../../../../assets/images/mockup-6aeffeca.jpg'}

  @Input() productSelected : IProduct  | null = null;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['productSelected']) {
      console.log(this.productSelected);
    }
  }

}
