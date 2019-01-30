import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-city',
  templateUrl: './form-city.component.html'
})
export class FormCityComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        name: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])],
        uf: [{ value: undefined, disabled: false }, Validators.compose([Validators.required])]
      }
    );
  }

  send() {

  }

}
