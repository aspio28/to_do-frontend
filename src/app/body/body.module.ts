import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {DeleteModule} from "../delete/delete.module";
import {MatButtonModule} from "@angular/material/button";
import {UpdateModule} from "../update/update.module";
import {CheckTaskModule} from "../check-task/check-task.module";
import {RouterLink} from "@angular/router";
import {LoadUpdateModule} from "../update/load-update/load-update.module";



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
        DeleteModule,
        MatButtonModule,
        UpdateModule,
        CheckTaskModule,
        RouterLink,
        LoadUpdateModule
    ]
})
export class BodyModule { }
