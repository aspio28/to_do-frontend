import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTaskComponent } from './check-task.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CheckTaskComponent
  ],
  exports: [
    CheckTaskComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CheckTaskModule { }
