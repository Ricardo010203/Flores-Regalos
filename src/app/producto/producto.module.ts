import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProductoComponent } from './page-producto/page-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { EditProductoComponent } from './edit-producto/edit-producto.component';
import { FormsModule } from '@angular/forms';
import { ListProveeComponent } from './list-provee/list-provee.component';



@NgModule({
  declarations: [
    PageProductoComponent,
    ListProductoComponent,
    CreateProductoComponent,
    EditProductoComponent,
    ListProveeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductoModule { }
