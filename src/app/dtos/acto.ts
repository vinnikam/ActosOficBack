enum Impuesto{
  predial =1,
  ica,
  vehiculos


}

export class Acto {
  id: number;
  numResolucion: string;
  numRadicado: string;
  numExpediente: string;
  descripcion: string;
  numeroIdentificacion: string;
  tipoIdentificacion: string;
  nombreContribuyente: string;
  impuesto: string;
  objeto: string;
  tipoActo: string;
  fechaActo: Date;
  vigencia: number;
  direccionNotificacion: string;
  fechaDevolucion: Date;
  causalDevolucion: string;
  medioPublicacion: string;
  fechaPublicacion: Date;
  periodo: number;
  urlPdf: string;
  referenciaPdf: string;
  funcionarioCrea;
  fechaCreacion;
  funcionarioEdita;
  fechaEdicion;


  constructor(id: number, numResolucion: string, numRadicado: string, numExpediente: string, descripcion: string, numeroIdentificacion: string,
              tipoIdentificacion: string, nombreContribuyente: string, impuesto: string, objeto: string, tipoActo: string, fechaActo: Date, vigencia: number, direccionNotificacion: string, fechaDevolucion: Date, causalDevolucion: string, medioPublicacion: string, fechaPublicacion: Date, periodo: number, urlPdf: string, referenciaPdf: string,
              funcionarioCrea: string, fechaCreacion : Date, funcionarioEdita: string, fechaEdicion: Date) {
    this.id = id;
    this.numResolucion = numResolucion;
    this.numRadicado = numRadicado;
    this.numExpediente = numExpediente;
    this.descripcion = descripcion;
    this.numeroIdentificacion = numeroIdentificacion;
    this.tipoIdentificacion = tipoIdentificacion;
    this.nombreContribuyente = nombreContribuyente;
    this.impuesto = impuesto;
    this.objeto = objeto;
    this.tipoActo = tipoActo;
    this.fechaActo = fechaActo;
    this.vigencia = vigencia;
    this.direccionNotificacion = direccionNotificacion;
    this.fechaDevolucion = fechaDevolucion;
    this.causalDevolucion = causalDevolucion;
    this.medioPublicacion = medioPublicacion;
    this.fechaPublicacion = fechaPublicacion;
    this.periodo = periodo;
    this.urlPdf = urlPdf;
    this.referenciaPdf = referenciaPdf;
    this.funcionarioCrea = funcionarioCrea;
    this.fechaCreacion = fechaCreacion;
    this.funcionarioEdita = funcionarioEdita;
    this.fechaEdicion = fechaEdicion;
  }
}
