import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

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
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id_entrada);

    if(id_entrada){
      this.productoService.ConsultarProducto(id_entrada).subscribe( (res:any) =>{
        this.producto = res[0];
        console.log(res[0]);
      } )
    }
  }

  atras(){
    this.router.navigate(['producto']);
  }

  editar(){
    this.productoService.EditarProducto(this.producto.id || '',this.producto).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['producto']);
    })
  }

}
