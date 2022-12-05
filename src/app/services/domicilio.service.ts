import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { Domicilio } from '../interfaces/Domicilio';
import { HttpClient } from '@angular/common/http';
import { DomicilioXVenta } from 'src/app/interfaces/DomicilioxVenta';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {

  private URL:string = 'http://localhost:3000/domicilio';

  constructor(
    private http:HttpClient
  ) { }

  getDomicilio(){
    return this.http.get(this.URL);
  }

  AgregarDomicilio(domi:DomicilioXVenta){
    return this.http.post(this.URL, domi);
  }

  ConsultarDomicilio(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  EditarDomicilio(id:string, domicilio: Domicilio){
    return this.http.put(this.URL+'/'+id, domicilio);
  }
}
