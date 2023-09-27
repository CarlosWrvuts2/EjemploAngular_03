import { Pipe, PipeTransform } from '@angular/core';
import { Productolist } from './i-productos';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value:Productolist[],args:String): Productolist[] { 
    let filter:string=args? args.toLocaleLowerCase():'';
    return filter ? value.filter((producto:Productolist)=>
    producto.Modelo.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}