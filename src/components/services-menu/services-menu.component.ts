import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-menu',
  standalone: false,
  
  templateUrl: './services-menu.component.html',
  styleUrl: './services-menu.component.scss'
})
export class ServicesMenuComponent implements OnInit{
  realEstateBtnSelected!: boolean;
  carBtnSelected!: boolean;
  yad2BtnSelected!:boolean;
  jobBtnSelected!:boolean

  constructor(){}

  ngOnInit(): void {
    this.realEstateBtnSelected = true;
    this.carBtnSelected = false;
    this.yad2BtnSelected = false;
    this.jobBtnSelected = false;
  }

  onClickBtn(numBtn:number){
    if(numBtn === 1){
      this.realEstateBtnSelected = true;
      this.carBtnSelected = false;
      this.yad2BtnSelected = false;
      this.jobBtnSelected = false;
    }else if(numBtn === 2){
      this.realEstateBtnSelected = false;
      this.carBtnSelected = true;
      this.yad2BtnSelected = false;
      this.jobBtnSelected = false;
    }else if(numBtn === 3){
      this.realEstateBtnSelected = false;
      this.carBtnSelected = false;
      this.yad2BtnSelected = true;
      this.jobBtnSelected = false;
    }else{
      this.realEstateBtnSelected = false;
      this.carBtnSelected = false;
      this.yad2BtnSelected = false;
      this.jobBtnSelected = true;
    }
  }
}
