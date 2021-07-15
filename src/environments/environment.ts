// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const host = 'http://localhost:8862/';
const hostAU = 'http://10.180.220.35:7777/';


export const environment = {
  production: false,
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
