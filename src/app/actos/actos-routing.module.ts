import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActosComponent} from './lista/actos.component';
import {CrearActoComponent} from './crear-acto/crear-acto.component';
import {AutenticadorComponent} from './autenticador/autenticador.component';
import {CrearActosComponent} from './crear-actos/crear-actos.component';


const routes: Routes = [{
  path: 'actos',
  children: [

    {
      path: 'lista',
      component: ActosComponent
    },
    {
      path: 'crear',
      component: CrearActoComponent
    },
    {
      path: 'crearm',
      component: CrearActosComponent
    },
    {
      path: 'autenticar',
      component: AutenticadorComponent
    }


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActosRoutingModule { }
