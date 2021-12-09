import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class PipePipe implements PipeTransform {

  transform(value: any[], filtredInput:string): any {
    if (value.length === 0 || filtredInput === '')
    {
      return value;
    }
    const formation = []
    for( const form of value)
    {
      if (form['nom'].include(filtredInput))
      {
        formation.push(form);
      }
      return formation;
    }
   
}
}