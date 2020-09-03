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

  editarImgYo(img: foto){
    this.fotosSel = img;
    console.log(this.fotosSel.img);
  }

}
