import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth.provider';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  loading: boolean = false;
  showError: boolean = false;
  errorTxt: string = '';

  constructor(
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder,
    private router: Router

  ) {
    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
    this.authProvider.getUserUid().then(uid => {
      this.router.navigateByUrl('/home')
    }).catch(err => {
      console.log(err)
    })
  }

  goBack(){
    this.router.navigateByUrl('/welcome');
  };


  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.loading = true;
    this.authProvider.login(email, password).then(data => {
      this.loading = false;
      this.router.navigateByUrl('/home')
    }).catch(err => {
      if (err.code) {
        this.errorTxt = err.message;
        this.showError = true;
        this.loading = false;
      }
    })

  }

}
