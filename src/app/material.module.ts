import { NgModule } from '@angular/core';
import { 
  MatInputModule, 
  MatButtonModule, 
  MatListModule, 
  MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
      MatInputModule, MatButtonModule, MatListModule, MatToolbarModule
    ],
    exports: [
      MatInputModule, MatButtonModule, MatListModule, MatToolbarModule
    ],
    declarations: []
  })
  export class MaterialModule { }