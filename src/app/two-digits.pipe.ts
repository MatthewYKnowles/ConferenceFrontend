import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDigits'
})
export class TwoDigitsPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value === 0 ? '00' : value;
  }

}
