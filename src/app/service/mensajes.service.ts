import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(
    private http: HttpClient
  ) { }

  getMensajes(){
    return this.http.get(`${urlBase}/contacto/getSms`);
  }
}
