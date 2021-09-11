import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHomePageComponent } from './container-home-page.component';

describe('ContainerHomePageComponent', () => {
  let component: ContainerHomePageComponent;
  let fixture: ComponentFixture<ContainerHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
