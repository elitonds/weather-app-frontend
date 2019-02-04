import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WheatherService } from '../weather.service';
import { DataCity } from './../dataCity.dto';

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

  public listCities() {
    this.weatherService.list(0, 10).subscribe(result => {
      this.dataGrid = result.data;
      this.totalRecords = result.total;
    })
  }

  onPage(event) {
    let page = event.first == 0?event.first:event.first/event.rows;
    let size = event.rows;
    this.weatherService.list(page, size).subscribe(result => {
      this.dataGrid = result.data;
      this.totalRecords = result.total;
    })
  }

}
