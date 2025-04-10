import { Component, OnInit } from '@angular/core';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-ad-type-selection-page',
  standalone: false,
  
  templateUrl: './ad-type-selection-page.component.html',
  styleUrl: './ad-type-selection-page.component.scss'
})
export class AdTypeSelectionPageComponent implements OnInit{

  isAllWindowsOpen : boolean = false;
  openWindow : boolean[] = [true,false,false,false,false,false,false];
  
  constructor(){}

  ngOnInit() {
    
  }
  closeAllContainers(){
    for(let i = 0; i < this.openWindow.length; i++){
      this.openWindow[i] = false;
    }
  }
  updateWindows(value : boolean){
    this.isAllWindowsOpen = value;
  }
  onClickEditBtnOpenContainer(containerIdx: number){
    this.closeAllContainers();
    this.openWindow[containerIdx] = true;
  }
  eventManagementOperation(event : EventManagement){
    if(event.action !== 'next' && event.action !== 'back'){
      return;
    }
    this.closeAllContainers();
    if(event.action === 'next'){
      this.openWindow[event.containerIdx + 1] = true; 
    }else if(event.action === 'back'){
      this.openWindow[event.containerIdx - 1] = true;
    }
    this.openWindow[event.containerIdx] = false;
  }
  isLargerLevelOpen(containerIdx: number){
    for(let i = containerIdx; i < this.openWindow.length; i++ ){
      if(this.openWindow[i]){
        return true;
      }
    }
    return false;
  }
}
