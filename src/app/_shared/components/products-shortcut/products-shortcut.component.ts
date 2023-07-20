import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-shortcut',
  templateUrl: './products-shortcut.component.html',
  styleUrls: ['./products-shortcut.component.css'],
})
export class ProductsShortcutComponent implements OnInit {
  @Input() listOfCategories: any;
  @Input() title: any;

  constructor() {}

  ngOnInit(): void {}
}
