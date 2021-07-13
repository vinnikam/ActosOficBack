import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Acto} from '../../dtos/acto';
import {Subscription} from 'rxjs';
import {Funcionario} from '../../dtos/funcionario';
import {tipoidentificacion, tipoimpuesto, causaldevolucion, tiporecurso, tipoacto, tipopublicacion, tiporecursopreced} from '../../config/datosbase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-acto',
  templateUrl: './crear-acto.component.html',
  styleUrls: ['./crear-acto.component.css']
})
export class CrearActoComponent implements OnInit {
  funcionarioActivo =  false;
  funcionarioSubscription: Subscription;
  funcioActivo   : Funcionario;

  // datos base
  tipoidentificacion : any;
  tipoimpuesto : any;
  causaldevolucion : any;
  tiporecurso : any;
  tipoacto : any;
  tipopublicacion :any;
  tiporecursopreced: any;

  actoOfForm : FormGroup;
  constructor(private fbuilder: FormBuilder, private actosService: ActosService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.tipoidentificacion = tipoidentificacion;
    this.tipoimpuesto = tipoimpuesto;
    this.causaldevolucion = causaldevolucion;
    this.tiporecurso = tiporecurso;
    this.tipoacto = tipoacto;
    this.tipopublicacion = tipopublicacion;
    this.tiporecursopreced = tiporecursopreced;

    this.funcionarioSubscription = this.actosService.funcionarioActivo.subscribe((data: Funcionario) => {
      this.funcioActivo = data;

      if (this.funcioActivo === null || this.funcioActivo === undefined) {
        this.funcionarioActivo = false;
      } else {
        this.funcionarioActivo = true;
      }
    });
    if (this.funcioActivo === null)
    {
      this.warning("Sin permisos para acceder, será redirigido a la página principal.");
      this.router.navigate(['/']);
    }
    this.actoOfForm = this.fbuilder.group({
      llave : [""],
      numResolucion: [""],
      numCordis: ["", Validators.required],
      numExpediente: ["", Validators.required],
      nombreContribuyente: ["", Validators.required],
      tipoIdentificacion: ["-1", Validators.required],
      numeroIdentificacion: ["", Validators.required],
      impuesto: [-1, Validators.required],
      objeto: [""],
      tipoActo: [-1, Validators.required],
      fechaActo: ["", Validators.required],
      vigencias: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      direccionNotificacion: ["", Validators.required],
      fechaDevolucion: [""],
      causalDevolucion: ["-1"],
      recursoPrecede: ["-1"],
      tiempoInterponRec: [""],
      oficina: [""],
      funcionario: [""],
      fechaSolicitud: [""],
      fechaPublicacion:  ["", Validators.required],
      tipoPublicacion: ["-1"],
      registroDistrital: ["",[Validators.pattern("^[0-9]*$")]],
      noPagina: [""],
      descripcion: [""],
      urlPdf: [""]
    });
  }



  crearActoOf(nuevoActoOf: Acto): void {
    nuevoActoOf.funcionarioCrea = this.funcioActivo.usuario;

    console.warn("Acto Oficial creado", nuevoActoOf);
    this.showSuccess(nuevoActoOf);
    this.actosService.crearActo(nuevoActoOf).subscribe(client => {
      //this.clientes.push(client);
      this.showSuccess(nuevoActoOf);
    });

    // this.cancelar("Se canceló la creación de un nuevo acto ")
  }
  showSuccess(nuevoActoOf: Acto): void {
    this.toastrService.success("Se creó un nuevo acto "+nuevoActoOf.descripcion);
    /*    this.toastrService.show('Mensaje estándar', {
        delay: 3000,
        progressBar: true,
        autohide: true
      });
  */
  }
  warning(mensaje: string): void {

    this.toastrService.warning(mensaje);

  }
  cancelar(): void {

    this.toastrService.warning("Se canceló la creación del acto. ");
    this.actoOfForm.reset();
  }

}
