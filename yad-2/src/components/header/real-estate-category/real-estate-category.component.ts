import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-real-estate-category',
  standalone: false,
  
  templateUrl: './real-estate-category.component.html',
  styleUrl: './real-estate-category.component.scss'
})
export class RealEstateCategoryComponent implements OnInit{
  isInsideRealEstateCategory = false;
  @Output() closeRealEstateCategoryInTablet = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private router: Router) {}
  
  ngOnInit() {
    let parent = this.el.nativeElement.closest('.category-in-tablet');
    if(parent === null){
      this.isInsideRealEstateCategory = false;
    }else{
      this.isInsideRealEstateCategory = true;
    }
  }
  onClickCloseCategory(){
    this.closeRealEstateCategoryInTablet.emit(true);
  }
  onClickApartmentForRent(){
    this.router.navigate(['/apartments-for-rent']);
  }
}
