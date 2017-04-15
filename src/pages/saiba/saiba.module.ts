import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Saiba } from './saiba';

@NgModule({
  declarations: [
    Saiba,
  ],
  imports: [
    IonicModule.forRoot(Saiba),
  ],
  exports: [
    Saiba
  ]
})
export class SaibaModule {}
