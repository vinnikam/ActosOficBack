import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActosService} from '../../actos/actos.service';
import {ToastrService} from 'ngx-toastr';
import {Acto} from '../../dtos/acto';
import {Funcionario} from '../../dtos/funcionario';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-crear-funcio',
  templateUrl: './crear-funcio.component.html',
  styleUrls: ['./crear-funcio.component.css']
})
export class CrearFuncioComponent implements OnInit {
  funcioOfForm : FormGroup;

  constructor(private fbuilder: FormBuilder, private funcioService: FuncionarioService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.funcioOfForm = this.fbuilder.group({
      usuario: ["", Validators.required]
    });
  }
  crearFuncio(nuevoFuncio: Funcionario): void {
    this.funcioService.consultaFuncionbyNombre(nuevoFuncio).subscribe(funcionar =>{
      if (funcionar === null){
        this.adicionarFuncio(nuevoFuncio);
      } else{
        this.warning('EL usuario que desea adicionar ya se encuentra registrado.');
      }
    });
  }
  adicionarFuncio(nuevoFuncio: Funcionario){
    this.funcioService.crearFuncionario(nuevoFuncio).subscribe(funcionar=>{
      if (funcionar.id >0){
        this.showSuccess('El funcionario '+funcionar.usuario+' se adicionó exitosamente. ')
      }else{
        this.warning('Reintente de nuevo, el funcionario '+funcionar.usuario+' no se adicionó.')
      }
    });

  }
  showSuccess(mensaje : string){
    this.toastrService.success(mensaje);
  }
  warning(mensaje: string): void {

    this.toastrService.warning(mensaje);

  }
  cancelar(): void {

    this.toastrService.warning("Se canceló la creación del acto. ");
    this.funcioOfForm.reset();
  }

}
