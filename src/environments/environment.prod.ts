const host = 'http://10.180.52.86:8862/';
const hostAU = 'http://10.180.220.35:7777/';

export const environment = {
  production: true,
  urlAutenticar: `${hostAU}ServiciosRITDQ/resources/consultas/autenticar`,
  urlActos: `${host}actos/`,
  urlActosNew: `${host}actos/guardar`,
  urlActosEditar: `${host}actos/editar`,
  urlFuncionarios: `${host}funcionarios/`,
  urlFuncioNew: `${host}funcionarios/guardar`,
  urlFuncioBorrar: `${host}funcionarios/borrar`,
  urlFuncioModificar: `${host}funcionarios/modificar`,
  urlFunciobyNombre: `${host}funcionarios/bynombre`

};
