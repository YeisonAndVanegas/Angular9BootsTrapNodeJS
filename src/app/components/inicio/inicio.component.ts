import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;

  constructor() { }

  ngOnInit(): void {
  }

  yoMostrar() {
    this.mostrarYo = !this.mostrarYo
  }

}
