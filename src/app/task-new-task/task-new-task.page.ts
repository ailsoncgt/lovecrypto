import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-new-task',
  templateUrl: './task-new-task.page.html',
  styleUrls: ['./task-new-task.page.scss'],
})
export class TaskNewTaskPage implements OnInit {

  constructor(private route: Router) { }

  openHome() {
    this.route.navigateByUrl('/home');
  };

  startTask() {
    this.route.navigateByUrl('/task-insert-data');
  };
  

  

  

  ngOnInit() {
  }

}
