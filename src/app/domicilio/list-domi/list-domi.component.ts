import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domicilio } from 'src/app/interfaces/Domicilio';
import { DomicilioService } from 'src/app/services/domicilio.service';

@Component({
  selector: 'app-list-domi',
  templateUrl: './list-domi.component.html',
  styleUrls: ['./list-domi.component.css']
})
export class ListDomiComponent implements OnInit {

  domicilio: Domicilio[] | any;

  constructor(
    private router:Router,
    private domicilioService:DomicilioService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.domicilioService.getDomicilio().subscribe((res:any) => {
      this.domicilio = res;
      console.log(this.domicilio);
    })
  }

  editar(id:string){
    this.router.navigate(['editardomi/'+id])
  }

}
