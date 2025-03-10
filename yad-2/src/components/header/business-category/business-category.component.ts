import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-business-category',
  standalone: false,
  
  templateUrl: './business-category.component.html',
  styleUrl: './business-category.component.scss'
})
export class BusinessCategoryComponent implements OnInit{
  isInsideBusinessCategory !: boolean;
  @Output() closeBusinessCategoryInTablet = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let parent = this.el.nativeElement.closest('.category-in-tablet');
    if(parent === null){
      this.isInsideBusinessCategory = false;
    }else{
      this.isInsideBusinessCategory = true;
    }
  }
  onClickCloseCategory(){
    this.closeBusinessCategoryInTablet.emit(true);
  }
}
