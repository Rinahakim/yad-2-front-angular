import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerFourComponent } from './property-container-four.component';

describe('PropertyContainerFourComponent', () => {
  let component: PropertyContainerFourComponent;
  let fixture: ComponentFixture<PropertyContainerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
