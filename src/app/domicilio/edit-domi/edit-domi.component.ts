import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomicilioService } from 'src/app/services/domicilio.service';
import { Domicilio } from 'src/app/interfaces/Domicilio';

@Component({
  selector: 'app-edit-domi',
  templateUrl: './edit-domi.component.html',
  styleUrls: ['./edit-domi.component.css']
})
export class EditDomiComponent implements OnInit {

  domicilio:Domicilio = {
    nombre:"",
    direccion:"",
    telefono:0
  }

  constructor(
    private domicilioService : DomicilioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activatedRoute.snapshot.params['id'];
    console.log(id_entrada);

    if(id_entrada){
      this.domicilioService.ConsultarDomicilio(id_entrada).subscribe( (res:any) =>{
        this.domicilio = res[0];
        console.log(res[0]);
      } )
    }
  }

  editar(){
    this.domicilioService.EditarDomicilio(this.domicilio.idD || '',this.domicilio).subscribe( (res:any) =>{
      console.log(res);
      this.router.navigate(['domicilio']);
    })
  }

  atras(){
    this.router.navigate(['domicilio']);
  }

}
