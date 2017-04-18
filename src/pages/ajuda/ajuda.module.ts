import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ajuda } from './ajuda';

@NgModule({
  declarations: [
    Ajuda,
  ],
  imports: [
    IonicModule.forRoot(Ajuda),
  ],
  exports: [
    Ajuda
  ]
})
export class AjudaModule {}
