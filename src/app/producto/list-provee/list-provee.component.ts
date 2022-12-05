import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-list-provee',
  templateUrl: './list-provee.component.html',
  styleUrls: ['./list-provee.component.css']
})
export class ListProveeComponent implements OnInit {

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

  seleccionar(id:string){
    this.router.navigate(['crearproducto/'+id]);
  }

  atras(){
    this.router.navigate(['producto']);
  }
}
