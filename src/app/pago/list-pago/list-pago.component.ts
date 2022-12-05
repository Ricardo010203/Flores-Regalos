import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/interfaces/Pago';
import { PagoService } from 'src/app/services/pago.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-pago',
  templateUrl: './list-pago.component.html',
  styleUrls: ['./list-pago.component.css']
})
export class ListPagoComponent implements OnInit {

  pago : Pago[] | any;

  constructor(
    private pagoService:PagoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.pagoService.getPago().subscribe( (res:any) => {
      
      this.pago = res;
      console.log(this.pago);
    } )
  }

  delete(id:string){
     this.pagoService.EliminarPago(id).subscribe((res:any) => {
      console.log(res);
      this.listar();
    });
  }

  editar(id:string){
    this.router.navigate(['editarpago/'+id]);
 }

}
