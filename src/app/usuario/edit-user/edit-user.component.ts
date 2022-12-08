import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  usuario: Usuario = {
    id:"",
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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id_entrada);

    if(id_entrada){
      this.usuarioService.ConsultarUsuario(id_entrada).subscribe( (res:any) =>{
        this.usuario = res[0];
        console.log(res[0]);
      } )
    }
  }

  editar(){
    if(this.usuario.user == "" || this.usuario.password == "" || this.usuario.name == "" || this.usuario.lastName == "" || this.usuario.typeID == "" || this.usuario.dni == "" || this.usuario.phone == 0 || this.usuario.rol == 0){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos deben estar diligenciados'
      })
  
    }else{
    this.usuarioService.EditarUsuario(this.usuario.id || '',this.usuario).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['usuario']);
    })}
  }

  atras(){
    this.router.navigate(['usuario']);
  }

}
