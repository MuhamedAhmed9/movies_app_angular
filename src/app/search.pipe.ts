import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arrOfMovies: any[], term: string): any[] {
    return arrOfMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(term.toLowerCase());
    });
  }
}
