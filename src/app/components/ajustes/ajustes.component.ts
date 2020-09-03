import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';
import { foto } from 'src/app/interfaces/foto';

declare let $: any;

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotosSel: foto;

  constructor(
    public imagenYoService: ImagenesYoService
  ) { }

  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  ocultarTooltip(){
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });
  }

  editarImgYo(img: foto){
    this.fotosSel = img;
    console.log(this.fotosSel.img);

    if(this.fotosSel.img === this.imagenYoService.img1){
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '1a.jpg';
      this.imagenYoService.imagenPath = this.fotosSel.img;
      this.ocultarTooltip();
    }
    if(this.fotosSel.img === this.imagenYoService.img3){
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '3a.jpg';
      this.imagenYoService.imagenPath = this.fotosSel.img;
      this.ocultarTooltip();
    }
    if(this.fotosSel.img === this.imagenYoService.img2){
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '2a.jpg';
      this.imagenYoService.imagenPath = this.fotosSel.img;
      this.ocultarTooltip();
    }
    if(this.fotosSel.img === this.imagenYoService.img4){
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '4a.jpg';
      this.imagenYoService.imagenPath = this.fotosSel.img;
      this.ocultarTooltip();
    }
  }

}
