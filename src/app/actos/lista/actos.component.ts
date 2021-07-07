import { Component, OnInit } from '@angular/core';
import {ActosService} from '../actos.service';
import {Acto} from '../../dtos/acto';

@Component({
  selector: 'app-actos',
  templateUrl: './actos.component.html',
  styleUrls: ['./actos.component.css']
})
export class ActosComponent implements OnInit {

  public txtFiltro: string = null;

  actos: Array<Acto>;
  actosO: Array<Acto>;

  selected = false;
  crearacto = false;
  actoSeleccionado: Acto;
  displayBasic: boolean;
  tituloDialog: string;

  constructor(public actosService: ActosService) { }

  ngOnInit(): void {
    this.getActos();
    this.tituloDialog = 'Expediente';
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

  showBasicDialog() {
    this.displayBasic = true;
  }
}
