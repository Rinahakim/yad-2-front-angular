import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateCategoryComponent } from './real-estate-category.component';

describe('RealEstateCategoryComponent', () => {
  let component: RealEstateCategoryComponent;
  let fixture: ComponentFixture<RealEstateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealEstateCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
