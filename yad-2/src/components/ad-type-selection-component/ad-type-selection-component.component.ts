import {  AfterContentChecked, Component, ContentChildren, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-ad-type-selection-component',
  standalone: false,
  
  templateUrl: './ad-type-selection-component.component.html',
  styleUrl: './ad-type-selection-component.component.scss'
})
export class AdTypeSelectionComponentComponent{
  @Output() eventManagement = new EventEmitter<EventManagement>();
  @Output() isAllWindowsOpen = new EventEmitter<boolean>();
  @Input() showDoneIcon : boolean = false;
  isClickOnRent : boolean = false;
  options: string[] = ['בעל הנכס', 'שוכר', 'אחר'];
  selectedOption: string | null = null;
  
  constructor(){}
  
  onClickRent(){
    this.isClickOnRent = true;
  }
  onClickBtnToSelect(option: string) {
    this.selectedOption = this.selectedOption === option ? null : option;
    if(option === 'בעל הנכס' && this.selectedOption){
      this.isAllWindowsOpen.emit(true);
      this.eventManagement.emit({action: 'next', containerIdx: 0});
    }
  }
}
