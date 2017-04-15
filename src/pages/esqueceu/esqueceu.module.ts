import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Esqueceu } from './esqueceu';

@NgModule({
  declarations: [
    Esqueceu,
  ],
  imports: [
    IonicModule.forRoot(Esqueceu),
  ],
  exports: [
    Esqueceu
  ]
})
export class EsqueceuModule {}
