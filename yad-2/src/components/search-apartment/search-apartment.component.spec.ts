import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchApartmentComponent } from './search-apartment.component';

describe('SearchApartmentComponent', () => {
  let component: SearchApartmentComponent;
  let fixture: ComponentFixture<SearchApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
