import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.page.html',
  styleUrls: ['./legal.page.scss'],
})
export class LegalPage implements OnInit {

  constructor(private route: Router) { }

  openSettings(){
    this.route.navigateByUrl('/settings');
  };

  openThermsOfService(){
    this.route.navigateByUrl('/therms-of-service');
  };

  openPrivacyPolicy(){
    this.route.navigateByUrl('/privacy-policy');
  };

  openMyData(){
    this.route.navigateByUrl('/my-data');
  };



  ngOnInit() {
  }

}
