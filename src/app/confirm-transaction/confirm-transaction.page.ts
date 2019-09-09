import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.page.html',
  styleUrls: ['./confirm-transaction.page.scss'],
})
export class ConfirmTransactionPage implements OnInit {

  constructor(private route: Router) { }

  goBack(){
    this.route.navigateByUrl('/insert-coin-base-account');
  };


  confirm(){
    //consolidar a transação
    //adicionar no sumario do usuário no bd
    //mostrar um extrato em próximas versões
    this.route.navigateByUrl('/home');
  };


  ngOnInit() {
  }

}
