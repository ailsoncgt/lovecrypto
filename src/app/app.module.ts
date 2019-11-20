import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { AuthProvider } from '../providers/auth/auth.provider'
import { TaskPrivider } from '../providers/task/task'
import { UserPrivider } from '../providers/user/user'

import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.production ? environment.firebaseConfigProd : environment.firebaseConfigDev),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthProvider,
    TaskPrivider,
    UserPrivider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
