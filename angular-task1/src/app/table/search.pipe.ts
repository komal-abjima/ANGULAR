import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return `<h2>No Data Found...</h2>`;
    if(!args) return value;

    args= args.toLowerCase();
    return value.filter((item: any) =>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
   
  }

}
