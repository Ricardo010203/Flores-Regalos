import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  usuario:Usuario={
    user:""
  }

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  atras(){
    this.router.navigate(['login']);
  }

  Recuperar(){
    this.authService.recuperar(this.usuario).subscribe((res:any) =>{
      if(res == 'Correo enviado'){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Correo enviado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['login']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario ingresado no existe'
        })
      }
    })
  }

}
