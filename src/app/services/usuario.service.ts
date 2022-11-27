import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private URL = 'http://localhost:3000/user';

  constructor(private http : HttpClient) { }

  getUsuario(){
    return this.http.get(this.URL);
  }

  ConsultarUsuario(id:string){
    return this.http.get(this.URL+'/'+id);
  }

  EliminarUsuario(id:string){
    return this.http.delete(this.URL+'/'+id);
  }

  EditarUsuario(id:string, user: Usuario){
    return this.http.put(this.URL+'/'+id, user);
  }

  AgregarUsuario(user: Usuario){
    return this.http.post(this.URL+'/', user);
  }

}
