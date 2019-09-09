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

  tasks: any = [];
  user: any = {};
  userId: string;

  constructor(private route: Router,
    private taskProvider: TaskPrivider,
    private authProvider: AuthProvider,
    private userProvider: UserPrivider) {

    this.authProvider.getUserUid().then(uid => {
      this.userId = uid;
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

  openTask(task) {
    this.route.navigateByUrl(`/${task.url}&taskId=${task.id}`);
  };



  ngOnInit() {
    this.taskProvider.list().subscribe((tasks: any) => {
      this.tasks = [];
      tasks.map(task => {
        let find = false;
        if (task.participants) {
          Object.keys(task.participants).forEach(key => {
            console.log(key, this.userId)
            if (key == this.userId) {
              find = true;
            }
          })
        }
        if (!find) {
          this.tasks.push(task)
        }
      })
    })
  }



}
