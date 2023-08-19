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
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
//routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  { path: 'ngfor', component:NgforComponent},
  { path: 'binding', component:BindingComponent},
  { path: 'event', component:EventComponent},
  { path: 'container', component:MycontainerComponent},
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
