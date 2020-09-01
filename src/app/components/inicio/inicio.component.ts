import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;

  constructor(
    private router: Router,
    private noticiaService: NoticiaService,
    public imagenesYo: ImagenesYoService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
    this.noticiaService.noticiaCompleta = false;
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo
  }

  tecnologias() {
    $('#modalTecnologias').modal();
  }

  sobreMi() {
    $('#sobreMi').modal();
  }

  mostrarNoticia() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });
    this.noticiaService.noticiaCompleta = true;
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta')  
    }, 150);
    
  }
}
