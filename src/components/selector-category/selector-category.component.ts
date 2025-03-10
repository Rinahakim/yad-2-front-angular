import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../models/apartment';

@Component({
  selector: 'app-selector-category',
  standalone: false,
  
  templateUrl: './selector-category.component.html',
  styleUrl: './selector-category.component.scss'
})
export class SelectorCategoryComponent implements OnInit{
  realEstateBtnSelected!: boolean;
  carBtnSelected!: boolean;
  yad2BtnSelected!:boolean;
  currentIndex = 0;
  postsPerPage = 4;
  realEstatePosts:Apartment[] = [
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:13000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:13000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:13000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:13000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:14000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:14000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:14000000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202411/13/2_5/o/y2_1pa_010342_20241113121708.jpeg?c=3&w=309&h=150",price:14000000, location:"שלומית, תל אביב", roomsNumber: 3}
  ];
  CarPosts:Apartment[] = [
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:50000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:50000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:50000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:50000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:80000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:80000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:80000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202502/13/1_8/o/y2_1pa_010172_20250213125507.jpeg?c=3&w=309&h=150",price:80000, location:"שלומית, תל אביב", roomsNumber: 3}
  ];
  yad2Posts:Apartment[] = [
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", roomsNumber: 3},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", roomsNumber: 3}
  ];

  constructor(){}
  
  ngOnInit(): void {
    this.realEstateBtnSelected = true;
    this.carBtnSelected = false;
    this.yad2BtnSelected = false;
  }
  onClickBtn(numBtn:number){
    if(numBtn === 1){
      this.realEstateBtnSelected = true;
      this.carBtnSelected = false;
      this.yad2BtnSelected = false;
      this.currentIndex = 0;
    }else if(numBtn === 2){
      this.realEstateBtnSelected = false;
      this.carBtnSelected = true;
      this.yad2BtnSelected = false;
      this.currentIndex = 0;
    }else{
      this.realEstateBtnSelected = false;
      this.carBtnSelected = false;
      this.yad2BtnSelected = true;
      this.currentIndex = 0;
    }
  }
  get visiblePosts(): Apartment[] {
    if(this.realEstateBtnSelected){
      return this.realEstatePosts.slice(this.currentIndex, this.currentIndex + this.postsPerPage);
    }else if(this.carBtnSelected){
      return this.CarPosts.slice(this.currentIndex, this.currentIndex + this.postsPerPage);
    }else{
      return this.yad2Posts.slice(this.currentIndex, this.currentIndex + this.postsPerPage);
    }
  }
  next() {
    let length = this.getArrayLength()
    if (this.currentIndex + this.postsPerPage < length) {
      this.currentIndex += this.postsPerPage;
    }
  }
  prev() {
    if (this.currentIndex - this.postsPerPage >= 0) {
      this.currentIndex -= this.postsPerPage;
    }
  }
  getArrayLength(){
    return (this.realEstateBtnSelected) ? this.realEstatePosts.length : 
      (this.carBtnSelected) ? this.CarPosts.length : this.yad2Posts.length;
  }
}
