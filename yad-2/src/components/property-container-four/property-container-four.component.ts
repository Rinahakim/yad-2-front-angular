import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventManagement } from '../../models/eventManagementModel';

@Component({
  selector: 'app-property-container-four',
  standalone: false,
  
  templateUrl: './property-container-four.component.html',
  styleUrl: './property-container-four.component.scss'
})
export class PropertyContainerFourComponent implements OnInit{
  @Output() eventManagement = new EventEmitter<EventManagement>();
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  formContainer4 !: FormGroup;
  isOpenPaymentWind : boolean = false;
  rotateIcon : boolean = false;
  PaymentOptions : string[] = [
    "1","2","3","4","5","6","7","8","9","10","11","12","גמיש"
  ];
  selectedPaymentNumber : string = ""; 


  constructor(){}
  ngOnInit(): void {
    this.formContainer4 = new FormGroup({
      Payment: new FormControl(this.selectedPaymentNumber, Validators.required),
      BuildingCommittee: new FormControl(''),
      PropertyTax: new FormControl(''),
      BuiltArea: new FormControl(''),
      GardenArea: new FormControl(''),
      TotalSize: new FormControl('', Validators.required),
      Price: new FormControl(''),
      PricePerMeter: new FormControl(''),
      EntryDate: new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    this.eventManagement.emit({action: 'next', containerIdx: 3});
  }
  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 3});
  }
  onClickInputPayment(){
    this.isOpenPaymentWind = !this.isOpenPaymentWind;
    this.rotateIcon = !this.rotateIcon;
  }
  onSelectPayment(payment: string){
    this.selectedPaymentNumber = payment;
    this.formContainer4.get('Payment')?.setValue(payment);
    this.isOpenPaymentWind = false;
  }
}
