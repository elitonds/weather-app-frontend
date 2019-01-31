import { DataCity } from './../dataCity.dto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-city',
  templateUrl: './grid-city.component.html',
  styleUrls: ['./grid-city.component.scss']
})
export class GridCityComponent implements OnInit {

  @Input()
  dataGrid : Array<DataCity> = new Array<DataCity>();
  @Input()
  totalRecords:number;

  cols: any[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      {field:'city',header:'Cidade'},
      {field:'codCountry',header:'Cidade'},
      {field:'weather',header:'Clima'}
    ]
  }

}
