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
import { Config } from '../pages/config/config';
import { Ajuda } from '../pages/ajuda/ajuda';
import { Timeline } from '../pages/timeline/timeline';
import { CardComponent } from '../pages/timeline/card.component';
import { Senhamodal } from '../pages/senhamodal/senhamodal';

 
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
    Config,
    Ajuda,
    Timeline,
    Senhamodal,
    CardComponent, 
   
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
    Config,
    Ajuda,
    Timeline,
    Senhamodal,
    CardComponent,
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
