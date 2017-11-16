import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DataListComponent } from './components/data-list/data-list.component';

import { InterceptorService } from './services/interceptor.service';
import { TokenService } from './services/token.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DataService,
    TokenService, {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
