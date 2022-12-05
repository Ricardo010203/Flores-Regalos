import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagoXProveedor } from 'src/app/interfaces/PagoXProveedor';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { PagoService } from 'src/app/services/pago.service';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-create-pago',
  templateUrl: './create-pago.component.html',
  styleUrls: ['./create-pago.component.css']
})
export class CreatePagoComponent implements OnInit {

  pago : PagoXProveedor ={
    id:"",
    idProvider:"",
    totalPago:0,
    fecha:"",
    descripcion:""
  }

  proveedor:Proveedor = {
    id:"",
    name:"",
    nit:"",
    typeProduct:"",
    phone:""
  }

  constructor(
    private router:Router,
    private pagoService:PagoService,
    private activatedRoute:ActivatedRoute,
    private proveedorService:ProveedorService
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

    console.log(this.pago);

    this.pagoService.AgregarPago(this.proveedor.id || '',this.pago).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['proveedor']);
    })
  }

  atras(){
    this.router.navigate(['proveedor']);
  }

}
