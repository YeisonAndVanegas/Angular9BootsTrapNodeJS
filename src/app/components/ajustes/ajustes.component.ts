import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';
import { foto } from 'src/app/interfaces/foto';
import { TecnologiaSobreMiService } from 'src/app/service/tecnologia-sobre-mi.service';

declare let $: any;

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotosSel: foto;
  tecnologiasDestacadas: string[] = [];

  constructor(
    public imagenYoService: ImagenesYoService,
    private tecSobre: TecnologiaSobreMiService
  ) { }

  ngOnInit(): void {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    setTimeout(() => {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    }, 150);
    this.tecSobre.getTecnologia()
    .subscribe((res: any ) => {
      this.tecnologiasDestacadas.push(...res.tecnologias);
    });
    window.scrollTo(0,0);
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

  editarTec(tec: string) {
    this.tecSobre.mostrarTec = true;
    this.tecSobre.tecSel = tec;
    console.log(this.tecSobre.tecSel)
    this.ocultarTooltip();
    setTimeout(() => {
      $('#tecnologia').modal();
    }, 100);
  }

}
