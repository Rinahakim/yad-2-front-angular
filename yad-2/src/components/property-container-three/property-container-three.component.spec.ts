import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerThreeComponent } from './property-container-three.component';

describe('PropertyContainerThreeComponent', () => {
  let component: PropertyContainerThreeComponent;
  let fixture: ComponentFixture<PropertyContainerThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
