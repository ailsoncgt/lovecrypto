import { Component } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) {}

  openSettings(){
    this.route.navigateByUrl('/settings');
  };

  openShare(){
    this.route.navigateByUrl('/share-app');
  };

  openWallet(){
    this.route.navigateByUrl('/wallet');
  };



}
