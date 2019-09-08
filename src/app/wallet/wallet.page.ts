import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private route: Router) { }

  openHome(){
    this.route.navigateByUrl('/home');
  };

  requestWithdraw(){
    this.route.navigateByUrl('/select-amount');
  }

  ngOnInit() {
  }

}
