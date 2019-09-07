import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private route: Router) { }

  openSettings(){
    this.route.navigateByUrl('/settings');
  };

  ngOnInit() {
  }

}
