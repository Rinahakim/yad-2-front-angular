import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerTwoComponent } from './property-container-two.component';

describe('PropertyContainerTwoComponent', () => {
  let component: PropertyContainerTwoComponent;
  let fixture: ComponentFixture<PropertyContainerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
