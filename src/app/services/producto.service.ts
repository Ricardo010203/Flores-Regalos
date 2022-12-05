import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { HttpClient } from '@angular/common/http';
import { Nombre } from '../interfaces/Name';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private URL = 'http://localhost:3000/producto';

  constructor(
    private http : HttpClient
  ) { }

  getProducto(){
    return this.http.get(this.URL);
  }

  ConsultarProducto(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  ConsultarNombre(nombre:Nombre){
    return this.http.post(this.URL+'/name',nombre);
  }

  EliminarProducto(id:string){
    return this.http.delete(this.URL+'/'+id);
  }

  EditarProducto(id:string, producto: Producto){
    return this.http.put(this.URL+'/'+id, producto);
  }

  AgregarProducto(id:string, producto: Producto){
    return this.http.post(this.URL+'/'+id, producto);
  }
}
