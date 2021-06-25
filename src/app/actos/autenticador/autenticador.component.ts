import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Funcionario} from '../../dtos/funcionario';
import {Acto} from '../../dtos/acto';

@Component({
  selector: 'app-autenticador',
  templateUrl: './autenticador.component.html',
  styleUrls: ['./autenticador.component.css']
})
export class AutenticadorComponent implements OnInit {

  autentForm : FormGroup;
  constructor(private fbuilder: FormBuilder, private actosService: ActosService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.autentForm = this.fbuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required]
    });
  }
  autenticar(funcionario: Funcionario): void {
    this.actosService.loginFuncionario(funcionario).subscribe(rta => {
      alert (rta);
      if (rta != null ){
        if (rta.codigoError === "0"){
          this.showSuccess("Usuario autenticado con éxito.");
        } else {
          this.warningSuccess("El usuario no se autenticó, revise los datos de acceso.")
        }
      }

    });
  }
  cancelar(): void {}
  showSuccess(mensaje: string): void {
    this.toastrService.success(mensaje);
  }
  warningSuccess(mensaje: string): void {
    this.toastrService.warning(mensaje);
  }
}
