import {Component} from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Iron Man';
    edad:number = 53;
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `nombre: ${this.nombre} - edad: ${this.edad}`
}
cambiarNombre():void{
    this.nombre = 'Invencible';
}
cambiarEdad():void{
    this.edad = 35;
}
}