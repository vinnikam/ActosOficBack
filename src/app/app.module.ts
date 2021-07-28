import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ActosModule} from './actos/actos.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
import {FuncionariosModule} from './funcionarios/funcionarios.module';
import {HttpErrorInterceptorService} from './interceptor/http-error-interceptor.service';
import {ActosRoutingModule} from './actos/actos-routing.module';
import {FuncionariosRoutingModule} from './funcionarios/funcionarios-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActosRoutingModule,
    FuncionariosRoutingModule,
    BrowserModule,
    ActosModule,
    FuncionariosModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [DatePipe,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
