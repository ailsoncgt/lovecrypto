import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth.provider';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public signUpForm: FormGroup;
  loading: boolean = false;
  emailInUseError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private route: Router
  ) {

    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signUpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }


  ngOnInit() {
  }

  signUp() {
    const email = this.signUpForm.value.email
    const password = this.signUpForm.value.password
    this.loading = true;
    this.authProvider.signUp(email, password).then(token => {
      this.authProvider.createUserOnDatabase(token, this.signUpForm.value).then(result => {
        this.route.navigateByUrl('/home');
      })
    }).catch(err => {
      if (err.code = 'auth/email-already-in-use') {
        this.emailInUseError = true;
      }
      console.log(err)
      this.loading = false
    })
  }

}
