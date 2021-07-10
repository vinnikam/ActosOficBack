import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Funcionario} from '../../dtos/funcionario';
import {Acto} from '../../dtos/acto';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autenticador',
  templateUrl: './autenticador.component.html',
  styleUrls: ['./autenticador.component.css']
})
export class AutenticadorComponent implements OnInit {

  autentForm : FormGroup;
  funcionarioSubscription: Subscription;
  constructor(private fbuilder: FormBuilder, private actosService: ActosService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.autentForm = this.fbuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required]
    });
  }
  autenticar(funcionario: Funcionario): void {
    this.actosService.loginFuncionario(funcionario).subscribe(rta => {
      if (rta != null ){
        if (rta.codigoError === "0"){
          this.actosService.funcionarioActivo.next(funcionario);
          this.showSuccess("Usuario autenticado con éxito.");
          this.router.navigate(['/actos/lista']);
        } else {
          this.warningSuccess("El usuario no se autenticó, revise los datos de acceso.")
          this.actosService.funcionarioActivo.next(null);
        }
      }

    });
    this.funcionarioSubscription = this.actosService.funcionarioActivo.subscribe((data: Funcionario) => {});
  }
  cancelar(): void {}
    showSuccess(mensaje: string): void {
    this.toastrService.success(mensaje);
  }
  warningSuccess(mensaje: string): void {
    this.toastrService.warning(mensaje);
  }
  ngOnDestroy(): void {
    this.funcionarioSubscription.unsubscribe();
  }
}
