import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-property-container-five',
  standalone: false,
  
  templateUrl: './property-container-five.component.html',
  styleUrl: './property-container-five.component.scss'
})
export class PropertyContainerFiveComponent {
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  @Output() eventManagement = new EventEmitter<EventManagement>();

  constructor(){}

  onSubmit(){
    this.eventManagement.emit({action: 'next', containerIdx: 4});
  }

  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 4});
  }
}
