import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInformationService } from '../../services/user-information.service';
import { Router } from '@angular/router';
import { UpdatedDetailsUserModel } from '../../models/updatedDetailsUserModel';
import { UpdatedDetailsUserService } from '../../services/updated-details-user.service';
import { UserModel } from '../../models/userModel';

@Component({
  selector: 'app-update-details',
  standalone: false,
  
  templateUrl: './update-details.component.html',
  styleUrl: './update-details.component.scss'
})
export class UpdateDetailsComponent implements OnInit{
  form !: FormGroup;
  firstName !: string;
  lastName !: string;
  userEmail !: string;
  phone!: string;
  date!: string;
  city!: string;
  street!: string;
  number!: number;
  detailsUpdateModal!: boolean;
  @Output() closeUpdateDetailsWind = new EventEmitter<boolean>();

  constructor(private userInformationService: UserInformationService,
  private router: Router, private updatedDetailsUserService :UpdatedDetailsUserService){}
  ngOnInit() 
  {
    this.userInformationService.getUserInformation().subscribe({
      next:(res) => {
        this.updateValues(res);
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.form = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Date: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Street: new FormControl('', Validators.required),
      Number: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    const updateDetails :UpdatedDetailsUserModel = {
      email: this.form.get('Email')?.value, dateOfBirth: this.form.get('Date')?.value,
      city: this.form.get('City')?.value, street: this.form.get('Street')?.value,
      houseNumber: this.form.get('Number')?.value, firstName: this.form.get('FirstName')?.value,
      lastName: this.form.get('LastName')?.value, phone: this.form.get('Phone')?.value,
    };

    this.updatedDetailsUserService.updateDetailsUser(updateDetails).subscribe({
      next: (updatedUser) => {
        // this.updateValues(updateUser);
        this.userInformationService.updateUserInfoLocally(updatedUser);
        this.detailsUpdateModal = true;
        setInterval(() => {
          this.detailsUpdateModal = false;
        }, 2000);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  updateValues(updateUser: UserModel){
    this.firstName = updateUser.firstName;
    this.lastName = updateUser.lastName;
    this.userEmail = updateUser.email;
    this.phone = updateUser.phone;
    this.date =  updateUser.dateOfBirth;
    this.city =  updateUser.city;
    this.street = updateUser.street; 
    this.number =  updateUser.houseNumber;
    this.form.patchValue({
      FirstName: this.firstName,
      LastName: this.lastName,
      Phone: this.phone,
      Email: this.userEmail,
      Date: this.date,
      City: this.city,
      Street: this.street,
      Number: this.number
    });
  }
  onClickCancel(){
    localStorage.setItem('toOpenUpdateDetailsWind', JSON.stringify(false));
    this.closeUpdateDetailsWind.emit(true);
  }
}
