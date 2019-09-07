import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulamento',
  templateUrl: './regulamento.page.html',
  styleUrls: ['./regulamento.page.scss'],
})
export class RegulamentoPage implements OnInit {

  constructor(private route: Router) { }

  openShare(){
    this.route.navigateByUrl('/share-app');
  };

  ngOnInit() {
  }

}
