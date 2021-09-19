import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTableProductsComponent } from './cart-table-products.component';

describe('CartTableProductsComponent', () => {
  let component: CartTableProductsComponent;
  let fixture: ComponentFixture<CartTableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTableProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
