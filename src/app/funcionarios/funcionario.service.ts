import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {Acto} from '../dtos/acto';
import {catchError} from 'rxjs/operators';
import {Funcionario} from '../dtos/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  urlFuncions = environment.urlFuncionarios;
  urlFuncionaNew = environment.urlFuncioNew;
  urlFuncionaBorra = environment.urlFuncioBorrar;
  urlFuncionaModific = environment.urlFuncioModificar;
  urlFuncionabyNombre = environment.urlFunciobyNombre;


  constructor(private http: HttpClient) { }
  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.urlFuncions);
  }
  crearFuncionario(funcionarioNuevo: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.urlFuncionaNew, funcionarioNuevo).pipe(
      catchError(err => {
        console.log(`En el servicio crear Funcionario: $(err.error)`);
        return throwError(err);

      }));
  }
  modificaFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(this.urlFuncionaModific, funcionario).pipe(
      catchError(err => {
        console.log(`En el servicio editar Funcionario: $(err.error)`);
        return throwError(err);

      }));
  }
 borrarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.delete<Funcionario>(this.urlFuncionaBorra).pipe(
      catchError(err => {
        console.log(`En el servicio borrar Funcionario: $(err.error)`);
        return throwError(err);

      }));
  }
  consultaFuncionbyNombre(funcionario: Funcionario):Observable<Funcionario> {
    return this.http.post<Funcionario>(this.urlFuncionabyNombre, funcionario).pipe(
      catchError(err => {
        console.log(`En el servicio consultar by nombre Funcionario: $(err.error)`);
        return throwError(err);

      }));
  }
}
