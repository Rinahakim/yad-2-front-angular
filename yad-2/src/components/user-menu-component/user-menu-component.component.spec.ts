import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuComponentComponent } from './user-menu-component.component';

describe('UserMenuComponentComponent', () => {
  let component: UserMenuComponentComponent;
  let fixture: ComponentFixture<UserMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMenuComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
