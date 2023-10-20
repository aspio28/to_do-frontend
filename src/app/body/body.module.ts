import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        BodyComponent
    ],
    exports: [
        BodyComponent
    ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class BodyModule { }
