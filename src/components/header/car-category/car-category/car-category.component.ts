import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-category',
  standalone: false,
  
  templateUrl: './car-category.component.html',
  styleUrl: './car-category.component.scss'
})
export class CarCategoryComponent implements OnInit{
  isInsideCarCategory = false;
  @Output() closeCarCategoryInTablet = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let parent = this.el.nativeElement.closest('.car-category-in-tablet');
    if(parent === null){
      this.isInsideCarCategory = false;
    }else{
      this.isInsideCarCategory = true;
    }
  }
  onClickCloseCategory(){
    this.closeCarCategoryInTablet.emit(true);
  }
}
