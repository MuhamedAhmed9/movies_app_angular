import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicepart',
})
export class SlicepartPipe implements PipeTransform {
  transform(word: string, limit: number, more: string): string {
    return word?.split(' ').slice(0, limit).join(' ') + ' . . .' + more;
  }
}
