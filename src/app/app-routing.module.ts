import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'legal', loadChildren: './legal/legal.module#LegalPageModule' },
  { path: 'payment-acounts', loadChildren: './payment-acounts/payment-acounts.module#PaymentAcountsPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'my-data', loadChildren: './my-data/my-data.module#MyDataPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'therms-of-service', loadChildren: './therms-of-service/therms-of-service.module#ThermsOfServicePageModule' },
  { path: 'share-app', loadChildren: './share-app/share-app.module#ShareAppPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'splash-screen', loadChildren: './splash-screen/splash-screen.module#SplashScreenPageModule' },
  { path: 'alter-profile', loadChildren: './alter-profile/alter-profile.module#AlterProfilePageModule' },
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule' },
  { path: 'regulament', loadChildren: './regulamento/regulamento.module#RegulamentoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
