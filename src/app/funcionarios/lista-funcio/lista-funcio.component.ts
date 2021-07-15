import { Component, OnInit } from '@angular/core';
import {Funcionario} from '../../dtos/funcionario';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-lista-funcio',
  templateUrl: './lista-funcio.component.html',
  styleUrls: ['./lista-funcio.component.css']
})
export class ListaFuncioComponent implements OnInit {

  funcionarios: Array<Funcionario>;
  adminActivo: false;
  displayBasicEd : boolean;
  tituloDialog: string;
  funcionSeleccionado: Funcionario;
  displayBasicCr =  false;

  constructor(public funcioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getFuncionarios();
  }
  getFuncionarios(): void {
    this.funcioService.getFuncionarios()
      .subscribe(funcions => {
        this.funcionarios = funcions;
      });
  }
  editar(funcioSelect: Funcionario): void {
    this.tituloDialog = 'Edición de funcionario';
    this.funcionSeleccionado = funcioSelect;
    this.displayBasicEd = true;
  }
  crear(): void {
    this.tituloDialog = 'Adición de funcionario';
    this.displayBasicCr = true;
  }
  actualizar():void{
    this.displayBasicCr=false;
    this.getFuncionarios();
  }
}
