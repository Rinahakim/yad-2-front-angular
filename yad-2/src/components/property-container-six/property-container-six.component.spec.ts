import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyContainerSixComponent } from './property-container-six.component';

describe('PropertyContainerSixComponent', () => {
  let component: PropertyContainerSixComponent;
  let fixture: ComponentFixture<PropertyContainerSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyContainerSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyContainerSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
