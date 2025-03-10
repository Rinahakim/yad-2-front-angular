import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yad2CategoryComponent } from './yad2-category.component';

describe('Yad2CategoryComponent', () => {
  let component: Yad2CategoryComponent;
  let fixture: ComponentFixture<Yad2CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Yad2CategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yad2CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
