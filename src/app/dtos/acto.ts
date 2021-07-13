enum Impuesto{
  predial =1,
  ica,
  vehiculos

}

export class Acto {
  id: number;
  llave: string;
  item: string;
  originalCopia: string;
  numResolucion: string;
  numCordis: string;
  numExpediente: string;
  nombreContribuyente: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  impuesto: string;
  objeto: string;
  tipoActo: string;
  fechaActo: Date;
  vigencias: string;
  direccionNotificacion: string;
  fechaDevolucion: Date;
  causalDevolucion: string;
  recursoPrecede: string;
  tiempoInterponRec: string;
  oficina: string;
  funcionario: string;
  fechaSolicitud: Date;
  fechaPublicacion: Date;
  tipoPublicacion: string;
  registroDistrital: number;
  noPagina: string;
  descripcion: string;
  urlPdf: string;
  funcionarioCrea: string;
  fechaCreacion: Date;
  funcionarioEdita: string;
  fechaEdicion: Date;


  constructor(id: number, llave: string, item: string, originalCopia: string, numResolucion: string, numCordis: string, numExpediente: string, nombreContribuyente: string, tipoIdentificacion: string, numeroIdentificacion: string, impuesto: string, objeto: string, tipoActo: string, fechaActo: Date, vigencias: string, direccionNotificacion: string, fechaDevolucion: Date, causalDevolucion: string, recursoPrecede: string, tiempoInterponRec: string, oficina: string, funcionario: string, fechaSolicitud: Date, fechaPublicacion: Date, tipoPublicacion: string, registroDistrital: number, noPagina: string, descripcion: string, urlPdf: string, funcionarioCrea: string, fechaCreacion: Date, funcionarioEdita: string, fechaEdicion: Date) {
    this.id = id;
    this.llave = llave;
    this.item = item;
    this.originalCopia = originalCopia;
    this.numResolucion = numResolucion;
    this.numCordis = numCordis;
    this.numExpediente = numExpediente;
    this.nombreContribuyente = nombreContribuyente;
    this.tipoIdentificacion = tipoIdentificacion;
    this.numeroIdentificacion = numeroIdentificacion;
    this.impuesto = impuesto;
    this.objeto = objeto;
    this.tipoActo = tipoActo;
    this.fechaActo = fechaActo;
    this.vigencias = vigencias;
    this.direccionNotificacion = direccionNotificacion;
    this.fechaDevolucion = fechaDevolucion;
    this.causalDevolucion = causalDevolucion;
    this.recursoPrecede = recursoPrecede;
    this.tiempoInterponRec = tiempoInterponRec;
    this.oficina = oficina;
    this.funcionario = funcionario;
    this.fechaSolicitud = fechaSolicitud;
    this.fechaPublicacion = fechaPublicacion;
    this.tipoPublicacion = tipoPublicacion;
    this.registroDistrital = registroDistrital;
    this.noPagina = noPagina;
    this.descripcion = descripcion;
    this.urlPdf = urlPdf;
    this.funcionarioCrea = funcionarioCrea;
    this.fechaCreacion = fechaCreacion;
    this.funcionarioEdita = funcionarioEdita;
    this.fechaEdicion = fechaEdicion;
  }
}
