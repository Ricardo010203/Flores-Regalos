import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { PageUserComponent } from './page-user/page-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateUserComponent,
    PageUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsuarioModule { }
