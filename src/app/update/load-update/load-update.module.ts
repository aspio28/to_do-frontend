import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadUpdateComponent } from './load-update.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {UpdateModule} from "../update.module";



@NgModule({
  declarations: [
    LoadUpdateComponent
  ],
  exports: [
    LoadUpdateComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        UpdateModule
    ]
})
export class LoadUpdateModule { }
