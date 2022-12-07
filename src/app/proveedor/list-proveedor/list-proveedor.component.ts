import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-proveedor',
  templateUrl: './list-proveedor.component.html',
  styleUrls: ['./list-proveedor.component.css']
})
export class ListProveedorComponent implements OnInit {

  proveedor : Proveedor[] | any;

  constructor(
    private router:Router,
    private proveedorService:ProveedorService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.proveedorService.getProveedor().subscribe( (res:any) => {
      
      this.proveedor = res;
      console.log(this.proveedor);
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
      text: "Serguro desea elimiar este proveedor?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado',
          'Proveedor eliminado correctamente',
          'success'
        )
        this.proveedorService.EliminarProveedor(id).subscribe((res:any) => {
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

  pagar(id:string){
    this.router.navigate(['crearpago/'+id]);
  }

  editar(id:string){
    this.router.navigate(['editarproveedor/'+id]);
 }

}
