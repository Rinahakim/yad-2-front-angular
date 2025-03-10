import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-professionals-category',
  standalone: false,
  
  templateUrl: './professionals-category.component.html',
  styleUrl: './professionals-category.component.scss'
})
export class ProfessionalsCategoryComponent implements OnInit{
  isInsideProfessionalsCategory !: boolean;
  @Output() closeProfessionalsCategoryInTablet = new EventEmitter<boolean>();
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    let parent = this.el.nativeElement.closest('.category-in-tablet');
    if(parent === null){
      this.isInsideProfessionalsCategory = false;
    }else{
      this.isInsideProfessionalsCategory = true;
    }
  }
  onClickCloseCategory(){
    this.closeProfessionalsCategoryInTablet.emit(true);
  }
}
