import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorCategoryComponent } from './selector-category.component';

describe('SelectorCategoryComponent', () => {
  let component: SelectorCategoryComponent;
  let fixture: ComponentFixture<SelectorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
