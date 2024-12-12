import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { CategorizacionComponent } from './categorizacion/categorizacion.component';

export const routes: Routes = [{
    path:'registro',component:RegistroComponent
},{
    path:'categorizacion',component:CategorizacionComponent
}];
