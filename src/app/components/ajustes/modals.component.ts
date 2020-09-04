import { Component, OnInit } from '@angular/core';
import { ImagenesYoService } from 'src/app/service/imagenes-yo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { TecnologiaSobreMiService } from 'src/app/service/tecnologia-sobre-mi.service';

declare  let $: any;
const urlBase = environment.url;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  constructor(
    public imagenYoService: ImagenesYoService,
    public usuarioServices: UsuarioService,
    private http: HttpClient,
    public tecSobre: TecnologiaSobreMiService
  ) { }

  ngOnInit(): void {
  }

  seleccionImg(archivo: File){
    this.imagenYoService.imagenSubir = archivo;
    this.imagenYoService.mostrarNombre = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenYoService.imagenSel = reader.result;
    reader.readAsDataURL(archivo);
    console.log(archivo.name);
  }

  cambiarMostrar(){
    this.imagenYoService.mostrarNombre = false;
  }

  actualizarImagenYo() {
    if(this.imagenYoService.imagenNombre !== this.imagenYoService.imagenSubir.name){
      $('#imagen').modal('hide');
      this.cambiarMostrar();
    } else {
      const headers = {
        miToken: this.usuarioServices.token
      };
      
      const formData = new FormData();
      formData.append('img', this.imagenYoService.imagenSubir, this.imagenYoService.imagenSubir.name);
      
      return this.http
      .post(`${urlBase}/uploadYo/update`, formData, {headers})
      .subscribe(res => {
        console.log(res)
        setTimeout(() => {
          $('#imagen').modal('hide');
        }, 100);
        this.cambiarMostrar();
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 3000,
        });
        
        Toast.fire({
          title: 'Imagen Actualizada Correctamente',
          background: 'rgb(233,233,0)'
        });
      });
    }
  }

  actualizarTec(f: NgForm) {
    this.tecSobre.actualizarTecnologia(this.tecSobre.tecSel, this.tecSobre.tecSel._id);
    $('#tecnologia').modal('hide');
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });
    Toast.fire({
      title: 'Tecnología actualizada correctamente',
      background: 'rgb(233,233,0)'
    });
  }
}
