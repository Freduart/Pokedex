import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

//Para poder utilizar un sharedComponent debemos exportarlo y lo declaramos en el appmodule

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    ProgressBarComponent,
  ]
})
export class SharedModule { }
