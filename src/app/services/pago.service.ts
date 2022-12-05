import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagoXProveedor } from '../interfaces/PagoXProveedor';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private URL = 'http://localhost:3000/pago';

  constructor(
    private http : HttpClient
  ) { }

  getPago(){
    return this.http.get(this.URL);
  }

  ConsultarPago(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  EliminarPago(id:string){
    return this.http.delete(this.URL+'/'+id);
  }

  EditarPago(id:string, pago: PagoXProveedor){
    return this.http.put(this.URL+'/'+id, pago);
  }

  AgregarPago(id:string, pago: PagoXProveedor){
    return this.http.post(this.URL+'/'+id, pago);
  }

}
