import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( value: any, ...args: any[]): any {

    if (typeof args[0] === 'undefined') return value;

     return value.filter((resturant) => {
       return resturant.restaurent_name.toUpperCase().indexOf(args[0].toUpperCase()) > -1;
    });
  }
}