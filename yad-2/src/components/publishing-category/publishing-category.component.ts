import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishing-category',
  standalone: false,
  
  templateUrl: './publishing-category.component.html',
  styleUrl: './publishing-category.component.scss'
})
export class PublishingCategoryComponent implements OnInit{

  popupWindow :boolean = false;
  isUserClickRealEstateCategory :boolean = false;

  constructor(private router: Router){}

  ngOnInit() {
    
  }
  onClickCategory(isClickRealEstateCategory = false){
    if(isClickRealEstateCategory){
      this.isUserClickRealEstateCategory = true;
    }
    this.popupWindow = true;
  }
  onClickCloseModal(){
    this.popupWindow = false;
  }
  onClickPublishPrivatePost(isUserClickRealEstateCategory: boolean){
    if(isUserClickRealEstateCategory){
      this.router.navigate(['/publish-private-post']);
    }
  }
}
