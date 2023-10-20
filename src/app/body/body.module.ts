import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {DeleteModule} from "../delete/delete.module";



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
        MatIconModule,
        DeleteModule
    ]
})
export class BodyModule { }
