import { Component, OnInit } from '@angular/core';
import { ProductoXProveedor } from 'src/app/interfaces/ProductoXProveedor';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { Nombre } from 'src/app/interfaces/Name';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from 'src/app/interfaces/Ventas';
import { Detalle } from 'src/app/interfaces/Detalle';
import { Tipo } from 'src/app/interfaces/Tipo';


@Component({
  selector: 'app-create-venta',
  templateUrl: './create-venta.component.html',
  styleUrls: ['./create-venta.component.css']
})
export class CreateVentaComponent implements OnInit {

  productos:ProductoXProveedor[] |any;

  venta:Venta[]|any;

  nombre: Nombre = {
    nombre:"" 
   }

   tipo: Tipo = {
    tipo:"" ,
    token:""
   }

   detalle:Detalle={
    codigo:"",
    cantidad:0,
    token:""
   }

  cantidad:number = 0; 
 
   constructor(
     private router:Router,
     private productoService:ProductoService,
     private ventaService:VentaService
   ) { }

   ngOnInit(): void {
    //this.productos;
    this.listarProductos();
    this.listarProductosVenta();
  }

  buscar(){
    this.productoService.ConsultarNombre(this.nombre).subscribe((res:any) => {
      this.productos = res;
    } )
  }

  listarProductos(){
    this.productoService.getProducto().subscribe((res:any) =>{
      this.productos = res;
      console.log(res);
    })
  }

  listarProductosVenta(){
    //const token = localStorage.getItem('token') || "";
    //console.log(token);
    this.ventaService.ConsultarProductosVenta().subscribe((res:any) => {
      this.venta = res;
      console.log(res);
    })
  }

  seleccionar(id:string){
    this.detalle = {codigo:id,cantidad:this.cantidad,token:""}
    this.ventaService.AgregarDetalle(this.detalle).subscribe((res:any) => {
       this.listarProductosVenta();
    })
  }

  delete(id:string){
    this.ventaService.EliminarDetalleId(id).subscribe((res:any) => {
      this.listarProductosVenta();
    })
  }

  cancelar(){
    this.ventaService.EliminarDetalle().subscribe((res:any) => {
      console.log(res);
      this.listarProductosVenta();
    })
  }

  generar(){
    this.ventaService.AgregarVenta(this.tipo).subscribe((res:any) => {
      this.router.navigate(['venta']);
    })
  }
}
