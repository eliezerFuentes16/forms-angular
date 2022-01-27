import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-calendar-routes',
  templateUrl: './calendar-routes.component.html',
  styleUrls: ['./calendar-routes.component.css','./calendarios.component.css']
})
export class CalendarRoutesComponent implements OnInit {
  semana = [
    'Cars',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
    'Sellers',
  ];
  diasSemana=[
	'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ]

  lunes:any = [];
  martes:any = [];
  miercoles:any = [];
  jueves:any = [];
  viernes:any = [];
  sabado:any = [];
  domingo:any = [];

  espacios:any=[];
  carros = ["Carro1",
     "Carro2", "Carro3", 
     "Carro4", "Carro5", 
     "Carro6", "Carro7", "Carro8", "Carro9", "Carro10", "Carro11"];

  sellers=["Eliezer Fuentes", "Sancho Panza", "Cofla Aguileras", "David Moreno",
  "Darwin Machis", "Jose Pekerman","Pablo Sandoval", "Eutilio Perez", "Newman Romero",
  "Cade Gota"]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.container)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data)
      console.log(event.container.data)
      console.log(event.previousIndex)
      console.log(event.currentIndex)
      console.log(this.sellers[event.previousIndex])
      if(!event.container.data.includes(this.sellers[event.previousIndex]) || event.container.data==this.sellers){
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        this.sellers=["Eliezer Fuentes", "Sancho Panza", "Cofla Aguileras", "David Moreno",
          "Darwin Machis", "Jose Pekerman","Pablo Sandoval", "Eutilio Perez", "Newman Romero",
		    "Cade Gota"]
      }

   
      
    }
    if (event.previousContainer === event.container && event.container.data == this.carros) {
      moveItemInArray(this.carros, event.previousIndex, event.currentIndex);
      
    }

    for (let i = 0; i < this.carros.length; i++) {
      const carro = this.carros[i];
      const espacio = this.espacios[i];
      console.log(espacio,"Espacio")
      let longitudArrays=[
        espacio[0].length,
        espacio[1].length,
        espacio[2].length,
        espacio[3].length,
        espacio[4].length,
        espacio[5].length,
        espacio[6].length
    ]
    console.log(longitudArrays,"longitudArrays")
      let max = Math.max(...longitudArrays)
      console.log(max,"Max");
      const grillas=document.getElementsByClassName("grillas-"+i);
      for (let grilla = 0; grilla < grillas.length; grilla++) {
        if(max==0){
          max=1;
        }
        (grillas[grilla] as HTMLElement).style.height=61.2*max+"px";
        
        
      }
    }

  }
  
    


     ngOnInit() {
       
      for (let index = 0; index < this.carros.length; index++) {
        let dias:any=[[],[],[],[],[],[],[]];

        this.espacios.push(dias);
      }
      console.log(this.espacios);
      console.log(this.espacios["Carro1"]);
      console.log(this.espacios);
      console.log(this.espacios.length);
    }

    guardar(){
      console.log("Guardar");
      console.log(this.espacios)
    }
  constructor() { }



}
