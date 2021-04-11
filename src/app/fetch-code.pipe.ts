import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchCode'
})

// {{val  | fetchcodepipe}}

export class FetchCodePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    return value.substring(0,<number>args[0]);
  }
}
