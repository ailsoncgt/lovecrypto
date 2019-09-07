import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.page.html',
  styleUrls: ['./share-app.page.scss'],
})
export class ShareAppPage implements OnInit {

  constructor(private route: Router) { }

   //back
  openHome(){
    this.route.navigateByUrl('/home');
  };

  openRegulament(){
    this.route.navigateByUrl('/regulament');
  };


  copyCode(){
    alert();
  };

  ngOnInit() {
  }

}
