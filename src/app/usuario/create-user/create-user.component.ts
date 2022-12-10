import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  usuario: Usuario = {
    user:"",
    email:"",
    name:"",
    lastName:"",
    typeID:"",
    dni:"",
    phone:0,
    rol:0,
    password:""
  }

  constructor(
    private usuarioService : UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  Agregar(){
   // delete this.usuario.id;
   if(this.usuario.email == "" || this.usuario.user == "" || this.usuario.password == "" || this.usuario.name == "" || this.usuario.lastName == "" || this.usuario.typeID == "" || this.usuario.dni == "" || this.usuario.phone == 0 || this.usuario.rol == 0){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Todos los campos deben estar diligenciados'
    })

  }else{
    this.usuarioService.AgregarUsuario(this.usuario).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['usuario']);
    })}
  }

  atras(){
    this.router.navigate(['usuario']);
  }

}
