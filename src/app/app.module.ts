import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsuarioModule } from './usuario/usuario.module';
import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { RoleGuard } from './role.guard';
import { ProveedorModule } from './proveedor/proveedor.module';
import { PagoModule } from './pago/pago.module';
import { ProductoModule } from './producto/producto.module';
import { VentasModule } from './ventas/ventas.module';
import { DomicilioModule } from './domicilio/domicilio.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    AuthModule,
    ProveedorModule,
    PagoModule,
    ProductoModule,
    VentasModule,
    DomicilioModule
  //  BrowserAnimationsModule,
 //   ToastrModule.forRoot()
  ],
  providers: [AuthGuard,RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
