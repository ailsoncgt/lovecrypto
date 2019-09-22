import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth.provider';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private route: Router,
    private authProvider: AuthProvider) {

  }

  openHelp() {
    this.route.navigateByUrl('/help');
  };

  openProfile() {
    // this.route.navigateByUrl('/profile');
  };

  openNotifications() {
    this.route.navigateByUrl('/notifications');
  };

  openPaymentAcounts() {
    this.route.navigateByUrl('/payment-acounts');
  };

  openLegal() {
    this.route.navigateByUrl('/legal');
  };

  openAbout() {
    this.route.navigateByUrl('/about');
  };

  //back
  openHome() {
    this.route.navigateByUrl('/home');
  };

  logout() {
    this.authProvider.logout().then(_ => {
      localStorage.clear();
      this.route.navigateByUrl('/welcome');
    })
  }










  ngOnInit() {
  }

}
