import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  proveedor:Proveedor = {
    id:"",
    name:"",
    nit:"",
    typeProduct:"",
    phone:""
  }

  producto:Producto={
    id:"",
    nombre:"",
    description:"",
    price:0,
    stock:0,
    idProvider:""
  }

  constructor(
    private router:Router,
    private productoService:ProductoService,
    private proveedorService:ProveedorService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id_entrada);

    if(id_entrada){
      this.proveedorService.ConsultarProveedor(id_entrada).subscribe( (res:any) =>{
        this.proveedor = res[0];
        console.log(res[0]);
      } )
    }
  }

  Agregar(){
    if(this.producto.nombre == "" || this.producto.price == 0 || this.producto.description == "" || this.producto.stock == 0){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos deben estar diligenciados'
      })
  
    }else{
    this.productoService.AgregarProducto(this.proveedor.id || '',this.producto).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['producto']);
    })}
  }

  atras(){
    this.router.navigate(['listprovee']);
  }

}
