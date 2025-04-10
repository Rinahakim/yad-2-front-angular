import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
  standalone: false
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value + args[0];
  }

}
