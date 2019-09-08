import { Component } from '@angular/core';

//Rotas
import { Router } from '@angular/router';
import { TaskPrivider } from '../../providers/task/task'
import { UserPrivider } from '../../providers/user/user'
import { AuthProvider } from 'src/providers/auth/auth.provider';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: [];
  user: any = {};

  constructor(private route: Router,
    private taskProvider: TaskPrivider,
    private authProvider: AuthProvider,
    private userProvider: UserPrivider) {

    this.authProvider.getUserUid().then(uid => {
      this.userProvider.byId(uid).subscribe((user: any) => {
        this.user = user;
      })
    })
  }

  openSettings() {
    this.route.navigateByUrl('/settings');
  };

  openShare() {
    this.route.navigateByUrl('/share-app');
  };

  openWallet() {
    this.route.navigateByUrl('/wallet');
  };

  openTask() {
    this.route.navigateByUrl('/task-new-task');
  };

  ngOnInit() {
    this.taskProvider.list().subscribe((tasks: any) => {
      this.tasks = tasks
    })
  }



}
