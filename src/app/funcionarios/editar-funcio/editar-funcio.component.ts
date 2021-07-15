import {Component, Input, OnInit} from '@angular/core';
import {Acto} from '../../dtos/acto';
import {Funcionario} from '../../dtos/funcionario';
import {FormGroup} from '@angular/forms';
import {FuncionarioService} from '../funcionario.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editar-funcio',
  templateUrl: './editar-funcio.component.html',
  styleUrls: ['./editar-funcio.component.css']
})
export class EditarFuncioComponent implements OnInit {
  funcioOfForm : FormGroup;

  @Input() funcioed : Funcionario;

  constructor(private funcioService: FuncionarioService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  actualizar():void {
    this.funcioService.modificaFuncionario(this.funcioed).subscribe(funcio => {
      if (funcio !== null){
        this.showSuccess('Se actualizó el estado del funcionario. ');
      }
    })

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
