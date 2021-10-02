import { Component} from '@angular/core';

@Component({
  selector: 'app-multiplicador',
  templateUrl: './multiplicador.component.html',
})
export class MultiplicadorComponent{
public titulo:string = 'multiplicador fome la wea';
public base:number = 8;
public numero:number = 5;
public resultado:number = this.numero * this.base;
multiplicador(base:number){
  this.numero *= base;
}
divisor(base:number){
  this.numero /= base;
}
}
