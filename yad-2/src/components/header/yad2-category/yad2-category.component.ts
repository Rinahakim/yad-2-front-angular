import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yad2-category',
  standalone: false,
  
  templateUrl: './yad2-category.component.html',
  styleUrl: './yad2-category.component.scss'
})
export class Yad2CategoryComponent implements OnInit{
  isInsideYad2Category !:boolean;
  
  @Output() closeYad2CategoryInTablet = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}
    
    ngOnInit() {
      let parent = this.el.nativeElement.closest('.category-in-tablet');
      if(parent === null){
        this.isInsideYad2Category = false;
      }else{
        this.isInsideYad2Category = true;
      }
    }
    onClickCloseCategory(){
      this.closeYad2CategoryInTablet.emit(true);
    }
}
