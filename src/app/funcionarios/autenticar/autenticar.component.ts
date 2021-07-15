import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {Funcionario} from '../../dtos/funcionario';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent implements OnInit {
  autentForm : FormGroup;

  constructor(private fbuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.autentForm = this.fbuilder.group({
      usuario: ["", Validators.required],
      clave: ["", Validators.required]
    });
  }
  autenticar(funcionario: Funcionario): void {
    if (funcionario.usuario === 'adminactos' && funcionario.clave === '123456'){
      this.router.navigate(['/funcionarios/lista']);
    }
  }
  cancelar(): void {}
  showSuccess(mensaje: string): void {
    this.toastrService.success(mensaje);
  }
  warningSuccess(mensaje: string): void {
    this.toastrService.warning(mensaje);
  }

}
