import { DataWeather } from './../dataWeather.dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WheatherService } from '../weather.service';
import { map, switchMap } from "rxjs/operators";
import { DataCity } from '../dataCity.dto';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'form-city',
  templateUrl: './form-city.component.html'
})
export class FormCityComponent implements OnInit {

  public formGroup: FormGroup;
  cities : Array<DataCity> = new Array<DataCity>();
  totalRecords:number;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WheatherService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cities.push({city:"London", codCountry:"GB"});
    this.cities.push({city:"London", codCountry:"GB"});
    this.formGroup = this.formBuilder.group(
      {
        city: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])],
        codCountry: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])]
      }
    );
  }

  public add() {
    let data: DataCity = {
      city: this.formGroup.controls.city.value,
      codCountry: this.formGroup.controls.codCountry.value,
    }
    this.weatherService.getWheather(data).pipe(
      map((res: any) => {
        return res;
      }),
      // switchMap((weather: DataWeather) => {
      //     return this.weatherService.add(weather);
      // }),
    ).subscribe(response => {
      this.cities.push(data);
    }, error => {
      console.log(error);
      this.messageService.add({ key: 'main-toast', severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }
}
