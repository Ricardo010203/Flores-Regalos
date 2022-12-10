import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-pass',
  templateUrl: './editar-pass.component.html',
  styleUrls: ['./editar-pass.component.css']
})
export class EditarPassComponent implements OnInit {

  usuario: Usuario = {
    id:"",
    name:"",
    user:"",
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
    if(this.usuario.name == "" || this.usuario.user == "" || this.usuario.password == ""){
      Swal.fire({
        icon: 'error',
        title: 'Atención',
        text: 'Todos los campos deben estar diligenciados'
      })
  
    }else{
    this.usuarioService.EditarUsuario(this.usuario.id || '',this.usuario).subscribe( (res:any) =>{
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario modificado exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['login']);
    })}
  }

}
