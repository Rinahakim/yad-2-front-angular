import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformationService } from '../../services/user-information.service';

@Component({
  selector: 'app-user-menu-component',
  standalone: false,
  
  templateUrl: './user-menu-component.component.html',
  styleUrl: './user-menu-component.component.scss'
})
export class UserMenuComponentComponent implements OnInit{
  nameToProfile !: string;
  firstName !: string;
  userName !: string;

  constructor(private router: Router, private userInformationService :UserInformationService){}
  ngOnInit(){
    this.userInformationService.getUserInformation().subscribe({
      next: (user) => {
        this.nameToProfile = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
        this.firstName = user.firstName;
        this.userName = user.firstName + " " + user.lastName;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  onClickProfileBtn(){
    this.router.navigate(['/account']);
  }
  onClickEditProfile(){
    localStorage.setItem('toOpenUpdateDetailsWind', 'true');
    this.router.navigate(['/account']);
  }
  onClickToHomePage(){
    this.router.navigate(['/homepage']);
  }
  onClickLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/homepage']);
  }
  onClickCloseMenu(){
    
  }
}
