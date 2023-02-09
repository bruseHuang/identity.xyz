import { Pipe, PipeTransform } from '@angular/core';
import { langData } from '@lib';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  constructor() {}

  public transform(
    value: string,
    lang: string = 'en',
    page = 'home',
    params?: string[]
  ): any {
    if (value === '') {
      return '';
    }
    if (params) {
      return (langData as any)[page][value][lang](params);
    }
    return (langData as any)[page][value][lang];
  }
}
