import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send.component';
import {InsertModule} from "../insert.module";
@NgModule({
  declarations: [
    SendComponent
  ],
  imports: [
    CommonModule,
    InsertModule,
  ]
})
export class SendModule { }
