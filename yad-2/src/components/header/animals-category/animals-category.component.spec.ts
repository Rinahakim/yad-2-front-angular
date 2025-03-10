import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsCategoryComponent } from './animals-category.component';

describe('AnimalsCategoryComponent', () => {
  let component: AnimalsCategoryComponent;
  let fixture: ComponentFixture<AnimalsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
