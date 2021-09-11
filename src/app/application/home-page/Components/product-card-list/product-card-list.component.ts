import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {
   
  myLoop = [{ id : 0 , name : 'The Unicorn' , description : "You know he's got his own personal stylist.", src :'../../../../../assets/images/mockup-6aeffeca.jpg'},
            { id : 1 , name : 'The Fashionista' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-52c49241.jpg'},
            { id : 2 , name : 'The Drooler' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-306a1416.jpg'},
            { id : 3 , name : 'The Pee-er' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-954d2eff.jpg'},
            { id : 4 , name : 'Scaredy Dog' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-a979a43d.jpg'},
            { id : 5 , name : 'The Player' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-be79c598.jpg'},
            { id : 6 , name : 'The Brawl' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-de719380.jpg'},
            { id : 7 , name : 'Tip Toe Pub' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-f7e1805f.jpg'},
            { id : 18 , name : 'Dog Bath' , description : "You know he's got his own personal stylist.", src : '../../../../../assets/images/mockup-fc750eaa.jpg'},

]
  constructor() { }

  ngOnInit(): void {
  }

}
