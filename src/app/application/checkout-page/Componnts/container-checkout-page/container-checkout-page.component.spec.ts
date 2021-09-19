import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCheckoutPageComponent } from './container-checkout-page.component';

describe('ContainerCheckoutPageComponent', () => {
  let component: ContainerCheckoutPageComponent;
  let fixture: ComponentFixture<ContainerCheckoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCheckoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
