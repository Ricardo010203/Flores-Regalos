import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVentaComponent } from './page-venta/page-venta.component';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { EditVentaComponent } from './edit-venta/edit-venta.component';
import { ListVentaComponent } from './list-venta/list-venta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageVentaComponent,
    CreateVentaComponent,
    EditVentaComponent,
    ListVentaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VentasModule { }
