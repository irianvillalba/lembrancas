import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Feed } from '../pages/feed/feed';
import { Login } from '../pages/login/login';
import { Termos } from '../pages/termos/termos';
import { Saiba } from '../pages/saiba/saiba';
import { Politica } from '../pages/politica/politica';
import { Logar } from '../pages/logar/logar';
import { Esqueceu } from '../pages/esqueceu/esqueceu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Feed,
    Login,
    Termos,
    Saiba,
    Politica,
    Logar,
    Esqueceu,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Feed,
    Login,
    Termos,
    Saiba,
    Politica,
    Logar,
    Esqueceu,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
