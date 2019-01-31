import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WheatherService } from '../weather.service';
import { map, switchMap } from "rxjs/operators";
import { DataWeather } from '../dataWeather.dto';

@Component({
  selector: 'form-city',
  templateUrl: './form-city.component.html'
})
export class FormCityComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WheatherService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        city: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])],
        codCountry: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])]
      }
    );
  }

  public add() {
    let data:DataWeather = {
      city:this.formGroup.controls.city.value,
      codCountry:this.formGroup.controls.codCountry.value,
    } 
    this.weatherService.getWheather(data).pipe(
      map((res: any) => {
        return res;
      }),
      switchMap(weather=>{
        return this.weatherService.add(weather);
      }),
    ).subscribe(response => {
      console.log('log')
    }, error =>{
      console.log(error)
    })
  }
}
