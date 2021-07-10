import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Acto} from '../../dtos/acto';

@Component({
  selector: 'app-crear-acto',
  templateUrl: './crear-acto.component.html',
  styleUrls: ['./crear-acto.component.css']
})
export class CrearActoComponent implements OnInit {

  actoOfForm : FormGroup;
  constructor(private fbuilder: FormBuilder, private actosService: ActosService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.actoOfForm = this.fbuilder.group({
      numResolucion: ["", Validators.required],
      numRadicado: ["", Validators.required],
      numExpediente: ["", Validators.required],
      descripcion: ["", Validators.required],
      tipoIdentificacion: ["", Validators.required],
      numeroIdentificacion: ["", Validators.required],
      nombreContribuyente: ["", Validators.required],
      impuesto: [-1, Validators.required],
      objeto: ["", Validators.required],
      tipoActo: [-1, Validators.required],
      fechaActo: ["", Validators.required],
      vigencia: ["", [Validators.required, Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      direccionNotificacion: ["", Validators.required],
      fechaDevolucion: [""],
      causalDevolucion: [""],
      medioPublicacion: [-1, Validators.required],
      fechaPublicacion:  ["", Validators.required],
      periodo: [-1, Validators.required],
      urlPdf: [""],
      referenciaPdf: [""],
    });
  }



  crearActoOf(nuevoActoOf: Acto): void {
    console.warn("Acto Oficial creado", nuevoActoOf);
    this.showSuccess(nuevoActoOf);
    this.actosService.crearActo(nuevoActoOf).subscribe(client => {
      //this.clientes.push(client);
      this.showSuccess(nuevoActoOf);
    });

    this.actoOfForm.reset();
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
  cancelar(): void {
    console.log("Cancela creación Acto ");
    this.actoOfForm.reset();
  }

}
