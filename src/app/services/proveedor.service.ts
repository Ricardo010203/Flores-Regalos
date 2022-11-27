import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../interfaces/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private URL = 'http://localhost:3000/provider';

  constructor(
    private http : HttpClient
  ) { }

  getProveedor(){
    return this.http.get(this.URL);
  }

  ConsultarProveedor(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  EliminarProveedor(id:string){
    return this.http.delete(this.URL+'/'+id);
  }

  EditarProveedor(id:string, provider: Proveedor){
    return this.http.put(this.URL+'/'+id, provider);
  }

  AgregarProveedor(provider: Proveedor){
    return this.http.post(this.URL+'/', provider);
  }


}
