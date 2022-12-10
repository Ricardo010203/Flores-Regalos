import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/user'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  singin(user:Usuario){
    return this.http.post(`${this.URL}/singin`,user);
  }

  rol(user:Usuario){
    return this.http.post(`${this.URL}/rol`,user);
  }

  roled():boolean{
    return !!localStorage.getItem('rol')?.localeCompare("2");
  }

  rolout(){
    localStorage.removeItem('rol')
  }

  loggedin():boolean{
    return !!localStorage.getItem('token');
  }

  loggout(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }

  recuperar(user:Usuario){
    return this.http.post(`${this.URL}/recuperar`,user)
  }

}
