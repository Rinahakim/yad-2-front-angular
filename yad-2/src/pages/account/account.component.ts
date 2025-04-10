import { Component, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account',
  standalone: false,
  
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit{
  toOpenUpdateDetailsWind !: boolean;
  // isOpenListWindInAccount !: boolean
  isOpenListWindInAccount$ = new BehaviorSubject<boolean>(false);

  constructor(){}
  ngOnInit(): void {
    const savedStateUpdateDetailsWind = localStorage.getItem('toOpenUpdateDetailsWind');
    if(savedStateUpdateDetailsWind !== null){
      this.toOpenUpdateDetailsWind = JSON.parse(savedStateUpdateDetailsWind);
    }else{
      this.toOpenUpdateDetailsWind = false;
    }
    // this.isOpenListWindInAccount = localStorage.getItem('isOpenListWindInAccount')? true:false;
  }

  handleUpdateDetails(eventValue: boolean) {
    if(eventValue === true){
      this.toOpenUpdateDetailsWind = true;
    }else{
      this.toOpenUpdateDetailsWind = false;
    }
  }
  toggleListWind(isOpen: boolean) {
    this.isOpenListWindInAccount$.next(isOpen);
  }
}
