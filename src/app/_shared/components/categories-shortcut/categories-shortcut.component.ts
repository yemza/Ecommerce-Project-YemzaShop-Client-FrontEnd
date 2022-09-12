import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-shortcut',
  templateUrl: './categories-shortcut.component.html',
  styleUrls: ['./categories-shortcut.component.css'],
})
export class CategoriesShortcutComponent implements OnInit {
  lisgtOfCategories: any = [
    {
      nameCategory: 'Gaming stickers',
      iconUrl: '../../../../assets/images/game1.png',
    },
    {
      nameCategory: 'Gaming stickers',
      iconUrl: '../../../../assets/images/game1.png',
    },
    {
      nameCategory: 'Gaming stickers',
      iconUrl: '../../../../assets/images/game1.png',
    },
    {
      nameCategory: 'Gaming stickers',
      iconUrl: '../../../../assets/images/game1.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
