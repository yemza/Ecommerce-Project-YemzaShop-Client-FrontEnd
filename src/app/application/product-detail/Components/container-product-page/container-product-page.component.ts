import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/_core/models/i-product';
import { ProductService } from 'src/app/_core/services/product.service';

@Component({
  selector: 'app-container-product-page',
  templateUrl: './container-product-page.component.html',
  styleUrls: ['./container-product-page.component.css']
})
export class ContainerProductPageComponent implements OnInit,OnDestroy {
   productId : any ;
   productSelected : IProduct  | null = null;

   private subs = new Subscription();

   
   constructor(private route: ActivatedRoute,
                private productService :ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId)  
    this.getProductById();
  }


  getProductById(){
    this.subs.add(
      this.productService.getProductById(this.productId).subscribe(response =>{
        console.log(response)
        this.productSelected =response
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    }
}