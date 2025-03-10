import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { SignupModel } from '../../models/signupModel';
import { LoginModel } from '../../models/loginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  form !: FormGroup;
  submitted !: boolean;
  showPassword = false;
  showConfirmPassword = false;
  MatchPassword !: boolean;
  validPassword !:boolean;
  userNeedToSign !:boolean;
  inSignupModel !: boolean;
  @Output() signupModelOpen = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService, private router: Router){}
  
  ngOnInit(): void {
    this.submitted = false;
    const savedState = localStorage.getItem('inSignupModel');
    this.inSignupModel = savedState === 'true';
    this.userNeedToSign = false;
    this.form = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('', Validators.required)
    },{ validators: [this.passwordValidator.bind(this)]});

    this.form.statusChanges.subscribe(status => {
      if (status === 'VALID') {
        this.submitted = false;
      }
    });    
    this.form.valueChanges.subscribe(() => {
      this.submitted = false;
    });    
  }
  onSubmit(){
    if(this.form.valid){
      this.onSubmitSignup();
      localStorage.removeItem('inSignupModel');
    }else if(!this.inSignupModel && this.form.get('Email')?.valid && this.form.get('Password')?.valid){
      this.onSubmitLogin();
      localStorage.removeItem('inSignupModel');
    }
    else{
      this.submitted = true;
    }
  }
  onSubmitSignup(){
    const signupModel: SignupModel = {
      email: this.form.get('Email')?.value,
      password: this.form.get('Password')?.value,
      confirmPassword: this.form.get('ConfirmPassword')?.value
    };

    this.authService.signup(signupModel).subscribe({
      next: () => {
        localStorage.removeItem('inSignupModel');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  onSubmitLogin(){
    const loginModel: LoginModel = {
      email: this.form.get('Email')?.value,
      password: this.form.get('Password')?.value,
    };

    this.authService.login(loginModel).subscribe({
      next: (res) => {
        this.submitted = false;
        localStorage.setItem('token', JSON.stringify(res));
        localStorage.removeItem('inSignupModel');
        this.router.navigate(['/homepage']);
      },
      error: (err) => {
        console.log(err);
        this.userNeedToSign = true;
      }
    });
  }
  onClickShowPassword(){
    this.showPassword = !this.showPassword;
  }
  onClickShowConfirmPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  onClickLink(){
    this.inSignupModel = !this.inSignupModel;
    localStorage.setItem('inSignupModel', this.inSignupModel.toString());
    this.signupModelOpen.emit(this.inSignupModel);
    this.submitted = false;
  }
  passwordValidator(control: any): ValidationErrors | null  {
    const password = control.get('Password')?.value;
    const repeatPassword = control.get('ConfirmPassword')?.value;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    if(!hasLetter || !hasNumber){
      this.validPassword = false;
      if(password.length < 8){
        return {shortpass: true}
      }
      if (password !== repeatPassword) {
        this.MatchPassword = false;
        return {mismatch: true};  
      }
      this.MatchPassword = true;
      return null;
    }
    if(password.length < 8){
      return {shortpass: true}
    }
    if (password !== repeatPassword) {
      this.MatchPassword = false;
      return {mismatch: true};  
    }
    this.validPassword = true;
    this.MatchPassword = true;
    return null;
  }
  onClickBackBtn(){
    localStorage.removeItem('inSignupModel');
    this.router.navigate(['/homepage']);
  }
}
