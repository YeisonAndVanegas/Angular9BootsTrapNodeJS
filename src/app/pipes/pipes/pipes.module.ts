import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenAutorPipe } from '../imagen-autor.pipe';



@NgModule({
  declarations: [ImagenAutorPipe],
  imports: [
    CommonModule
  ],
  exports: [ImagenAutorPipe]
})
export class PipesModule { }
