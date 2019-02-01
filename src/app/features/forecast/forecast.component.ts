import { Component, OnInit } from '@angular/core';
import { DataForecast } from './dataForecast.dto';
import { WheatherService } from '../city/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  data:DataForecast;
  constructor(private weatherService:WheatherService) { }

  ngOnInit() {
    this.data = this.weatherService.getMockForecast();
  }

}
