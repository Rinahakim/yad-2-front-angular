import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingCategoryComponent } from './publishing-category.component';

describe('PublishingCategoryComponent', () => {
  let component: PublishingCategoryComponent;
  let fixture: ComponentFixture<PublishingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishingCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
