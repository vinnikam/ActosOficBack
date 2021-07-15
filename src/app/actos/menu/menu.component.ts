import { Component, OnInit } from '@angular/core';
import {ActosService} from '../actos.service';
import {Subscription} from 'rxjs';
import {Funcionario} from '../../dtos/funcionario';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  funcionarioActivo =  false;
  funcionarioSubscription: Subscription;
  funcioActivo   : Funcionario;
  constructor(private actoServic: ActosService, private router: Router) { }
  items: MenuItem[];

  ngOnInit(): void {
    this.funcionarioSubscription = this.actoServic.funcionarioActivo.subscribe((data: Funcionario) => {
      this.funcioActivo = data;
      if (this.funcioActivo === null || this.funcioActivo === undefined) {
        this.funcionarioActivo = false;
      } else {
        this.funcionarioActivo = true;
      }
    });
    this.items = [
      {
        label: 'Actos',
        icon: 'pi pi-fw pi-file-o',
        items: [
          {label: 'Listado de Actos publicados', icon: 'pi pi-fw pi-copy', routerLink: 'actos/lista'}
        ]
      }
    ];
    if (this.funcionarioActivo){
      this.items.push({
        label: 'Operaciones Funcionario',
        icon: 'pi pi-fw pi-file-o',
        items: [
          {label: 'Crear actos individual', icon: 'pi pi-fw pi-copy', routerLink: 'actos/crear'},
          {label: 'Crear actos desde Archivo', icon: 'pi pi-fw pi-user', routerLink: 'actos/crearm'}
        ]
      });
    }
  }
  ngOnDestroy(): void {
    this.funcionarioSubscription.unsubscribe();
  }
  salir()
  {
    this.funcioActivo = null;
    this.funcionarioActivo = false;
    this.actoServic.funcionarioActivo.next(this.funcioActivo);
    this.router.navigate(['/']);

  }
}
