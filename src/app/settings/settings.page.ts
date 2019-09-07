import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private route: Router) { 
   
  }

  openHelp(){
    this.route.navigateByUrl('/help');
  };

  openProfile(){
    this.route.navigateByUrl('/profile');
  };

  openNotifications(){
    this.route.navigateByUrl('/notifications');
  };

  openPaymentAcounts(){
    this.route.navigateByUrl('/payment-acounts');
  };

  openLegal(){
    this.route.navigateByUrl('/legal');
  };

  openAbout(){
    this.route.navigateByUrl('/about');
  };

  //back
  openHome(){
    this.route.navigateByUrl('/home');
  };

  logout(){
    //localStorage.clear(); //Se tiver alguma informação local
    //this.backToWelcome(); //Criar uma função para ir para a tela deslogada
  }

 
  
  

 


  

  ngOnInit() {
  }

}
