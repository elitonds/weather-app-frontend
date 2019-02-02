import { Component, OnInit } from '@angular/core';
import { DataForecast } from './dataForecast.dto';
import { WheatherService } from '../city/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  data: DataForecast;
  cityName: string;

  constructor(private weatherService: WheatherService, private route: ActivatedRoute) { }

  ngOnInit() {
    let routeParams = this.route.snapshot.paramMap.get("city").split(",");
    this.cityName = routeParams[0];
    this.weatherService.getForecast({ name: routeParams[0], country: routeParams[1] }).subscribe(resp => {
      this.data = resp;
    });
  }

}
