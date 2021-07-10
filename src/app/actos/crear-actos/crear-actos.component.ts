import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {Acto} from '../../dtos/acto';
import {Subscription} from 'rxjs';
import {Funcionario} from '../../dtos/funcionario';
import {ActosService} from '../actos.service';

@Component({
  selector: 'app-crear-actos',
  templateUrl: './crear-actos.component.html',
  styleUrls: ['./crear-actos.component.css']
})
export class CrearActosComponent implements OnInit {
  funcionarioActivo =  false;
  funcionarioSubscription: Subscription;
  funcioActivo   : Funcionario;

  arrayBuffer:any;
  file:File;
  data: [][];
  registros:number = 0;
  procesar = false;

  constructor(private actosService: ActosService) { }

  ngOnInit(): void {
    this.funcionarioSubscription = this.actosService.funcionarioActivo.subscribe((data: Funcionario) => {
      this.funcioActivo = data;
      if (this.funcioActivo === null || this.funcioActivo === undefined) {
        this.funcionarioActivo = false;
      } else {
        this.funcionarioActivo = true;
      }
    });
  }
  incomingfile(event)
  {
    this.file= event.target.files[0];
    //console.log('Procesar Exxel 1 ')
  }
  Upload() {
    //console.log('Procesar Exxel')
    //console.log(this.data)
    let i = 1;
    for (i = 1; i< this.data.length; i++){
      const fila = this.data[i];
      const elActo = this.validar(fila);
      if (elActo !== null){

      }
      console.log(fila);
    }
  }
  cargarArchivo(evt: any) {
    const target : DataTransfer =  <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('No se pueden usar múltiples archivos');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      //console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      //console.log(this.data);

      let x = this.data.slice(1);
      //console.log(x);
      this.registros = this.data.length -1;
      if (this.registros>0){
        this.procesar = true;
      }else{
        this.procesar = false;
      }
    };

    reader.readAsBinaryString(target.files[0]);


  }
  validar(fila: any): Acto {
    //id: number, numResolucion: string, numRadicado: string, numExpediente: string, descripcion: string, numeroIdentificacion: string,
    // tipoIdentificacion: string, nombreContribuyente: string, impuesto: number,
    // objeto: string, tipoActo: string, fechaActo: Date, vigencia: number, direccionNotificacion: string, fechaDevolucion: Date,
    // causalDevolucion: string, medioPublicacion: string, fechaPublicacion: Date, periodo: number
    //console.log(fila)
    const elActo = new Acto(0, fila[0], fila[1], fila[2], fila[16], fila[5], fila[4], fila[3], fila[6], fila[7], fila[8],
      this.convertDate(fila[9]), this.converNumero(fila[10]), fila[11], this.convertDate(fila[12]), fila[13], fila[14] ,
      this.convertDate(fila[15]), this.converNumero(fila[17]) , fila[18], fila[19], this.funcioActivo.usuario, new Date(), null, null);
    //console.log(elActo)
    return elActo;
  }
  converNumero(campo): number {
    console.log(campo)
    if (campo !== ""){
      const valor = Number(campo);
      return campo;
    }
    return 0;
  }
  convertDate(campo): Date {
    console.log("Fecha" +campo);
    return new Date(campo);
  }
  /*
  uploadExcel(e) {

    try{

      const fileName = e.target.files[0].name;

      import('xlsx').then(xlsx => {
        let workBook = null;
        let jsonData = null;
        const reader = new FileReader();
        // const file = ev.target.files[0];
        reader.onload = (event) => {
          const data = reader.result;
          workBook = xlsx.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial, name) => {
            const sheet = workBook.Sheets[name];
            initial[name] = xlsx.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          this.products = jsonData[Object.keys(jsonData)[0]];
          console.log(this.products);

        };
        reader.readAsBinaryString(e.target.files[0]);
      });

    }catch(e){
      console.log('error', e);
    }

  }*/
  /*
  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
    }
    fileReader.readAsArrayBuffer(this.file);
  }*/
}
