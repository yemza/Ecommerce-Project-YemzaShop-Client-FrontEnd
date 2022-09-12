import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-home-page',
  templateUrl: './container-home-page.component.html',
  styleUrls: ['./container-home-page.component.css'],
})
export class ContainerHomePageComponent implements OnInit {
  ProcutsList = [
    {
      NameCategories: 'Gaming Products',
      products: [
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
      ],
    },

    {
      NameCategories: 'Movies Products',
      products: [
        {
          nameCategory: 'Movies stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Movies stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Movies stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Movies stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
      ],
    },

    {
      NameCategories: 'Anime Products',
      products: [
        {
          nameCategory: 'Anime stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Anime stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Anime stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
        {
          nameCategory: 'Anime stickers',
          iconUrl: '../../../../assets/images/game1.png',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
