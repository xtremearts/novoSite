import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valoresUnicos',
  pure: false
})
export class ValoresUnicosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // Remove elementos duplicados
    let arrayUnico = value.filter(function (el, index, array) {
      return array.indexOf(el) == index;
    });

    return arrayUnico;
  }
}


