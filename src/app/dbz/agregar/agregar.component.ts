import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent{
  
  @Input('nuevo') nuevo:Personaje={
    nombre:'',
    poder: 0
  }
  constructor(private DbzService:DbzService){

  }
  //@Output() nuevoPj:EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    //this.nuevoPj.emit( this.nuevo );
    this.DbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }
}