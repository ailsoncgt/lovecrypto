import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-therms-of-service',
  templateUrl: './therms-of-service.page.html',
  styleUrls: ['./therms-of-service.page.scss'],
})
export class ThermsOfServicePage implements OnInit {

  constructor(private route: Router) { }

  openLegal(){
    this.route.navigateByUrl('/legal');
  };

  

  ngOnInit() {
  }

}
