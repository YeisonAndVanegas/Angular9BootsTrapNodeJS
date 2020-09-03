import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const urlImg = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagenesYoService {

  mostrarNombre = false;

  imagenNombre: string;
  imagenPath: string;

  imagenSubir: File;
  imagenSel: string | ArrayBuffer;

  img1 = `${urlImg}/uploadYo/Yeison/1a.jpg`;
  img2 = `${urlImg}/uploadYo/Yeison/2a.jpg`;
  img3 = `${urlImg}/uploadYo/Yeison/3a.jpg`;
  img4 = `${urlImg}/uploadYo/Yeison/4a.jpg`;

  imagenesYo = [
    {
      img: `${urlImg}/uploadYo/Yeison/1a.jpg`,
    },
    {
      img: `${urlImg}/uploadYo/Yeison/3a.jpg`,
    },
    {
      img: `${urlImg}/uploadYo/Yeison/2a.jpg`,
    },
    {
      img: `${urlImg}/uploadYo/Yeison/4a.jpg`,
    }
  ];

  constructor() { }
}
