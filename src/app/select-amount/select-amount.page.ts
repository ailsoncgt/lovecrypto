import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-amount',
  templateUrl: './select-amount.page.html',
  styleUrls: ['./select-amount.page.scss'],
})
export class SelectAmountPage implements OnInit {

  constructor(private route: Router) { }

  goBack(){
    this.route.navigateByUrl('/wallet');
  };

  next(){
    this.route.navigateByUrl('/insert-coin-base-account');
  };

  ngOnInit() {
  }

}
