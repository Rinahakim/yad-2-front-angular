import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerSevenComponent } from './property-container-seven.component';

describe('PropertyContainerSevenComponent', () => {
  let component: PropertyContainerSevenComponent;
  let fixture: ComponentFixture<PropertyContainerSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerSevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
