import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesShortcutComponent } from './categories-shortcut.component';

describe('CategoriesShortcutComponent', () => {
  let component: CategoriesShortcutComponent;
  let fixture: ComponentFixture<CategoriesShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesShortcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
