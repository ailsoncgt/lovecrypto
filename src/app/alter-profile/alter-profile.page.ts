import { Component, OnInit } from '@angular/core';


//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-alter-profile',
  templateUrl: './alter-profile.page.html',
  styleUrls: ['./alter-profile.page.scss'],
})
export class AlterProfilePage implements OnInit {

  constructor(private route: Router) { }

  openProfile(){
    this.route.navigateByUrl('/profile');
  };


  ngOnInit() {
  }

}
