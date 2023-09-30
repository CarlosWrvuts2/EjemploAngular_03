import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button'
import{MatInputModule} from '@angular/material/input'


import { AppComponent } from './app.component';
import { ProductolistComponent } from './productos/producto-list/producto-list.component';
import { ProductoFilterPipe } from './productos/producto-filter.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductolistComponent,
    ProductoFilterPipe,
    OperasBasComponent,
    Suma2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
