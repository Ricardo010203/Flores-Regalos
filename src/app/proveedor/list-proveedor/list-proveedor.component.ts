import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

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
     this.proveedorService.EliminarProveedor(id).subscribe((res:any) => {
      console.log(res);
      this.listar();
    });
  }

  editar(id:string){
    this.router.navigate(['editarproveedor/'+id]);
 }

}
