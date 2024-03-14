import { Pipe, PipeTransform } from '@angular/core';
import { TripDate } from '../mocks/interfaces/trip-date';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: TripDate[], filterString: string) {
   
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const cities = [];
    for (const city of value) {
      if (city.city.toLowerCase().startsWith(filterString.toLowerCase())) {
        cities.push(city);
      }
    }
    
    return cities;
  }

}
