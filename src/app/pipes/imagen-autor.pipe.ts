import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const urlBase = environment.url;

@Pipe({
  name: 'imagenAutor'
})
export class ImagenAutorPipe implements PipeTransform {

  transform(img: string): string {
    return `${urlBase}/noticias/ImgAutor/${img}`;
  }

}
