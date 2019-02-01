import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../dataForecast.dto';

@Component({
  selector: 'card-forecast',
  templateUrl: './card-forecast.component.html',
  styleUrls: ['./card-forecast.component.scss']
})
export class CardForecastComponent implements OnInit {

  @Input() data: Weather;

  constructor() { }

  ngOnInit() {
  }

}
