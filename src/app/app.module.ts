import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MyMatModule } from './mymat.module';

import { ActorService } from './services/actor.service';
import { ObservabledemoService } from './services/observabledemo.service';


import { AppComponent } from './app.component';
import { TrymatComponent } from './components/trymat/trymat.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';


@NgModule({
  declarations: [
    AppComponent,
    TrymatComponent,
    ActorlistComponent,
    ObservabledemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MyMatModule
  ],
  providers: [
    ActorService,
    ObservabledemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
