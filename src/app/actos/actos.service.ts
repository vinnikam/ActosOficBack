import { Injectable } from '@angular/core';

import {Acto} from '../dtos/acto';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {environment} from '../../environments/environment';
import {Funcionario} from '../dtos/funcionario';


@Injectable({
  providedIn: 'root'
})
export class ActosService {

  urlActos = environment.urlActos;
  urlActosNew = environment.urlActosNew;
  urlLoginFuncionario = environment.urlAutenticar;

  funcionarioActivo = new BehaviorSubject<Funcionario>(null);


  constructor(private http: HttpClient) { }


  getActos(): Observable<Acto[]> {
    return this.http.get<Acto[]>(this.urlActos);
  }
  crearBanda(nuevoActoOf: Acto): Observable<Acto> {
    return this.http.post<Acto>(this.urlActosNew, nuevoActoOf).pipe(
      catchError(err => {
        console.log(`En el servicio crear Acto oficial: $(err.error)`);
        return throwError(err);

      }));
  }

  public loginFuncionario(usuario: Funcionario): Observable<any> {
    const datosF = {
      usuarioauten: usuario.usuario,
      canal: usuario.clave
    };
    return this.http.post<any>(this.urlLoginFuncionario, datosF).pipe(catchError(err => {
      console.log(`Autenticando funcionario: $(err.error)`);
      return throwError(err);

    }));
  }
}
