import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch',
})
export class WatchPipe implements PipeTransform {
  transform(movieTitle: string): string {
    return movieTitle.replace(/ /g, '-');
  }
}
