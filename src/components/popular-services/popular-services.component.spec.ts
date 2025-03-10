import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSearchesComponent } from './popular-services.component';

describe('PopularSearchesComponent', () => {
  let component: PopularSearchesComponent;
  let fixture: ComponentFixture<PopularSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularSearchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
