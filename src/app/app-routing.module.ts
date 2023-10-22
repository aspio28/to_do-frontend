import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendComponent} from "./insert/send/send.component";
import {UpdateComponent} from "./update/update.component";

const routes: Routes = [{
  path: 'insert', component: SendComponent
},
  {
    path: 'update', component: UpdateComponent
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
