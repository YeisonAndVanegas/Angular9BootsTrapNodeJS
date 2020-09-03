import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  constructor(
    public imagenYoService: ImagenesYoService
  ) { }

  ngOnInit(): void {
  }

  seleccionImg(archivo: File){
    this.imagenYoService.imagenSubir = archivo;
    this.imagenYoService.mostrarNombre = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenYoService.imagenSel = reader.result;
    reader.readAsDataURL(archivo);
    console.log(archivo.name);
  }

  cambiarMostrar(){
    this.imagenYoService.mostrarNombre = false;
  }

}
