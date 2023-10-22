import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import {HeaderModule} from "./header/header.module";
import {SendModule} from "./insert/send/send.module";
import {BodyModule} from "./body/body.module";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataUpdateService} from "./data-update.service";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GraphQLModule,
        RouterModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HeaderModule,
        SendModule,
        BodyModule
    ],
  providers: [DataUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
