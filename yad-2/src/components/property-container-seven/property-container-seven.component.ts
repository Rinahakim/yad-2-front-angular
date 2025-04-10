import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-property-container-seven',
  standalone: false,
  
  templateUrl: './property-container-seven.component.html',
  styleUrl: './property-container-seven.component.scss'
})
export class PropertyContainerSevenComponent {
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  @Output() eventManagement = new EventEmitter<EventManagement>();
  
  constructor(){}

  onSubmit(){
    this.eventManagement.emit({action: 'next', containerIdx: 6});
  }

  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 6});
  }
}
