import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTypeSelectionComponentComponent } from './ad-type-selection-component.component';

describe('AdTypeSelectionComponentComponent', () => {
  let component: AdTypeSelectionComponentComponent;
  let fixture: ComponentFixture<AdTypeSelectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdTypeSelectionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTypeSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
