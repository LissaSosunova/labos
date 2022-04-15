import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: any, key?: any, key2?: any): any {
    if (input) {
      const str = input.toLowerCase();
      if (key && key2) {
        const arr = value.filter((val: any) => this.testString(val, str, key))
        .concat(value.filter((val: any) => this.testString(val, str, key2)));
        return [...new Set(arr)];
       } else if (key && !key2) {
        return value.filter((val: any) => this.testString(val, str, key));
       } else {
        return value.filter((val: any) => val.indexOf(input)) >= 0;
       }
    } else {
      return value;
     }
  }

  testString(valstr: any, regex: string, key: string | number): any {
    const strRegExPattern = new RegExp(regex.toLowerCase(), 'g');
    return valstr[key].toLowerCase().match(strRegExPattern);
  }

}
