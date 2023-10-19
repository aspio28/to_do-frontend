import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendComponent} from "./insert/send/send.component";

const routes: Routes = [{
  path: 'insert', component: SendComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
