import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Senhamodal } from './senhamodal';

@NgModule({
  declarations: [
    Senhamodal,
  ],
  imports: [
    IonicModule.forRoot(Senhamodal),
  ],
  exports: [
    Senhamodal
  ]
})
export class SenhamodalModule {}
