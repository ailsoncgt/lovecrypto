import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-acounts',
  templateUrl: './payment-acounts.page.html',
  styleUrls: ['./payment-acounts.page.scss'],
})
export class PaymentAcountsPage implements OnInit {

  constructor(private route: Router) { }

  openSettings(){
    this.route.navigateByUrl('/settings');
  };


  ngOnInit() {
  }

}
