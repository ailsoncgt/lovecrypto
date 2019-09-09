import { Component, OnInit } from '@angular/core';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-acomplished',
  templateUrl: './task-acomplished.page.html',
  styleUrls: ['./task-acomplished.page.scss'],
})
export class TaskAcomplishedPage implements OnInit {

  constructor(private route: Router) { }

  finish() {

    
    //conferir se está concluida
    //registrar a conclusão
    //adicionar o saldo
    //remover a pergunta da pilha de perguntas disponiveis
    this.route.navigateByUrl('/home');
  };

  ngOnInit() {
  }

}
