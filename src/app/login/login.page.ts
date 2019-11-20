import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { AlertController } from '@ionic/angular';

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
    private router: Router,
    private alertCtrl: AlertController

  ) {
    const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
    // this.authProvider.getUserUid().then(uid => {
    //   this.router.navigate(['/home'])
    // }).catch(err => {
    //   console.log(err)
    //   alert('erro: ')
    // })
  }
  ionViewWillEnter() {
    // this.authProvider.getUserUid().then(uid => {
    //   this.router.navigate(['/home'])
    // }).catch(err => {
    //   console.log(err)
    //   alert('erro: ')
    // })
  }

  goBack() {
    this.router.navigateByUrl('/welcome');
  };

  goSignUp() {
    this.router.navigateByUrl('/sign-up');
  }

  fbLogin() {
    this.authProvider.loginFb()
    // this.authProvider.signUpWithFacebook().then(data => {
    //   if (data) {
    //     this.router.navigateByUrl('/home')
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
  }

  gmailLogin() {
    this.authProvider.gPlusLogin()
    // this.authProvider.signUpWithGmail().then(data => {
    //   if (data) {
    //     this.router.navigateByUrl('/home')
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
  }


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
      console.log(err)
    })

  }

}
