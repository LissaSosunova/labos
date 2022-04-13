import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { OrdersComponent } from './components/orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MainComponent,
    SideBarComponent,
    PatientsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
