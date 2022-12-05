import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GananciaService {
  private URL = 'http://localhost:3000/ganancia';

  constructor(
    private http : HttpClient
  ) { }

  getGananciaMes(){
    return this.http.get(this.URL+'/mes');
  }

  getGananciaSemana(){
    return this.http.get(this.URL+'/semana');
  }

  getGananciaDia(){
    return this.http.get(this.URL+'/dia');
  }
}