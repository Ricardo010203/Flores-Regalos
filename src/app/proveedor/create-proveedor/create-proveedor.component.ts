import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-create-proveedor',
  templateUrl: './create-proveedor.component.html',
  styleUrls: ['./create-proveedor.component.css']
})
export class CreateProveedorComponent implements OnInit {

  proveedor : Proveedor ={
    id:"",
    name:"",
    nit:"",
    typeProduct:"",
    phone:""
  }
  constructor(
    private router : Router,
    private proveedorService : ProveedorService
  ) { }

  ngOnInit(): void {
  }

  Agregar(){
    // delete this.usuario.id;
     this.proveedorService.AgregarProveedor(this.proveedor).subscribe( (res:any) =>{
       console.log(res);
       this.router.navigate(['proveedor']);
     })
   }

  atras(){
    this.router.navigate(['proveedor']);
  }

}
