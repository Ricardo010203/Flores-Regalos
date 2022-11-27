import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Usuario} from '../../interfaces/Usuario'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usuarios: Usuario[] | any = [] 

  constructor(
    private usuarioService : UsuarioService,
    private router: Router    ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.usuarioService.getUsuario().subscribe( (res:any) => {
      
      this.usuarios = res;
      console.log(this.usuarios);
    } )
  }

  delete(id:string){
     this.usuarioService.EliminarUsuario(id).subscribe((res:any) => {
      console.log(res);
      this.listar();
    });
  }

  editar(id:string){
    this.router.navigate(['editarusuario/'+id]);
 }
}