import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-apartment',
  standalone: false,
  
  templateUrl: './search-apartment.component.html',
  styleUrl: './search-apartment.component.scss'
})
export class SearchApartmentComponent implements OnInit {
  form!: FormGroup;
  searchTerm: string = '';
  rentalFilterModel = false;
  typeFilterModel = false;
  priceFilterModel = false;
  roomsFilterModel = false;
  moreFilterModel = false;
  selectAllApartment = false;
  selectAllHomes = false;
  popUpModalMore = false;
  min:number = 0;
  max:number = 20000;
  minPrice: number = this.min;
  maxPrice: number = this.max;
  buttonItems = [
    "דירה", "דירת גן", "גג/ פנטהאוז", "דופלקס", "תיירות ונופש",
    "מרתף/ פרטר", "טריפלקס", "יחידת דיור", "החלפת דירות", "סאבלט", "סטודיו/ לופט"
  ];
  homeItems = [
    "בית פרטי/ קוטג'", "דו משפחתי", "משק חקלאי/ נחלה", "משק עזר"
  ];
  otherItems = [
    "מגרשים", "דיור מוגן", "בניין מגורים", "מחסן", "חניה", 
    "קב' רכישה/ זכות לנכס", "כללי"
  ];  
  selectedItem = signal<boolean[]>(new Array(22).fill(false));

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      // category: ['all'],
      // priceRange: ['all']
    });
  }

  onSubmitSearch(){

  }

  onClickCategoryFilter(numCategory: number){
    if(numCategory === 1){
      this.rentalFilterModel = !this.rentalFilterModel;
      this.typeFilterModel = false;
      this.priceFilterModel = false;
      this.roomsFilterModel = false;
      this.moreFilterModel = false;
    }else if(numCategory === 2){
      this.rentalFilterModel = false;
      this.typeFilterModel = !this.typeFilterModel;
      this.priceFilterModel = false;
      this.roomsFilterModel = false;
      this.moreFilterModel = false;
    }else if(numCategory === 3){
      this.rentalFilterModel = false;
      this.typeFilterModel = false;
      this.priceFilterModel = !this.priceFilterModel;
      this.roomsFilterModel = false;
      this.moreFilterModel = false;
    }else if(numCategory === 4){
      this.rentalFilterModel = false;
      this.typeFilterModel = false;
      this.priceFilterModel = false;
      this.roomsFilterModel = !this.roomsFilterModel;
      this.moreFilterModel = false;
    }else{
      this.rentalFilterModel = false;
      this.typeFilterModel = false;
      this.priceFilterModel = false;
      this.roomsFilterModel = false;
      this.moreFilterModel = !this.moreFilterModel;
    }
  }
  onClickAll(num: number){
    if(num === 1){
      this.selectAllApartment = !this.selectAllApartment;
      if (this.selectAllApartment === false) {
        this.selectedItem.update(arr =>
          arr.map((val, index) => (index <= 11 ? false : val))
        );
      }
    }else{
      this.selectAllHomes = !this.selectAllHomes;
      if(this.selectAllHomes === false){
        this.selectedItem.update(arr =>
          arr.map((val, index) => (index > 11 && index <= 15 ? false : val))
        );
      }
    }
  }
  
  onClickFilterBtn(num: number){
    if(this.selectAllApartment && num <= 11){
      this.selectAllApartment = false;
      this.selectedAllApartment();
    }
    if(this.selectAllHomes && num > 11){
      this.selectAllHomes = false;
      this.selectedAllHomes();
    }

    this.selectedItem.update(arr => {
      const newArr = [...arr]; 
      newArr[num] = !newArr[num]; 
      return newArr;
    });
  }
  selectedAllApartment(){
    this.selectedItem.update(arr =>
      arr.map((val, index) => (index > 0 && index <= 22 ? true : val))
    );
  }
  selectedAllHomes(){
    this.selectedItem.update(arr =>
      arr.map((val, index) => (index > 22 ? true : val))
    );
  }
  onClickReset(){
    this.selectAllApartment = false;
    this.selectAllHomes = false;
    this.selectedItem.update(arr =>
      arr.map((val, index) => (index > 0 && index <= 22 ? false : val))
    );
  }
  updateMin() {
    if (this.minPrice >= this.maxPrice) {
      this.minPrice = this.maxPrice - 1000; 
    }
  }

  updateMax() {
    if (this.maxPrice <= this.minPrice) {
      this.maxPrice = this.minPrice + 1000;
    }
  }
  onClickMoreFilters(){
    this.popUpModalMore = true;
  }
}
