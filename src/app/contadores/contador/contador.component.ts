import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    templateUrl: './contador.html'
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base  : number = 5;
   acumular(base:number){
     this.numero += base;
   }
  }