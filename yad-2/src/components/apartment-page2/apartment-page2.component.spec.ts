import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPage2Component } from './apartment-page2.component';

describe('ApartmentPage2Component', () => {
  let component: ApartmentPage2Component;
  let fixture: ComponentFixture<ApartmentPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
