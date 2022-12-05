import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagoXProveedor } from 'src/app/interfaces/PagoXProveedor';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-edit-pago',
  templateUrl: './edit-pago.component.html',
  styleUrls: ['./edit-pago.component.css']
})
export class EditPagoComponent implements OnInit {

  pago : PagoXProveedor ={
    id:"",
    idProvider:"",
    totalPago:0,
    fecha:"",
    descripcion:""
  }

  constructor(
    private router:Router,
    private pagoService:PagoService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id_entrada);

    if(id_entrada){
      this.pagoService.ConsultarPago(id_entrada).subscribe( (res:any) =>{
        this.pago = res[0];
        console.log(res[0]);
      } )
    }
  }

  atras(){
    this.router.navigate(['pago']);
  }

  editar(){
    this.pagoService.EditarPago(this.pago.id || '',this.pago).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['pago']);
    })
  }

}
