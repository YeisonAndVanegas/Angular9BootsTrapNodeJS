import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/service/mensajes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {

  mensajesEmail: String[] = [];
  mensajeSel: any;

  constructor(
    private mensajes: MensajesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mensajes.getMensajes()
    .subscribe((res: any) => {
      this.mensajesEmail.push(...res.mensajes);
      if(this.mensajesEmail.length === 0) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timer: 3000,
          customClass: {confirmButton: 'back9'}
        });
        
        Toast.fire({
          title: 'No Hay Ningun Mensaje',
          background: 'rgb(233,233,0)'
        });
      }
    });
    window.scrollTo(0, 0);
  }

  borrarMensaje(mensaje: string){
    this.mensajeSel = mensaje;
    this.mensajes.borrarMensajes(this.mensajeSel._id)
    .subscribe(() => {
      this.router.navigateByUrl('/inicio', {skipLocationChange: true})
      .then(() => this.router.navigate(['/mensajes']));
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
    });
    
    Toast.fire({
      title: 'Mensaje Eliminado',
      background: 'rgb(233,233,0)'
    });
  }

}
