import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-coin-base-account',
  templateUrl: './insert-coin-base-account.page.html',
  styleUrls: ['./insert-coin-base-account.page.scss'],
})
export class InsertCoinBaseAccountPage implements OnInit {

  constructor(private route: Router) { }

  goBack(){
    this.route.navigateByUrl('/selectAmount');
  };


  ngOnInit() {
  }

}
