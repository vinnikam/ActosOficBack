export class Funcionario {
  id: number;
  usuario: string;
  clave: string;
  fechaCreacion: Date;
  estado: number;


  constructor(id: number, usuario: string, clave: string, fechaCreacion: Date, estado: number) {
    this.id = id;
    this.usuario = usuario;
    this.clave = clave;
    this.fechaCreacion = fechaCreacion;
    this.estado = estado;
  }
}
