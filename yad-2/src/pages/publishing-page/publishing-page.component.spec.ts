import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingPageComponent } from './publishing-page.component';

describe('PublishingPageComponent', () => {
  let component: PublishingPageComponent;
  let fixture: ComponentFixture<PublishingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
