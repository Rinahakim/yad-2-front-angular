import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-jobs-category',
  standalone: false,
  
  templateUrl: './jobs-category.component.html',
  styleUrl: './jobs-category.component.scss'
})
export class JobsCategoryComponent implements OnInit{
  isInsideJobsCategory = false;
    @Output() closeJobsCategoryInTablet = new EventEmitter<boolean>();
  
    constructor(private el: ElementRef) {}
  
    ngOnInit() {
      let parent = this.el.nativeElement.closest('.category-in-tablet');
      if(parent === null){
        this.isInsideJobsCategory = false;
      }else{
        this.isInsideJobsCategory = true;
      }
    }
    onClickCloseCategory(){
      this.closeJobsCategoryInTablet.emit(true);
    }
}
