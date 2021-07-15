import {RouterModule, Routes} from '@angular/router';

import {CrearActoComponent} from '../actos/crear-acto/crear-acto.component';
import {AutenticadorComponent} from '../actos/autenticador/autenticador.component';
import {NgModule} from '@angular/core';
import {ListaFuncioComponent} from './lista-funcio/lista-funcio.component';
import {CrearFuncioComponent} from './crear-funcio/crear-funcio.component';
import {AutenticarComponent} from './autenticar/autenticar.component';
import {EditarFuncioComponent} from './editar-funcio/editar-funcio.component';

const routes: Routes = [{
  path: 'funcionarios',
  children: [

    {
      path: 'autenticar',
      component: AutenticarComponent
    },
    {
      path: 'lista',
      component: ListaFuncioComponent
    },
    {
      path: 'crear',
      component: CrearFuncioComponent
    },
    {
      path: 'editar',
      component: EditarFuncioComponent
    }


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
