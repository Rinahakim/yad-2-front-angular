import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsCategoryComponent } from './professionals-category.component';

describe('ProfessionalsCategoryComponent', () => {
  let component: ProfessionalsCategoryComponent;
  let fixture: ComponentFixture<ProfessionalsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
