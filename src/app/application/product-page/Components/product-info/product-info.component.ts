import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  myLoop = { id : 0 , name : 'The Unicorn' , description : "You know he's got his own personal stylist.", src :'../../../../../assets/images/mockup-6aeffeca.jpg'}

  constructor() { }

  ngOnInit(): void {
  }

}
