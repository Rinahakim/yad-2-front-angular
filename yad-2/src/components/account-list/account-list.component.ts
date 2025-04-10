import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserInformationService } from '../../services/user-information.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account-list',
  standalone: false,
  
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent implements OnInit{
  isLoggedin !: boolean;
  nameToProfile !: string;
  userName !: string;
  userEmail !: string;
  isOpenListWind !: boolean;
  @Output() updateDetailsRequired = new EventEmitter<boolean>();
  @Input() isOpenListWindInAccount$!: BehaviorSubject<boolean>;
  isOpenListWindInAccount: boolean = false;

  constructor(private authenticationService : AuthenticationService,
  private router: Router, private userInformationService: UserInformationService){}

  ngOnInit() {
    this.isLoggedin = this.authenticationService.isLoggedIn();
    // this.isOpenListWindInAccount = localStorage.getItem('isOpenListWindInAccount')? true:false;
    this.isOpenListWindInAccount$.subscribe(isOpen => {
      this.isOpenListWindInAccount = isOpen;
      this.isOpenListWind = isOpen;
    });
    this.userInformationService.user$.subscribe(user => {
      if (user) {
        this.userName = `${user.firstName} ${user.lastName}`;
        this.nameToProfile = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
        this.userEmail = user.email;
      }
    });
  }

  onClickLoginBtn(){
    if(this.authenticationService.isLoggedIn()){
      this.isLoggedin = true;
      return;
    }
    localStorage.removeItem('inSignupModel');
    this.router.navigate(['/login']);
  }
  onClickLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  onClickUpdateDetails(){
    localStorage.setItem('toOpenUpdateDetailsWind', JSON.stringify(true));
    // localStorage.removeItem('isOpenListWindInAccount');
    this.isOpenListWindInAccount = false;
    this.isOpenListWind = false;
    this.updateDetailsRequired.emit(true);
  }
  onClickCloseList(){
    // localStorage.removeItem('isOpenListWindInAccount');
    this.isOpenListWind = false;
    this.isOpenListWindInAccount = false;
  }
}
