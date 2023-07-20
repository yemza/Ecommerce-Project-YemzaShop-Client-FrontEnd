import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categories-shortcut',
  templateUrl: './categories-shortcut.component.html',
  styleUrls: ['./categories-shortcut.component.css'],
})
export class CategoriesShortcutComponent implements OnInit {

  @Input() listOfCategories: any;
  @Input() title: any;
  constructor() {}

  ngOnInit(): void {}
}
