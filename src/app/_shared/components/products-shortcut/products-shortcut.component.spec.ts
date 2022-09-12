import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShortcutComponent } from './products-shortcut.component';

describe('ProductsShortcutComponent', () => {
  let component: ProductsShortcutComponent;
  let fixture: ComponentFixture<ProductsShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsShortcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
