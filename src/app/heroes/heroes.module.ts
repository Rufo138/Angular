import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { MultiplicadorComponent } from './multiplicador/multiplicador.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
        MultiplicadorComponent,
    ],
    exports:[
        ListadoComponent,
        HeroeComponent,
        MultiplicadorComponent,
    ],
    imports:[
        CommonModule,
    ]
})
export class HeroesModule {
}