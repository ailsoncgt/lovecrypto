import { Component, OnInit } from '@angular/core';


//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(private route: Router) { }

  openLegal(){
    this.route.navigateByUrl('/legal');
  };


  ngOnInit() {
  }

}
