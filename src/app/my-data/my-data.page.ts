import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.page.html',
  styleUrls: ['./my-data.page.scss'],
})
export class MyDataPage implements OnInit {

  constructor(private route: Router) { }

  openLegal() {
    this.route.navigateByUrl('/legal');
  };

  ngOnInit() {
  }

  logout() { }

}
