import { Router } from '@angular/router';
import { DataCity } from './../dataCity.dto';
import { Component, OnInit, Input } from '@angular/core';
import { WheatherService } from '../weather.service';

@Component({
  selector: 'grid-city',
  templateUrl: './grid-city.component.html',
  styleUrls: ['./grid-city.component.scss']
})
export class GridCityComponent implements OnInit {

  dataGrid: Array<DataCity> = new Array<DataCity>();
  totalRecords: number;

  cols: any[];

  constructor(private route: Router, private weatherService: WheatherService) { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Cidade' },
      { field: 'country', header: 'País' },
      { field: 'weather', header: 'Clima' }
    ]
    this.listCities();
  }

  openForecast(row: DataCity) {
    this.route.navigateByUrl(`/forecast/${row.name},${row.country}`);
  }

  listCities() {
    this.weatherService.list().subscribe(result => {
      this.dataGrid = result.data;
    })
  }

  onPage(event) {
    console.log(event);
  }

}
