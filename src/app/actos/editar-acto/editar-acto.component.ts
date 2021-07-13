import {Component, Input, OnInit} from '@angular/core';
import {Acto} from '../../dtos/acto';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import {Funcionario} from '../../dtos/funcionario';
import {tipoidentificacion, tipoimpuesto, causaldevolucion, tiporecurso, tipoacto, tipopublicacion, tiporecursopreced} from '../../config/datosbase';
import {Router} from '@angular/router';


@Component({
  selector: 'app-editar-acto',
  templateUrl: './editar-acto.component.html',
  styleUrls: ['./editar-acto.component.css']
})
export class EditarActoComponent implements OnInit {
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

  @Input() actoed : Acto;

  constructor(private actosService: ActosService, private toastrService: ToastrService, private router: Router) { }

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
  }
  actualizar(): void {
    console.warn("Acto Oficial editado", this.actoed);
    this.actoed.funcionarioEdita = this.funcioActivo.usuario;

    this.actosService.editarActo(this.actoed).subscribe(dato => {
      //this.clientes.push(client);
      this.showSuccess(this.actoed);
    });
  }
  showSuccess(nuevoActoOf: Acto): void {
    this.toastrService.success("Se actualizó el acto "+nuevoActoOf.descripcion);
    /*    this.toastrService.show('Mensaje estándar', {
        delay: 3000,
        progressBar: true,
        autohide: true
      });
  */
  }
  cancelar(): void {

  }
  warning(mensaje: string): void {

    this.toastrService.warning(mensaje);

  }
}
