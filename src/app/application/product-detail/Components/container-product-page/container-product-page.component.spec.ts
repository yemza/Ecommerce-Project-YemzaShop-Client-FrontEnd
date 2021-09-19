import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductPageComponent } from './container-product-page.component';

describe('ContainerProductPageComponent', () => {
  let component: ContainerProductPageComponent;
  let fixture: ComponentFixture<ContainerProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
