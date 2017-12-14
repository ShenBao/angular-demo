import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, args?: number): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}
