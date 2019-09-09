import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPrivider } from '../../providers/user/user'
import { AuthProvider } from '../../providers/auth/auth.provider'
import { TaskPrivider } from '../../providers/task/task'
import { User } from '../../models/users'


//Rotas
import { Router } from '@angular/router';


@Component({
  selector: 'app-alter-profile',
  templateUrl: './alter-profile.page.html',
  styleUrls: ['./alter-profile.page.scss'],
})
export class AlterProfilePage implements OnInit {

  public profileForm: FormGroup;
  public field: string;
  public task: boolean = false;
  taskId: string;
  userId: string;
  user: any;
  userBalance: number;

  constructor(private route: Router,
    private platform: Platform,
    private formBuilder: FormBuilder,
    private userProvider: UserPrivider,
    private authProvider: AuthProvider,
    private taskProvider: TaskPrivider
  ) {

    this.profileForm = formBuilder.group({
      gender: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(12)])],
      birthday: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      interest: ['', Validators.compose([Validators.required])]
    });
    this.authProvider.getUserUid().then(uid => {
      this.userId = uid;
      this.userProvider.byId(uid).subscribe(user => {
        this.user = user;
        this.userBalance = this.user.balance;
        console.log(this.userBalance)
      })
    })

  }

  openProfile() {

    this.route.navigateByUrl('/profile');
  };

  ngOnInit() {
    this.field = this.platform.getQueryParam('data');
    if (this.field) {
      this.task = true;
      this.taskId = this.platform.getQueryParam('taskId');

    }

  }
  addUserInTask() {
    this.taskProvider.addUser(this.taskId).then(_ => {
      this.taskProvider.byId(this.taskId).subscribe((task: any) => {
        this.userBalance += task.award
        console.log(this.userBalance)
      })
    })
    this.route.navigateByUrl('/home')
  }
  save() {
    if (this.field == 'city') {
      this.userProvider.setItem(this.userId, { city: this.profileForm.value.city }).then(data => {
        this.addUserInTask()
      })
    }
    else if (this.field == 'country') {
      this.userProvider.setItem(this.userId, { country: this.profileForm.value.country }).then(data => {
        this.addUserInTask()
      })
    }
    else if (this.field == 'gender') {
      this.userProvider.setItem(this.userId, { sex: this.profileForm.value.sex }).then(data => {
        this.addUserInTask()
      })
    }
    else if (this.field == 'phone') {
      this.userProvider.setItem(this.userId, { phone: this.profileForm.value.phone }).then(data => {
        this.addUserInTask()
      })
    }
    else if (this.field == 'birthday') {
      this.userProvider.setItem(this.userId, { birthday: this.profileForm.value.birthday }).then(data => {
        this.addUserInTask()
      })
    }
    else if (this.field == 'interest') {
      this.userProvider.setItem(this.userId, { interest: this.profileForm.value.interest }).then(data => {
        this.addUserInTask()
      })
    }
  }

}
