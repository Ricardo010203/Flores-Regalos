import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/interfaces/Ventas';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';
import { Fecha } from 'src/app/interfaces/Date';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit {

  venta:Venta[]|any;

  fecha:Fecha={
    fecha:""
  }

  constructor(
    private router:Router,
    private ventaService:VentaService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  buscar(){
    this.ventaService.ConsultarFecha(this.fecha).subscribe((res:any) => {
      this.venta = res;
    } )
  }

  listar(){
    this.ventaService.getVenta().subscribe((res:any) => {
      this.venta = res;
      console.log(res);
    })
  };

  editar(id:string){}

  delete(id:string){}

}
