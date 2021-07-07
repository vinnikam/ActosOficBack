import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActosComponent} from './actos/lista/actos.component';


const routes: Routes = [
  { path: '', component: ActosComponent },
  { path: 'actos', component: ActosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

