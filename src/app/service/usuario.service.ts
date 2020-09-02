import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { Router } from '@angular/router';

const urlBase = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  autentificado = false;//Grand

  constructor(
    private http: HttpClient,
    private router: Router  
  ) { }

  login(nombre: string, password: string){

    const data = {nombre, password};
    
    return new Promise (resolve => {

      this.http.post(`${urlBase}/usuario/entrar`, data)
      .subscribe((res: any) => {
        if(res.ok) {
          this.guardarToken(res.token);
          resolve(true);
        } else {
          resolve(false);
          this.logOut();
        }
      });
    });
  }

  guardarToken(token: string){
    this.token = token;
  }

  logOut(){
    this.token = null;
    this.autentificado = false;
    this.router.navigateByUrl('inicio');
  }
}