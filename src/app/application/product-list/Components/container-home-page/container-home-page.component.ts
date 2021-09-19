import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/_core/models/i-product';
import { ProductService } from 'src/app/_core/services/product.service';

@Component({
  selector: 'app-container-home-page',
  templateUrl: './container-home-page.component.html',
  styleUrls: ['./container-home-page.component.css']
})
export class ContainerHomePageComponent implements OnInit ,OnDestroy  {
  
  productsList : IProduct[] = [];
  private subs = new Subscription();

  constructor(private productService :ProductService) { }
  

  ngOnInit(): void {
    this.getAllProducts();
  }



  getAllProducts(){
    this.subs.add(
      this.productService.getAllProducts().subscribe(response =>{
        console.log("product List ******" , response)
        this.productsList = response
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    }

}
