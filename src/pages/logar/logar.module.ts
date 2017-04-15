import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Logar } from './logar';

@NgModule({
  declarations: [
    Logar,
  ],
  imports: [
    IonicModule.forRoot(Logar),
  ],
  exports: [
    Logar
  ]
})
export class LogarModule {}
