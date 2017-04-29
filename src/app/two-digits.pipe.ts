import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(value: number): string {
    return value === 0 ? '00' : value.toString();
  }

}
