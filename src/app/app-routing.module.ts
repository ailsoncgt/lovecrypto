import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth.provider';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthProvider] },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate: [AuthProvider] },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthProvider] },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule', canActivate: [AuthProvider] },
  { path: 'legal', loadChildren: './legal/legal.module#LegalPageModule', canActivate: [AuthProvider] },
  { path: 'payment-acounts', loadChildren: './payment-acounts/payment-acounts.module#PaymentAcountsPageModule', canActivate: [AuthProvider] },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule', canActivate: [AuthProvider] },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthProvider] },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule', canActivate: [AuthProvider] },
  { path: 'my-data', loadChildren: './my-data/my-data.module#MyDataPageModule', canActivate: [AuthProvider] },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', canActivate: [AuthProvider] },
  { path: 'therms-of-service', loadChildren: './therms-of-service/therms-of-service.module#ThermsOfServicePageModule', canActivate: [AuthProvider] },
  { path: 'share-app', loadChildren: './share-app/share-app.module#ShareAppPageModule', canActivate: [AuthProvider] },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule', canActivate: [AuthProvider] },
  { path: 'splash-screen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
  { path: 'alter-profile', loadChildren: './alter-profile/alter-profile.module#AlterProfilePageModule', canActivate: [AuthProvider] },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule', canActivate: [AuthProvider] },
  { path: 'regulament', loadChildren: './regulamento/regulamento.module#RegulamentoPageModule', canActivate: [AuthProvider] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'task-insert-data', loadChildren: './task-insert-data/task-insert-data.module#TaskInsertDataPageModule' },
  { path: 'task-new-task', loadChildren: './task-new-task/task-new-task.module#TaskNewTaskPageModule' },
  { path: 'task-acomplished', loadChildren: './task-acomplished/task-acomplished.module#TaskAcomplishedPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
