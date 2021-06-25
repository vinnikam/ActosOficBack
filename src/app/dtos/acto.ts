enum Impuesto{
  predial =1,
  ica,
  vehiculos


}

export class Acto {
  id: number;
  descripcion: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  impuesto: number;
  vigencia: number;
  fechaPublicacion: Date;
  idObjeto: string;
  periodo: number;



  constructor(id: number, descripcion: string, tipoIdentificacion: string, numeroIdentificacion: string,
              impuesto: Impuesto, vigencia: number, fechaPublicacion: Date, idObjeto: string, periodo: number) {
    this.id = id;
    this.descripcion = descripcion;
    this.tipoIdentificacion = tipoIdentificacion;
    this.numeroIdentificacion = numeroIdentificacion;
    this.impuesto = impuesto;
    this.vigencia = vigencia;
    this.fechaPublicacion = fechaPublicacion;
    this.idObjeto= idObjeto;
    this.periodo = periodo;

  }

}
