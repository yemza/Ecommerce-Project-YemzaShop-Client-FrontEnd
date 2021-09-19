import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  myLoop = [{ id : 0 , name : 'The Unicorn' , description : "You know he's got his own personal stylist.", src :'../../../../../assets/images/product1.jpg'},
            { id : 1 , name : 'The Fashionista' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product2.jpg'},
            { id : 2 , name : 'The Drooler' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product3.jpg'},
            { id : 3 , name : 'The Pee-er' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product4.jpg'},
            { id : 4 , name : 'Scaredy Dog' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product5.jpg'},
            { id : 5 , name : 'The Player' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product6.jpg'},
            { id : 6 , name : 'The Brawl' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product3.jpg'},
            { id : 7 , name : 'Tip Toe Pub' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product1.jpg'},
            { id : 18 , name : 'Dog Bath' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/product2.jpg'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
