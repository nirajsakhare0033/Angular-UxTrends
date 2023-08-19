import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { BindingComponent } from './binding/binding.component';
import { EventComponent } from './event/event.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    TopnavComponent,
    BindingComponent,
    EventComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
