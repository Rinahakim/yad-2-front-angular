import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  is_amborger_list_open !: boolean;
  hoverCar !: boolean;
  hoverCarInTablet !: boolean;
  hoverSomeCategory !: boolean;
  closeCategory !: boolean;

  constructor(){
    this.is_amborger_list_open = false;
    this.hoverCar = false;
    this.hoverCarInTablet = false;
    this.hoverSomeCategory = false;
    this.closeCategory = false;
  }
  onClickAmborger(){
    this.is_amborger_list_open = true;
  }
  onClickX(){
    this.is_amborger_list_open = false;
  }
  getHoverSomeCategory(){
    return this.hoverCarInTablet;
  }
  handleCloseCategory(){
    this.closeCategory = true;
  }
  handleMouseLeave(){
    this.closeCategory = true;
  
    setTimeout(() => {
      if (this.closeCategory) {
        this.hoverCarInTablet = false;
        this.closeCategory = false; 
      }
    }, 500);
  }
  
  cancelClose() {
    this.closeCategory = false;
  }
}
