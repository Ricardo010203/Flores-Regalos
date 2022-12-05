import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePagoComponent } from './page-pago/page-pago.component';
import { CreatePagoComponent } from './create-pago/create-pago.component';
import { EditPagoComponent } from './edit-pago/edit-pago.component';
import { ListPagoComponent } from './list-pago/list-pago.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagePagoComponent,
    CreatePagoComponent,
    EditPagoComponent,
    ListPagoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagoModule { }
