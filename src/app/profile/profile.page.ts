import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private route: Router) { }

  
  openSettings(){
    this.route.navigateByUrl('/settings');
  };


  ngOnInit() {
  }

}
