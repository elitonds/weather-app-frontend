import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { DataCity } from '../dataCity.dto';
import { WheatherService } from '../weather.service';
import { GridCityComponent } from '../grid-city/grid-city.component';

@Component({
  selector: 'form-city',
  templateUrl: './form-city.component.html'
})
export class FormCityComponent implements OnInit {

  public formGroup: FormGroup;
  @ViewChild("grid")
  public grid:GridCityComponent;

  constructor(private formBuilder: FormBuilder,
    private weatherService: WheatherService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        name: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])],
        country: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])]
      }
    );
  }

  public add() {
    let data: DataCity = {
      name: this.formGroup.controls.name.value,
      country: this.formGroup.controls.country.value,
    }
    this.weatherService.add(data).subscribe(response => {
      let action = data.id ? 'alterada' : 'cadastrada';
      this.messageService.add({ key: 'main-toast', severity: 'sucess', summary: 'Sucesso', detail: 'Cidade ' + action + ' com sucesso' });  
      this.grid.listCities()
      this.clearFields()
    }, error => {
      this.messageService.add({ key: 'main-toast', severity: 'error', summary: 'Erro', detail: error.error.message });
      this.clearFields()
    })
  }

  clearFields() {
    this.formGroup.reset();
  }
}
