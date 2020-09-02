import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let $:any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  mensaje = {
    email:'',
    mensaje: ''
  };

  usuarioLogin = {
    nombre: 'Yeison',
    password: '123'
  };

  constructor(
    public modalService: ModalService,
    public usuarioService: UsuarioService
    ) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoYei(y: NgForm){
    if (y.invalid){
      $('#contacto').modal('hide');
      console.log(y.value)
      this.limpiarMensaje();
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showCloseButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'Todos los campos son obligatorios',
        background: 'rgb(233, 233,0)',
        icon: 'error'
      });

    } else {
      $('#contacto').modal('hide');
      console.log(y.value)
      this.limpiarMensaje();
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          title: 'Mensaje enviado correctamente',
          background: 'rgb(233,233,0)',
          icon: 'success'
        });
    }
  }

  limpiarMensaje(){
    this.mensaje.email = '';
    this.mensaje.mensaje = '';
  }

  limpiarUsuario(){
    this.usuarioLogin.nombre = '';
    this.usuarioLogin.password = '';
  }

  salirLogin(){
    $('#loginModal').modal('hide');
  }

  async login(forma: NgForm) {
    if(forma.invalid){
      this.salirLogin();
    }

    const usuarioValido = await this.usuarioService.login(this.usuarioLogin.nombre, this.usuarioLogin.password);

    if(usuarioValido) {
      this.salirLogin();
      this.usuarioService.autentificado = true; //Guard

      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');
      }, 1000);
      this.limpiarMensaje();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          title: 'Yeison Online',
          background: 'rgb(233,233,0)',
          icon: 'success'
        });
        this.limpiarUsuario();
        this.modalService.online = true;
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        title: 'Invaliled Data',
        background: 'rgb(233,233,0)',
        icon: 'error'
      });
      $('.navbar-collapse').collapse('hide');
      this.salirLogin();
      this.limpiarUsuario();
      
    }

  }
}