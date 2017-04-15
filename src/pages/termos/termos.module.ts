import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Termos } from './termos';

@NgModule({
  declarations: [
    Termos,
  ],
  imports: [
    IonicModule.forRoot(Termos),
  ],
  exports: [
    Termos
  ]
})
export class TermosModule {}
