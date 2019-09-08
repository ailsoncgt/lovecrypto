import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AngularFireDatabase } from "@angular/fire/database";
import { Constants } from '../../environments/constants';
import { Observable } from "rxjs";

@Injectable()
export class AuthProvider implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe((user: firebase.User) => {
        if (user) {
          console.log(user)
          resolve(true)
        }
        else {
          this.router.navigateByUrl('/login');
          resolve(false)
        }
      })
    });
  }

  getUserUid(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe((user: firebase.User) => {
        if (user) {
          resolve(user.uid)
        }
        else {
          this.router.navigateByUrl('/login');
          resolve(false)
        }
      })
    });
  }

  signUp(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          resolve(result.user.uid);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  login(email, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(data => {
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  sendPasswordResetEmail(email): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .sendPasswordResetEmail(email)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  getUserOnFirebase(uid): Observable<any> {
    return this.afDb
      .object(`${Constants.PATH_DOCUMENTS_USER}${uid}`)
      .valueChanges();
  }

  createUserOnDatabase(uid, data): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(uid, data);
      delete data.password
      this.afDb
        .object(`${Constants.PATH_DOCUMENTS_USER}${uid}`)
        .update(data)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
}
