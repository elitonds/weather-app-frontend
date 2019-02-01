import { Router } from '@angular/router';
import { DataCity } from './../dataCity.dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-city',
  templateUrl: './grid-city.component.html',
  styleUrls: ['./grid-city.component.scss']
})
export class GridCityComponent implements OnInit {

  @Input() dataGrid : Array<DataCity> = new Array<DataCity>();
  @Input() totalRecords:number;

  cols: any[];

  constructor(private route:Router) { }

  ngOnInit() {
    this.dataGrid.push({city:"Blumenau", codCountry:"BR"})
    this.cols = [
      {field:'city',header:'Cidade'},
      {field:'codCountry',header:'País'},
      {field:'weather',header:'Clima'}
    ]
  }

  openForecast(row:DataCity){
    this.route.navigateByUrl(`/forecast/${row.city},${row.codCountry}`);
  }

}
