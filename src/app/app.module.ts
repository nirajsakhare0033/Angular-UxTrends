import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { BindingComponent } from './binding/binding.component';
import { EventComponent } from './event/event.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartoonComponent } from './product/cartoon/cartoon.component';
import { ParentComponent } from './parent/parent.component';
//routing
const appRoutes: Routes = [
  { path: '', redirectTo: 'ngfor', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    
    children: [
      {path:'', component:ProductComponent},
      { path: 'cartoon', component: CartoonComponent }],
  },
  { path: 'ngfor', component: NgforComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'event', component: EventComponent },
  { path: 'container', component: MycontainerComponent },
  {path:'buy-products', component:ParentComponent},
  { path: '**', component: PagenotfoundComponent },
];
//routing

@NgModule({
  declarations: [
    AppComponent,
    MycontainerComponent,
    TopnavComponent,
    BindingComponent,
    EventComponent,
    NgforComponent,
    HomeComponent,
    AboutusComponent,
    ProductComponent,
    ContactComponent,
    PagenotfoundComponent,
    CartoonComponent,
    ParentComponent,
  ],
  //router
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
