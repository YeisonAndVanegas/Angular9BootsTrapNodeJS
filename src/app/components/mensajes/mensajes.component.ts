import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/service/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {

  mensajesEmail: String[] = [];

  constructor(
    private mensajes: MensajesService
  ) { }

  ngOnInit(): void {
    this.mensajes.getMensajes()
    .subscribe((res: any) => {
      this.mensajesEmail.push(...res.mensajes);
    });
  }

}
