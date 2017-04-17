import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Timeline } from './timeline';

@NgModule({
  declarations: [
    Timeline,
  ],
  imports: [
    IonicModule.forRoot(Timeline),
  ],
  exports: [
    Timeline
  ]
})
export class TimelineModule {}
