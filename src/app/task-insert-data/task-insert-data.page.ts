import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-insert-data',
  templateUrl: './task-insert-data.page.html',
  styleUrls: ['./task-insert-data.page.scss'],
})
export class TaskInsertDataPage implements OnInit {

  constructor(private route: Router) { }

  goBack() {
    this.route.navigateByUrl('/task-new-task');
  };

  nextQuestion() {
    //registrar a questão respondida, localmente
    this.route.navigateByUrl('/task-acomplished');
  };


  ngOnInit() {
  }

}
