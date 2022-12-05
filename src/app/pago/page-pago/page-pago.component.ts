import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-pago',
  templateUrl: './page-pago.component.html',
  styleUrls: ['./page-pago.component.css']
})
export class PagePagoComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  dirigir(){
    this.router.navigate(['proveedor']);
  }

}
