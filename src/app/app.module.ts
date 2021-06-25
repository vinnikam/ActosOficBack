import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ActosModule} from './actos/actos.module';
import {HttpClientModule} from '@angular/common/http';

import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ActosModule,
        HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      })

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
