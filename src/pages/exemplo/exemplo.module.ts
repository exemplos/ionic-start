import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExemploPage } from './exemplo';

@NgModule({
  declarations: [
    ExemploPage,
  ],
  imports: [
    IonicPageModule.forChild(ExemploPage),
  ],
})
export class ExemploPageModule {}
