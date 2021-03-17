import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  //... params
  transform(value: number, rate:number): number {
    return value+(value*rate/100);
  }

}
