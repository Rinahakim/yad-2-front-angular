import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UserInformationService } from '../../services/user-information.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
  userName !: string;
  firstName !: string;
  nameToProfile !: string;
  openUserMenu : boolean = false;
  @Output() toggleListWindEvent = new EventEmitter<boolean>();

  constructor(public router : Router, private authenticationService: AuthenticationService,
    private userInformationService: UserInformationService){}
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
    if(this.isLoggedin){
      this.extractionName();
    }
    if(this.router.url !== '/account'){
      localStorage.removeItem('toOpenUpdateDetailsWind');
      localStorage.removeItem('isOpenListWindInAccount');
    }
  }
  extractionName(){
    this.userInformationService.user$.subscribe(user => {
      if (user) {
        this.userName = `${user.firstName} ${user.lastName}`;
        this.firstName = user.firstName;
        this.nameToProfile = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
      }
    });
    this.userInformationService.getUserInformation().subscribe();
  }
  onClickAmborger(){
    this.is_amborger_list_open = true;
    this.isClosingModel = false;
  }
  onClickAccount(){
    this.router.navigate(['/account']);
  }
  onClickX(){
    this.isClosingModel = true;
    setTimeout(() => {
      this.is_amborger_list_open = false;
      this.isClosingModel = false;
    }, 500);
    // this.is_amborger_list_open = false;
  }
  onClickLogo(){
    this.router.navigate(['/homepage']);
  }
  onClickAmborgerBtnInAccount(){
    // localStorage.setItem('isOpenListWindInAccount', 'true');
    this.toggleListWindEvent.emit(true);
  }
  onClickBack()
  {
    this.router.navigate(['/publishing-page']);
  }
  onClickAmborgerBtnInPublishPrivatePost(){
    this.openUserMenu = true;
  }
  onClickPublishingBtn(){
    if(this.isLoggedin){
      this.router.navigate(['/publishing-page']);
    }else{
      this.router.navigate(['/login']);
    }
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
