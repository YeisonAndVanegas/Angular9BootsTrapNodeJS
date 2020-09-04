import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';
import { Noticia, RespuestaNoticia } from 'src/app/interfaces/noticias';
import { TooltipService } from 'src/app/service/tooltip.service';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;
  noticias: Noticia[] = [];

  constructor(
    private router: Router,
    private noticiaService: NoticiaService,
    public imagenesYo: ImagenesYoService,
    public tooltip: TooltipService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.tooltip.abrirTooltipHover();
    }, 150);
    this.noticiaService.noticiaCompleta = false;

    //Obtener 3 ultimas noticias
    this.noticiaService.getUltimasNoticias()
    .subscribe((res: RespuestaNoticia) => {
      this.noticias.push(...res.noticias.slice(0, 3));
    });

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

  mostrarNoticia(noticia: Noticia) {
    this.tooltip.cerrarTooltip();
    this.noticiaService.noticiaCompleta = true;
    this.noticiaService.noticiaSel = noticia;
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta')  
    }, 100);
    
  }
}
