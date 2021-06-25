import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActosComponent } from './lista/actos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import {CrearActoComponent} from './crear-acto/crear-acto.component';
import { AutenticadorComponent } from './autenticador/autenticador.component';
import {ActosRoutingModule} from './actos-routing.module';




@NgModule({
  declarations: [ActosComponent, DetalleComponent, CrearActoComponent, AutenticadorComponent],
  imports: [
    ActosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [ActosComponent, CrearActoComponent, AutenticadorComponent]
})
export class ActosModule { }
