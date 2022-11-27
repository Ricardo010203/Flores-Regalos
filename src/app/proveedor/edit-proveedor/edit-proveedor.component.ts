import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.css']
})
export class EditProveedorComponent implements OnInit {

  proveedor:Proveedor = {
    id:"",
    name:"",
    nit:"",
    typeProduct:"",
    phone:""
  }

  constructor(
    private proveedorService : ProveedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  editar(){

    this.proveedorService.EditarProveedor(this.proveedor.id || '',this.proveedor).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['proveedor']);
    })
  }

  atras(){
    this.router.navigate(['proveedor']);
  }

}
