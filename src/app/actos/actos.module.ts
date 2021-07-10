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
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { EditarActoComponent } from './editar-acto/editar-acto.component';




@NgModule({
  declarations: [ActosComponent, DetalleComponent, CrearActoComponent, AutenticadorComponent, CrearActosComponent, MenuComponent, EditarActoComponent],
  imports: [
    ActosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    MenubarModule

  ],
  exports: [ActosComponent, CrearActoComponent, AutenticadorComponent, CrearActosComponent, MenuComponent, EditarActoComponent]
})
export class ActosModule { }
