import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;

  noticiaCompleta = false;
  pagina = 1;

  constructor(private http: HttpClient) { }

  getUltimasNoticias(){
    return this.http.get(`${urlBase}/noticias/getNoti?pagina=${this.pagina}`);
  }
}
