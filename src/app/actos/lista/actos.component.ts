import { Component, OnInit } from '@angular/core';
import {ActosService} from '../actos.service';
import {Acto} from '../../dtos/acto';
import {Subscription} from 'rxjs';
import {Funcionario} from '../../dtos/funcionario';
import {UtilidadesService} from '../utilidades.service';

@Component({
  selector: 'app-actos',
  templateUrl: './actos.component.html',
  styleUrls: ['./actos.component.css']
})
export class ActosComponent implements OnInit {

  funcionarioActivo =  false;
  funcionarioSubscription: Subscription;
  funcioActivo   : Funcionario;

  public txtFiltro: string = null;

  actos: Array<Acto>;
  actosO: Array<Acto>;

  selected = false;
  crearacto = false;
  actoSeleccionado: Acto;
  displayBasic: boolean;
  displayBasicEd : boolean;
  tituloDialog: string;

  constructor(public actosService: ActosService, public utilidades: UtilidadesService) { }

  ngOnInit(): void {
    this.getActos();
    this.tituloDialog = 'Expediente';
    this.funcionarioSubscription = this.actosService.funcionarioActivo.subscribe((data: Funcionario) => {
      this.funcioActivo = data;
      if (this.funcioActivo === null || this.funcioActivo === undefined) {
        this.funcionarioActivo = false;
      } else {
        this.funcionarioActivo = true;
      }
    });

  }
  getActos(): void {
    this.actosService.getActos()
      .subscribe(actos => {
        this.actos = actos;
        this.actosO = this.actos;
      });
  }
  filtrar(){
    console.log('Ingresar ' + this.txtFiltro);
    if (this.txtFiltro == null || this.txtFiltro === '') {
      this.actos = this.actosO;
    } else {
      this.actos =  this.actos.filter(c => c.numeroIdentificacion.match(this.txtFiltro));

    }

  }
  crear(): void{
    this.crearacto = true;
    this.selected = false;
  }
  onSelect(acto: Acto ): void {
    this.selected = true;
    this.crearacto = false;
    this.actoSeleccionado = acto;
    this.displayBasic = true;
    this.tituloDialog = 'Expediente :' + this.actoSeleccionado.numExpediente;

  }
  editar(acto: Acto ): void {
    this.selected = true;
    this.crearacto = false;
    this.actoSeleccionado = acto;
    this.displayBasicEd = true;
    this.tituloDialog = 'Expediente :' + this.actoSeleccionado.numExpediente;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  cambiaFecha(lafecha:Date): string {
    return this.utilidades.convertirFecha(lafecha);
  }
}
