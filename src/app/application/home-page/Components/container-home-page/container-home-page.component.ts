import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../_core/services/category.service";

@Component({
  selector: 'app-container-home-page',
  templateUrl: './container-home-page.component.html',
  styleUrls: ['./container-home-page.component.css'],
})
export class ContainerHomePageComponent implements OnInit {
  listOfCategories$ = this.categotyService.getAllCategory();

  constructor(private categotyService : CategoryService) {}

  ngOnInit(): void {
  }


}
