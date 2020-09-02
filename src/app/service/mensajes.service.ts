import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  suma: number;

  constructor(
    private http: HttpClient
  ) { }

  getMensajes(){
    return this.http.get(`${urlBase}/contacto/getSms`);
  }

  borrarMensajes(id: string){
    return this.http.delete(`${urlBase}/contacto/deletedContact/${id}`);
  }

  sumaMensajes(){
    this.getMensajes()
    .subscribe((res: any) => {
      this.suma = res.mensajes.length;
    });
  }

}
