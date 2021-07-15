import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  constructor(private datapipe: DatePipe) { }

  /**
   * Operacion para formatear la salida de la fecha que le resta 1 dia.
   * @param fecha
   */
  public convertirFecha(fecha:Date):string {
    //console.log(fecha)
    const lafecha  = new Date(fecha.toString().substring(0, fecha.toString().length - 1));

    return this.datapipe.transform(lafecha, 'dd/MM/yyyy' );
  }
}
