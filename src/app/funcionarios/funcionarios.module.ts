import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFuncioComponent } from './lista-funcio/lista-funcio.component';
import { CrearFuncioComponent } from './crear-funcio/crear-funcio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutenticarComponent } from './autenticar/autenticar.component';
import {FuncionariosRoutingModule} from './funcionarios-routing.module';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { EditarFuncioComponent } from './editar-funcio/editar-funcio.component';

@NgModule({
  declarations: [ListaFuncioComponent, CrearFuncioComponent, AutenticarComponent, EditarFuncioComponent],
  imports: [

    CommonModule,
    FuncionariosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    MenubarModule
  ],
  exports: [ListaFuncioComponent, CrearFuncioComponent, AutenticarComponent, EditarFuncioComponent]
})
export class FuncionariosModule { }
