import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-service-pedidos',
  templateUrl: './service-pedidos.component.html',
  styleUrls: ['./service-pedidos.component.css']
})
export class ServicePedidosComponent implements OnInit {


    isLinear = false;
  	firstFormGroup!: FormGroup;
  	secondFormGroup!: FormGroup;
	threeFormGroup!: FormGroup;
	form: FormGroup;


  constructor(private fb: FormBuilder) {
  	this.form = this.fb.group({
      nitOCC: ['', []],
      cantidad: ['', []],
      numberQuote: ['', []],
      client: ['', []],
      headquarters: ['', []],
      numberPolicy: ['', []],
      quantity: ['', []],
      unitService: ['', []],
      descriptionRate: ['', []],
      venPolicy: ['', []],
      origin: ['', []],
      destiny: ['', []],
      sender: ['', []],
      typeDocument: ['', []],
      direction: ['', []],
      addresseeDesti: ['', []],
      numberIdentification: ['', []],
      directionSender: ['', []],
      phoneSender: ['', []],
      typeDocumentSender: ['', []],
      typeDocumentDesti: ['', []],
      directionDesti: ['', []],
      billDesti: ['', []],
      numberIdentificationDesti: ['', []],
      numberIdentificationSender: ['', []],
      phoneDesti: ['', []],
      typePackaging: ['', []],
      approximateWeight: ['', []],
      merchandise: ['', []],
      specialPackaging: ['', []],
      packingunit: ['', []],
      averageVolume: ['', []],
      declaredValue: ['', []],
      dispatchModality: ['', []],
      specialConditions: ['', []],
      securitySeals: ['', []],
      dateVingencyStart: ['', []],
      camp1: ['', []],
      minimumLoadingDate: ['', []],
      maximumLoadingDate: ['', []],
      securitySealsSeal: ['', []],
      initialEffectiveDate: ['', []],
      customerFreight: ['', []],
      freightDriver: ['', []],
      requiresAccompaniment: ['', []],
      observationRates: ['', []],
      requiresSpecificPolicy: ['', []],
      observations: ['', []],
      observationsTariffs: ['', []],
      agencyInCharge: ['', []],
      freightDriver1: ['', []],
      freightDriver2: ['', []],
      freightDriver3: ['', []],
      customerFreight1: ['', []],
      customerFreight2: ['', []],
      customerFreight3: ['', []],

		     
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
