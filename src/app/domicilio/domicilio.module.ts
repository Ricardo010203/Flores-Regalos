import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDomiComponent } from './create-domi/create-domi.component';
import { ListDomiComponent } from './list-domi/list-domi.component';
import { EditDomiComponent } from './edit-domi/edit-domi.component';
import { PageDomiComponent } from './page-domi/page-domi.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateDomiComponent,
    ListDomiComponent,
    EditDomiComponent,
    PageDomiComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DomicilioModule { }
