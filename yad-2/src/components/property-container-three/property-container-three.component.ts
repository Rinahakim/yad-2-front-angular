import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventManagement } from '../../models/eventManagementModel';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-property-container-three',
  standalone: false,
  
  templateUrl: './property-container-three.component.html',
  styleUrl: './property-container-three.component.scss'
})
export class PropertyContainerThreeComponent implements OnInit{
  
  @Output() eventManagement = new EventEmitter<EventManagement>();
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  formContainer3 !: FormGroup;
  isOpenRoomsNumberWind: boolean = false;
  rotateIconInRoomsNumber : boolean = false;
  selectedRoomsNumber!: number; 
  ShowerRoomsSignal = signal<string | null>('1');
  ParkingSignal = signal<string | null>('ללא'); 
  PorchSignal = signal<string | null>('ללא');
  roomsNumberOption : number[] = 
  [1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,
    7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5
  ];
  selectedPropertyCharacteristics :any[] = 
  [
    {Characteristic: 'גישה לנכים', isSelected: false},{Characteristic: 'מיזוג', isSelected: false},
    {Characteristic: "סורגים", isSelected: false},{Characteristic: "דוד שמש", isSelected: false},
    {Characteristic: "מעלית", isSelected: false},{Characteristic: "לשותפים", isSelected: false},
    {Characteristic: "ריהוט", isSelected: false},{Characteristic: "יחידת דיור", isSelected: false},
    {Characteristic: "מטבח כשר", isSelected: false},{Characteristic: "חיות מחמד", isSelected: false},
    {Characteristic: "משופצת", isSelected: false},{Characteristic: 'ממ"ד', isSelected: false},
    {Characteristic: "דלתות רב-בריח", isSelected: false},{Characteristic: "מזגן טורנדו", isSelected: false},
    {Characteristic: "מחסן", isSelected: false}
  ];
  message : string[] = 
  ['מרגיש לנו שהטקסט שכתבת קצר מידי','יופי, המודעה הולכת לכיוון הנכון','אוטוטו...','בול!'];
  currentMessage : string = '';

  constructor(){}

  ngOnInit() {
    this.formContainer3 = new FormGroup({
      RoomsNumber: new FormControl(this.selectedRoomsNumber, Validators.required),
    });
  }
  
  onSubmit(){
    if(this.formContainer3.invalid){
      return;
    }
    this.eventManagement.emit({action: 'next', containerIdx: 2});
  }
  onClickRoomsNumber(){
    this.isOpenRoomsNumberWind = !this.isOpenRoomsNumberWind;
    this.rotateIconInRoomsNumber = !this.rotateIconInRoomsNumber;
  }
  onSelectRoomsNumber(roomsNumber: number){
    this.selectedRoomsNumber = roomsNumber;
    this.formContainer3.get('RoomsNumber')?.setValue(roomsNumber);
    this.isOpenRoomsNumberWind = false;
  }
  onClickToSelectPropertyCharacteristics(idx: number){
    this.selectedPropertyCharacteristics[idx].isSelected = !this.selectedPropertyCharacteristics[idx].isSelected;
  }
  onTextChange(text : string){
    text = text.trim();
    if(text.length >= 104){
      this.currentMessage = this.message[3];
    }
    else if(text.length >= 32){
      this.currentMessage = this.message[2];
    }
    else if(text.length >= 8){
      this.currentMessage = this.message[1];
    }
    else if(text.length >= 4){
      this.currentMessage = this.message[0];
    }
  }
  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 2});
  }
}
