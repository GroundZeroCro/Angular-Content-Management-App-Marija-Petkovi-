import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textShortener'
})
export class TextShortenerPipe implements PipeTransform {

  transform(value: string): any {
    return value.substring(0, 300) + '...';
  }

}
