import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActosComponent } from './lista/actos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import {CrearActoComponent} from './crear-acto/crear-acto.component';
import { AutenticadorComponent } from './autenticador/autenticador.component';
import {ActosRoutingModule} from './actos-routing.module';
import { CrearActosComponent } from './crear-actos/crear-actos.component';
import { MenuComponent } from './menu/menu.component';





@NgModule({
  declarations: [ActosComponent, DetalleComponent, CrearActoComponent, AutenticadorComponent, CrearActosComponent, MenuComponent],
  imports: [
    ActosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [ActosComponent, CrearActoComponent, AutenticadorComponent, CrearActosComponent, MenuComponent]
})
export class ActosModule { }
