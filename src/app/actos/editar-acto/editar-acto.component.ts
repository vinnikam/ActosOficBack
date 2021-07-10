import {Component, Input, OnInit} from '@angular/core';
import {Acto} from '../../dtos/acto';
import {ActosService} from '../actos.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editar-acto',
  templateUrl: './editar-acto.component.html',
  styleUrls: ['./editar-acto.component.css']
})
export class EditarActoComponent implements OnInit {

  @Input() actoed : Acto;

  constructor(private actosService: ActosService, private toastrService: ToastrService) { }

  ngOnInit(): void {

  }
  actualizar(): void {
    console.warn("Acto Oficial editado", this.actoed);

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
}
