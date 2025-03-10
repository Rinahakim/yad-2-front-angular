import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  is_amborger_list_open !: boolean;
  hoverCarInTablet !: boolean;
  hoverYad2InTablet !:boolean;
  hoverAnimalsInTablet !:boolean;
  hoverBusinessInTablet !: boolean;
  hoverProfessionalsInTablet !: boolean;
  hoverRealEstateInTablet !:boolean;
  hoverJobsInTablet !:boolean;
  hoverSomeCategory !: boolean;
  closeCategory !: boolean;
  hoverRealEstate !:boolean;
  hoverCar !: boolean;
  hoverYad2 !: boolean;
  hoverJobs !: boolean;
  hoverBusiness !:boolean;
  hoverAnimals !:boolean;
  hoverProfessionals !:boolean;
  isLoggedin !:boolean;
  isClosingModel !:boolean;

  constructor(private router : Router, private authenticationService: AuthenticationService){}
  ngOnInit(): void {
    this.isLoggedin = this.authenticationService.isLoggedIn();
    this.is_amborger_list_open = false;
    this.hoverCarInTablet = false;
    this.hoverYad2InTablet = false;
    this.hoverProfessionalsInTablet = false;
    this.hoverAnimalsInTablet = false;
    this.hoverBusinessInTablet = false;
    this.hoverRealEstateInTablet = false;
    this.hoverJobsInTablet = false;
    this.hoverSomeCategory = false;
    this.closeCategory = false;
    this.hoverCar = false;
    this.hoverYad2 = false;
    this.hoverJobs = false;
    this.hoverBusiness = false;
    this.hoverAnimals = false;
    this.hoverProfessionals = false;
    this.hoverRealEstate = false;
  }
  onClickAmborger(){
    this.is_amborger_list_open = true;
    this.isClosingModel = false;
  }
  onClickX(){
    this.isClosingModel = true;
    setTimeout(() => {
      this.is_amborger_list_open = false;
      this.isClosingModel = false;
    }, 500);
    // this.is_amborger_list_open = false;
  }
  getHoverSomeCategory(){
    return this.hoverCarInTablet || this.hoverRealEstateInTablet || this.hoverYad2InTablet
    || this.hoverJobsInTablet || this.hoverBusinessInTablet || this.hoverAnimalsInTablet || this.hoverProfessionalsInTablet;
  }
  handleCloseCategory(){
    this.closeCategory = true;
  }
  handleMouseLeave(){
    this.closeCategory = true;
  
    setTimeout(() => {
      if (this.closeCategory) {
        this.hoverRealEstateInTablet = false;
        this.hoverBusinessInTablet = false;
        this.hoverProfessionalsInTablet = false;
        this.hoverAnimalsInTablet = false;
        this.hoverYad2InTablet = false;
        this.hoverJobsInTablet = false;
        this.hoverCarInTablet = false;
        this.closeCategory = false; 
      }
    }, 500);
  }
  
  cancelClose() {
    this.closeCategory = false;
  }

  onClickLoginBtn(){
    if(this.authenticationService.isLoggedIn()){
      this.isLoggedin = true;
      return;
    }
    localStorage.removeItem('inSignupModel');
    this.router.navigate(['/login']);
  }
  onClickLogOut(){
    localStorage.removeItem('token');
    this.isLoggedin = false;
  }
}
