import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsForRentComponent } from './apartments-for-rent.component';

describe('ApartmentsForRentComponent', () => {
  let component: ApartmentsForRentComponent;
  let fixture: ComponentFixture<ApartmentsForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentsForRentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentsForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
