import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  suma: number;

  constructor(
    private http: HttpClient,
    private router: Router
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

  crearMensaje(email: string, mensaje: string) {
    const data = {email, mensaje}; 
    return this.http.post(`${urlBase}/contacto/newContact`, data).subscribe(() => {
      this.router.navigateByUrl('/inicio', { skipLocationChange: true })
      .then(() => this.router.navigate(['mensajes']));
    });
  }

}