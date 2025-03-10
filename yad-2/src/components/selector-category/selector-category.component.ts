import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../models/apartment';
import { ApartmentServiceService } from '../../services/apartment-service.service';
import { Router } from '@angular/router';

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
  actionNext = false;
  actionPrev = false;
  realEstatePosts:Apartment[] = [];
  CarPosts:any[] = [
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010777_20250225152436.jpeg?w=828&h=828&c=9",price:50000, year: 2015, description: "מיצובישי אאוטלנדר"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:150000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:150000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:150000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:400000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:88000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_3/o/y2_1pa_010362_20250225145054.jpeg?w=1200&h=1200&c=9",price:90000, year: 2015, description: "מרצדס-בנץ"},
    {img:"https://img.yad2.co.il/Pic/202502/25/1_1/o/y2_1_02781_20250225135127.jpeg?c=3&w=309&h=150",price:80000, year: 2015, description: "מיני קופר"}
  ];
  yad2Posts:any[] = [
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:1000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://img.yad2.co.il/Pic/202404/25/3_0/o/y2_1_09198_20240425162810.jpeg?c=3&w=309&h=150",price:15000, location:"שלומית, תל אביב", description: "כורסת טלוויזיה"},
    {img:"https://market.yad2.co.il/cdn/shop/files/y2_0pa_010049_20250112163755.jpg?v=1736692703&width=376",price:50, location:"גבעתיים", description: "בלנדר"}
  ];

  constructor(private apartmentService: ApartmentServiceService, public router: Router){}
  
  ngOnInit(): void {
    this.realEstateBtnSelected = true;
    this.carBtnSelected = false;
    this.yad2BtnSelected = false;
    this.apartmentService.getAllApartment().subscribe({
      next: (res) => {
        this.realEstatePosts = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
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
  get visiblePosts(): any[] {
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
      this.actionPrev = true;
      this.actionNext = false;
    }
  }
  prev() {
    if (this.currentIndex - this.postsPerPage >= 0) {
      this.currentIndex -= this.postsPerPage;
      this.actionNext = true;
      this.actionPrev = false;
    }
  }
  getArrayLength(){
    return (this.realEstateBtnSelected) ? this.realEstatePosts.length : 
      (this.carBtnSelected) ? this.CarPosts.length : this.yad2Posts.length;
  }
}
