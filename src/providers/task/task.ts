import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Constants } from '../../environments/constants';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { Observable } from "rxjs";

@Injectable()
export class TaskPrivider {
  constructor(
    private afDb: AngularFireDatabase,
    private authProvider: AuthProvider
  ) { }

  list() {
    return this.afDb.list(Constants.PATH_DOCUMENTS_TASKS).valueChanges();
  }

  byId(id) {
    return this.afDb.object(`${Constants.PATH_DOCUMENTS_TASKS}${id}`).valueChanges();
  }

  addUser(taskId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authProvider.getUserUid().then(uid => {
        const now = new Date().getTime()
        this.afDb.object(`${Constants.PATH_DOCUMENTS_TASKS}${taskId}/participants/${uid}`).update({ dateTime: now }).then(data => {
          resolve(true)
        }).catch(err => {
          reject(err)
        })
      }).catch(err => [
        reject(err)
      ])
    })
  }

}
