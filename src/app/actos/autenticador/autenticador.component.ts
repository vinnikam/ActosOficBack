import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Funcionario} from '../../dtos/funcionario';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {FuncionarioService} from '../../funcionarios/funcionario.service';

@Component({
  selector: 'app-autenticador',
  templateUrl: './autenticador.component.html',
  styleUrls: ['./autenticador.component.css']
})
export class AutenticadorComponent implements OnInit {

  autentForm : FormGroup;
  funcionarioSubscription: Subscription;
  constructor(private fbuilder: FormBuilder, private actosService: ActosService, private toastrService: ToastrService, private router: Router,
              private funcioService: FuncionarioService) { }

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

          this.validarUsuario(funcionario);

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
  validarUsuario(funcionario: Funcionario): void {
    this.funcioService.consultaFuncionbyNombre(funcionario).subscribe(funcio =>{
      if (funcio.estado == 1){
        this.router.navigate(['/actos/lista']);
        this.actosService.funcionarioActivo.next(funcionario);
      }else{
        this.warningSuccess('El usuario '+funcio.usuario+' no esta autorizado');
        this.actosService.funcionarioActivo.next(null);

      }
    });
  }

}
