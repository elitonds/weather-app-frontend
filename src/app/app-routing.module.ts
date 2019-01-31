import { ForecastComponent } from './features/forecast/forecast.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCityComponent } from './features/city/form-city/form-city.component';

const routes: Routes = [
   { path: '', component: FormCityComponent },
   { path: 'forecast', component: ForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
