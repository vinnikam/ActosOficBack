import {Component, Input, OnInit} from '@angular/core';
import {Acto} from '../../dtos/acto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() acto : Acto;

  constructor() { }

  ngOnInit(): void {
  }

}
