import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  constructor(
    private http: HttpClient 
  ) { }

  getTecnologia(){
    return this.http.get(`${urlBase}/tecnologia/getTecno`);
  }

  getSobreMi(){
    return this.http.get(`${urlBase}/sobreMi/getSobreMi`);
  }
}
