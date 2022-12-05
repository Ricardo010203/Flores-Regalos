import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-page-proveedor',
  templateUrl: './page-proveedor.component.html',
  styleUrls: ['./page-proveedor.component.css']
})
export class PageProveedorComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  dirigir(){
    this.router.navigate(['crearproveedor']);
  }

  dirigirPagos(){
    this.router.navigate(['pago']);
  }

}
