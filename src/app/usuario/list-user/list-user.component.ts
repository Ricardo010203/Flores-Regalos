import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Usuario} from '../../interfaces/Usuario'
import { Router } from '@angular/router'

import Swal from 'sweetalert2';

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Atención',
      text: "Serguro desea elimiar este usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'Usuario eliminado correctamente',
          'success'
        )
        this.usuarioService.EliminarUsuario(id).subscribe((res:any) => {
          console.log(res);
          this.listar();
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Se cancelo exitosamente :)',
          'error'
        )
      }
    })
     
  }

  editar(id:string){
    this.router.navigate(['editarusuario/'+id]);
 }
}