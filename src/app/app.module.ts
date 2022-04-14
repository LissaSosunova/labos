import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchPipe } from './shared/pipes/search.pipe';
import { MainComponent } from './components/main/main.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { OrdersComponent } from './components/orders/orders.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OrdersEffects } from './store/effects/orders.effects';
import { reducers } from 'src/app/store/reducers';
import { PatientsEffects } from './store/effects/patients.effects';
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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([OrdersEffects, PatientsEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
