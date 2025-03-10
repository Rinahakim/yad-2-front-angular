import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCategoryComponent } from './homepage-category.component';

describe('HomepageCategoryComponent', () => {
  let component: HomepageCategoryComponent;
  let fixture: ComponentFixture<HomepageCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomepageCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
