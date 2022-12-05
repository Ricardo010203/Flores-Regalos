import { Injectable } from '@angular/core';
import { Venta } from '../interfaces/Ventas';
import { HttpClient } from '@angular/common/http';
import { Fecha } from '../interfaces/Date';
import { Detalle } from '../interfaces/Detalle';
import { Tipo } from '../interfaces/Tipo';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private URL = 'http://localhost:3000/venta';

  constructor(
    private http:HttpClient
  ) { }

  getVenta(){
    return this.http.get(this.URL+'/ventas');
  }

  ConsultarFecha(fecha:Fecha){
    return this.http.post(this.URL+'/fecha',fecha);
  }

  ConsultarProductosVenta(){
    return this.http.get(this.URL);
  }

  EliminarDetalle(){
    return this.http.delete(this.URL+'/todo');
  }

  AgregarDetalle(detalle:Detalle){
    return this.http.post(this.URL, detalle);
  }

  EliminarDetalleId(id:string){
    return this.http.delete(this.URL+'/'+id);
  }

  AgregarVenta(tipo:Tipo){
    return this.http.post(this.URL+'/factura', tipo);
  }
/*
  EditarPago(id:string, pago: PagoXProveedor){
    return this.http.put(this.URL+'/'+id, pago);
  }

  AgregarPago(id:string, pago: PagoXProveedor){
    return this.http.post(this.URL+'/'+id, pago);
  }*/
}
