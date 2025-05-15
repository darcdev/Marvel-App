import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCurrency',
})
export class AppendCurrencyPipe implements PipeTransform {
  transform(value: number | string, currency: string = 'USD'): string {
    if (value === null || value === undefined) return '';
    return `${value} ${currency}`;
  }
}
