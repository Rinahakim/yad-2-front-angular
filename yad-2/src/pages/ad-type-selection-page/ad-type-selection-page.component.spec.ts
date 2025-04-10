import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTypeSelectionPageComponent } from './ad-type-selection-page.component';

describe('AdTypeSelectionPageComponent', () => {
  let component: AdTypeSelectionPageComponent;
  let fixture: ComponentFixture<AdTypeSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdTypeSelectionPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTypeSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
