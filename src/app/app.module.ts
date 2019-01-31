import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCityComponent } from './features/city/form-city/form-city.component';
import { GridCityComponent } from './features/city/grid-city/grid-city.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import { WheatherService } from './features/city/weather.service';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';

@NgModule({
  declarations: [
    AppComponent,
    FormCityComponent,
    GridCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    InputTextModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [WheatherService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
