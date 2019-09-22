import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TaskPrivider } from '../../providers/task/task'
import { UserPrivider } from '../../providers/user/user'
import { AuthProvider } from 'src/providers/auth/auth.provider';

//Rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  tasks: any = [];
  user: any = {};
  userId: string;

  constructor(private route: Router,
    private alertCtrl: AlertController,
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

  openHome() {
    this.route.navigateByUrl('/home');
  };

  async requestWithdraw() {

    const alert = await this.alertCtrl.create({
      header: 'Attention',
      message: 'You need almost $ 5.00 to request',
      buttons: ['OK']
    });
    await alert.present();
    // this.route.navigateByUrl('/select-amount');
  }

  ngOnInit() {
    this.taskProvider.list().subscribe((tasks: any) => {
      this.tasks = [];
      tasks.map(task => {
        let find = false;
        if (task.participants) {
          Object.keys(task.participants).forEach(key => {
            // console.log(key, this.userId)
            if (key == this.userId) {
              find = true;
            }
          })
        }
        if (find) {
          this.tasks.push(task)
        }
      })
    })
  }

}
