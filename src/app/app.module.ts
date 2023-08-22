import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
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
import { ChildComponent } from './child/child.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { MessageService } from './appService/message.service';
import { FormsModule } from '@angular/forms';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherComponent } from './weather/weather.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusChildComponent } from './aboutus-child/aboutus-child.component';
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
  {path:'temperature', component:TemperatureComponent},
  {path:'weather', component:WeatherComponent},
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
    ChildComponent,
    Card1Component,
    Card2Component,
    TemperatureComponent,
    WeatherComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusChildComponent,
    
  ],
  //router
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
