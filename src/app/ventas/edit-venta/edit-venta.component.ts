import { Component, OnInit } from '@angular/core';
import { GananciaService } from 'src/app/services/ganancias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-venta',
  templateUrl: './edit-venta.component.html',
  styleUrls: ['./edit-venta.component.css']
})
export class EditVentaComponent implements OnInit {

  gananciaMes:number = 0;

  gananciaDia:number = 0;

  gananciaSemana:number = 0;

  constructor(
    private gananciaService:GananciaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.listarDia();
    this.listarSemana();
    this.listarMes();
  }

  listarMes(){
    this.gananciaService.getGananciaMes().subscribe((res:any) => {
      this.gananciaMes = res;
    })
  }

  listarSemana(){
    this.gananciaService.getGananciaSemana().subscribe((res:any) => {
      this.gananciaSemana = res;
    })
  }

  listarDia(){
    this.gananciaService.getGananciaDia().subscribe((res:any) => {
      this.gananciaDia = res;
    })
  }

  dirigir(){
    this.router.navigate(['venta'])
  }

}
