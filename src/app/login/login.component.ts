import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.pattern('[a-zA-Z0-9!@#$%^&*]{8,}'),
      Validators.required,
    ]),
  });
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private _authService: AuthService, private _Router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      this._authService.signInUser(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            // navigate to home page
            this.isLoading = false;
            localStorage.setItem('user_token', response.token);
            this._authService.saveUserData();
            this._Router.navigate(['/home']);
          } else {
            // show error message
            this.errorMessage = response.message;
            this.isLoading = false;
          }
        },
        error: (err) => console.log(err),
      });
    }
  }
}
