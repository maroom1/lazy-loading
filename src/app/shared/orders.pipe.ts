import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orders'
})
export class OrdersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
