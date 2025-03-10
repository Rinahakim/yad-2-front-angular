import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  isSignupModel!:boolean;

  constructor(){}
  ngOnInit(): void {
    this.isSignupModel = false;
  }

  onSignupModelIsOpen(isOpen: boolean){
    this.isSignupModel = isOpen;
  }
}
