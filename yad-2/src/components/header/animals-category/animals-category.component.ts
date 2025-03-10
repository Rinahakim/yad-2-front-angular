import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animals-category',
  standalone: false,
  
  templateUrl: './animals-category.component.html',
  styleUrl: './animals-category.component.scss'
})
export class AnimalsCategoryComponent implements OnInit{
  isInsideAnimalsCategory !: boolean;
  @Output() closeAnimalsCategoryInTablet = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let parent = this.el.nativeElement.closest('.category-in-tablet');
    if(parent === null){
      this.isInsideAnimalsCategory = false;
    }else{
      this.isInsideAnimalsCategory = true;
    }
  }
  onClickCloseCategory(){
    this.closeAnimalsCategoryInTablet.emit(true);
  }
}
