import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  isSignupModel!:boolean;

  constructor(public router: Router){}
  ngOnInit(): void {
    this.isSignupModel = false;
  }

  onSignupModelIsOpen(isOpen: boolean){
    this.isSignupModel = isOpen;
  }
}
