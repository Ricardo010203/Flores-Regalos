import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from '../../interfaces/Usuario';
//import { ToastrService } from 'ngx-toastr';


//import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario = {
    user: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  //  private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.usuario);
    this.authService.singin(this.usuario).subscribe( (res:any) => {
      console.log(res);
      if(res == 'Usuario y/o contraseña incorrectos'){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario y/o contraseña incorrectos'
        })
        console.log('No hay acceso');
      }else{
        this.authService.rol(this.usuario).subscribe((res:any) => {
          console.log(res);
          localStorage.setItem('rol',res)
        })
        localStorage.setItem('token',res.token);
//        this.toastr.success('Inicio de sesión correcto');
        this.router.navigate(['home']);
      }
      
  })
 }

}