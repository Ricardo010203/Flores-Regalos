import { Component, OnInit } from '@angular/core';
import { ProductoXProveedor } from 'src/app/interfaces/ProductoXProveedor';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { Nombre } from 'src/app/interfaces/Name';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  productos:ProductoXProveedor[] |any;

  nombre: Nombre = {
   nombre:"" 
  }

  constructor(
    private router:Router,
    private productoService:ProductoService,
    public authService:AuthService
  ) { }

  ngOnInit(): void {
    //this.productos;
    this.listar();
  }

  buscar(){
    this.productoService.ConsultarNombre(this.nombre).subscribe((res:any) => {
      this.productos = res;
    } )
  }

  listar(){
    this.productoService.getProducto().subscribe((res:any) =>{
      this.productos = res;
    })
  }

  editar(id:string){
    this.router.navigate(['editarproducto/'+id])
  }

  delete(id:string){
    this.productoService.EliminarProducto(id).subscribe((res:any) => {
      console.log(res);
      this.listar();
    })
  }

}
