import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { resolve } from 'dns';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  autentificado = false;//Grand

  constructor(
    private http: HttpClient
  ) { }

  login(nombre: string, password: string){
    const data = {nombre, password};
    return new Promise (resolve => {
      this.http.post(`${urlBase}/usuario/entrar`, data)
      .subscribe((res: any) => {
        console.log(res)
      });
    });
  }
}