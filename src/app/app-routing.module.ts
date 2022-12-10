import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './inicio/home/home.component';
import { RoleGuard } from './role.guard';

//Usuarios
import { CreateUserComponent } from './usuario/create-user/create-user.component';
import { EditUserComponent } from './usuario/edit-user/edit-user.component';
import { PageUserComponent } from './usuario/page-user/page-user.component';
import { RecuperarComponent } from './auth/recuperar/recuperar.component';
import { EditarPassComponent } from './auth/editar-pass/editar-pass.component';

//Proveedor
import { CreateProveedorComponent } from './proveedor/create-proveedor/create-proveedor.component';
import { EditProveedorComponent } from './proveedor/edit-proveedor/edit-proveedor.component';
import { PageProveedorComponent } from './proveedor/page-proveedor/page-proveedor.component';

//Pago
import { CreatePagoComponent } from './pago/create-pago/create-pago.component';
import { EditPagoComponent } from './pago/edit-pago/edit-pago.component';
import { PagePagoComponent } from './pago/page-pago/page-pago.component';

//Producto
import { PageProductoComponent } from './producto/page-producto/page-producto.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { EditProductoComponent } from './producto/edit-producto/edit-producto.component';
import { ListProveeComponent } from './producto/list-provee/list-provee.component';

//Venta
import { PageVentaComponent } from './ventas/page-venta/page-venta.component';
import { EditVentaComponent } from './ventas/edit-venta/edit-venta.component';
import { CreateVentaComponent } from './ventas/create-venta/create-venta.component';

//Domicilio
import { PageDomiComponent } from './domicilio/page-domi/page-domi.component';
import { EditDomiComponent } from './domicilio/edit-domi/edit-domi.component';
import { CreateDomiComponent } from './domicilio/create-domi/create-domi.component';



const routes: Routes = [
  {path: 'creardomi', component: CreateDomiComponent, canActivate:[AuthGuard]},
  {path: 'editardomi/:id', component: EditDomiComponent, canActivate:[AuthGuard]},
  {path: 'domicilio', component: PageDomiComponent, canActivate:[AuthGuard]},
  {path: 'crearventa', component: CreateVentaComponent, canActivate:[AuthGuard]},
  {path: 'editarventa', component: EditVentaComponent, canActivate:[AuthGuard]},
  {path: 'venta', component: PageVentaComponent, canActivate:[AuthGuard]},
  {path: 'listprovee', component: ListProveeComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'crearproducto/:id', component: CreateProductoComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarproducto/:id', component: EditProductoComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'producto', component: PageProductoComponent, canActivate:[AuthGuard]},
  {path: 'crearpago/:id', component: CreatePagoComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarpago/:id', component: EditPagoComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'pago', component: PagePagoComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'crearproveedor', component: CreateProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarproveedor/:id', component: EditProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'proveedor', component: PageProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarusuario/:id', component: EditUserComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'usuario', component: PageUserComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'crearusuario', component: CreateUserComponent, canActivate:[AuthGuard,RoleGuard]},
  { path: 'editarpassword/:id', component: EditarPassComponent},
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
