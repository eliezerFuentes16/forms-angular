import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

    isLinear = false;
  	firstFormGroup!: FormGroup;
  	secondFormGroup!: FormGroup;
	threeFormGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.threeFormGroup = this._formBuilder.group({
      threedCtrl: ['', Validators.required],
    });
  }

}
