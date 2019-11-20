import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { LoadingController } from '@ionic/angular';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AngularFireDatabase } from "@angular/fire/database";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase/app'
import { Constants } from '../../environments/constants';
import { Observable } from "rxjs";
import { User } from '../../models/users';
import { reject } from 'q';

@Injectable()
export class AuthProvider implements CanActivate {
  loading: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private router: Router,
    private fb: Facebook,
    private gPlus: GooglePlus,
    private loadingCtrl: LoadingController
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged((user: firebase.User) => {
        // console.log(user)
        if (user) {
          resolve(true)
        }
        else {
          this.router.navigateByUrl('/login');
          resolve(false)
        }
      })
    });
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Connecting ...'
    });
    await this.loading.present();
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

  async signUpWithFacebook(): Promise<any> {
    let provider = new firebase.auth.FacebookAuthProvider();
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(provider).then(data => {
        let user = new User({ name: data.user.displayName });
        let uid = data.user.uid;

        if (data.additionalUserInfo.isNewUser) {
          this.createUserOnDatabase(uid, user).then(res => {
            resolve(true)
          }).catch(err => {
            reject(false)
          })
          // create user
          console.log(data.user.displayName)
        } else {
          resolve(true)
          console.log('is not new')
          // go 
        }

      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }

  signUpWithGmail(): Promise<any> {
    let provider = new firebase.auth.GoogleAuthProvider();
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(provider).then(data => {
        let user = new User({ name: data.user.displayName });
        let uid = data.user.uid;

        if (data.additionalUserInfo.isNewUser) {
          // create user

          this.createUserOnDatabase(uid, user).then(res => {
            resolve(true)
          }).catch(err => {
            reject(false)
          })
        } else {
          resolve(true)
          console.log('is not new')
          // go 
        }
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
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

  loginFb(): Promise<any> {
    // this.presentLoading()

    return new Promise((resolve, reject) => {
      this.fb.login(['email'])
        .then((response: FacebookLoginResponse) => {
          this.onLoginSuccess(response).then(() => {
            resolve(true)

          }).catch(err => {
            reject(false);
          });
          // console.log(response.authResponse.accessToken);
        }).catch((error) => {
          console.log(error)
          alert('error:' + JSON.stringify(error))
        });
    })
  }
  onLoginSuccess(res: FacebookLoginResponse) {
    // const { token, secret } = res;
    return new Promise((resolve, reject) => {
      const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      this.afAuth.auth.signInWithCredential(credential)
        .then((response) => {
          let user = new User({ name: response.user.displayName });
          let uid = response.user.uid;

          if (response.additionalUserInfo.isNewUser) {
            // create user

            this.createUserOnDatabase(uid, user).then(res => {
              resolve(true)
            }).catch(err => {
              reject(false)
            })
          } else {
            resolve(true)
            console.log('is not new')
            // go 
          }
          this.router.navigate(["/home"]);
          // this.loading.dismiss();
        }).catch(err => {
          alert('error:' + err)
        })
    })

  }
  onLoginError(err) {
    console.log(err);
  }

  gPlusLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.gPlus.login({}).then(user => {
        alert(JSON.stringify(user))
      }).catch(err => {
        alert(JSON.stringify(err))
      })
    })
  }
}
