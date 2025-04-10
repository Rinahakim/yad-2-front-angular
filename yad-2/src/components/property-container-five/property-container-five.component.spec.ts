import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerFiveComponent } from './property-container-five.component';

describe('PropertyContainerFiveComponent', () => {
  let component: PropertyContainerFiveComponent;
  let fixture: ComponentFixture<PropertyContainerFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
