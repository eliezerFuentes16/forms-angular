import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {


    isLinear = false;
  	firstFormGroup!: FormGroup;
  	secondFormGroup!: FormGroup;
	threeFormGroup!: FormGroup;
	form: FormGroup;

  constructor(private fb: FormBuilder) {
  	this.form = this.fb.group({
      nitOCc: ['', []],
      quoteNumber: ['', []],
      client: ['', []],
      paymentTerms: ['', []],
      headquarters: ['', []],
      invoicingCondition: ['', []],
      consolidable: [false, []],
      valUnit: ['', []],
      dateQuote: ['', []],
      dateQuoteStart: ['', []],
      dateQuoteEnd: ['', []],
      porMaximum: ['', []],
      ivg: ['', []],
      opcion1: ['', []],
      opcion2: ['', []],
      opcion3: ['', []],
      opcion4: ['', []],
      opcion5: ['', []],
      opcion6: ['', []],
	 // 
		     
    });
  }



  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required],
    });
    this.threeFormGroup = this.fb.group({
      threedCtrl: ['', Validators.required],
    });
  }


  onSubmit(){
  	console.log(this.form.value)
  }

}
