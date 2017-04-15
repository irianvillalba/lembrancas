import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Politica } from './politica';

@NgModule({
  declarations: [
    Politica,
  ],
  imports: [
    IonicModule.forRoot(Politica),
  ],
  exports: [
    Politica
  ]
})
export class PoliticaModule {}
