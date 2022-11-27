import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProveedorComponent } from './create-proveedor/create-proveedor.component';
import { EditProveedorComponent } from './edit-proveedor/edit-proveedor.component';
import { ListProveedorComponent } from './list-proveedor/list-proveedor.component';
import { PageProveedorComponent } from './page-proveedor/page-proveedor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateProveedorComponent,
    EditProveedorComponent,
    ListProveedorComponent,
    PageProveedorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProveedorModule { }
