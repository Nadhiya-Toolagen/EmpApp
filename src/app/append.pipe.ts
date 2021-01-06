import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(value:string , gender:string): string {
    if(gender=='Male')
    return "Sri."+ value;
    else
    return "Srimathi."+value;
  }

}
