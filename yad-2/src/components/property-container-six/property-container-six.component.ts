import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManagement } from '../../models/eventManagementModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInformationService } from '../../services/user-information.service';

@Component({
  selector: 'app-property-container-six',
  standalone: false,
  
  templateUrl: './property-container-six.component.html',
  styleUrl: './property-container-six.component.scss'
})
export class PropertyContainerSixComponent implements OnInit{
  @Input() showDoneIcon : boolean = false;
  @Input() currentWindClose : boolean = false;
  @Output() eventManagement = new EventEmitter<EventManagement>();
  formContainer6 !: FormGroup;
  firstName !: string;
  
  constructor(private userInformationService : UserInformationService){}

  ngOnInit(): void {
    this.userInformationService.user$.subscribe(user => {
      if (user) {
        this.firstName = `${user.firstName}`;
      }
    });
    this.formContainer6 = new FormGroup({
      Name: new FormControl(this.firstName),
      Phone: new FormControl('', Validators.required)
    });  
  }

  onSubmit(){
    this.eventManagement.emit({action: 'next', containerIdx: 5});
  }

  onClickBtnBack(){
    this.eventManagement.emit({action: 'back', containerIdx: 5});
  }
}
