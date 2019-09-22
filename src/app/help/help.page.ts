import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private route: Router) { }

  openSettings() {
    this.route.navigateByUrl('/settings');
  };

  ngOnInit() {
  }

  openHelp() { }

}
