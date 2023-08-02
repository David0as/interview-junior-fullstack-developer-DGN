import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(cities: any[], searchText: string): any[] {
    if(!cities) return [];
    if(!searchText) return [];
    if (searchText == "") return cities;

    searchText = searchText.toLowerCase();

    return cities.filter( city => {
      return city.toLowerCase().includes(searchText);
    })
  }

}
