import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  standalone: false,
  
  templateUrl: './advertising.component.html',
  styleUrl: './advertising.component.scss'
})
export class AdvertisingComponent implements OnInit{
  selectImg1 !: boolean;
  selectImg2 !: boolean;
  selectImg3 !: boolean;

  constructor(){}
  ngOnInit(): void {
    this.selectImg1 = true;
    this.selectImg2 = false;
    this.selectImg3 = false;
  }

  showImg(num : number){
    if(num === 1){
      this.selectImg1 = true;
      this.selectImg2 = false;
      this.selectImg3 = false;
    }else if(num === 2){
      this.selectImg1 = false;
      this.selectImg2 = true;
      this.selectImg3 = false;
    }else{
      this.selectImg1 = false;
      this.selectImg2 = false;
      this.selectImg3 = true;
    }
  }
}
