import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  usuario: Usuario = {
    user:"",
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
    this.usuarioService.AgregarUsuario(this.usuario).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['usuario']);
    })
  }

  atras(){
    this.router.navigate(['usuario']);
  }

}
