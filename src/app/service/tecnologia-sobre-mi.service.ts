import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  tecSel: any;
  mostrarTec = false;

  constructor(
    private http: HttpClient,
    public usuarioService: UsuarioService
  ) { }

  getTecnologia(){
    return this.http.get(`${urlBase}/tecnologia/getTecno`);
  }

  getSobreMi(){
    return this.http.get(`${urlBase}/sobreMi/getSobreMi`);
  }

  actualizarTecnologia(tec: string, id: string){
    const headers = {
      miToken: this.usuarioService.token
    };

    return this.http.post(`${urlBase}/tecnologia/updateTecno/${id}`, tec, {headers})
    .subscribe();
  }
}
