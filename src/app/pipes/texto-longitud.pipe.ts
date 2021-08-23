import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoLongitud'
})
export class TextoLongitudPipe implements PipeTransform {

  transform(value: string, arg: number = 10): string {
    return value.substr(0, arg);
  }

}
