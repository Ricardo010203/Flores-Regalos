import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { EditarPassComponent } from './editar-pass/editar-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    RecuperarComponent,
    EditarPassComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
