import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Config } from './config';

@NgModule({
  declarations: [
    Config,
  ],
  imports: [
    IonicModule.forRoot(Config),
  ],
  exports: [
    Config
  ]
})
export class ConfigModule {}
