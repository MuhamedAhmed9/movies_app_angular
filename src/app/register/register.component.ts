import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(80),
      Validators.required,
    ]),
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
    if (this.registerForm.valid) {
      // console.log(this.registerForm.value);
      this._authService.registerUser(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            // navigate to login page
            this.isLoading = false;
            this.errorMessage = '';
            this._Router.navigate(['/login']);
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
