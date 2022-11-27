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

//Proveedor
import { CreateProveedorComponent } from './proveedor/create-proveedor/create-proveedor.component';
import { EditProveedorComponent } from './proveedor/edit-proveedor/edit-proveedor.component';
import { PageProveedorComponent } from './proveedor/page-proveedor/page-proveedor.component';

const routes: Routes = [
  {path: 'crearproveedor', component: CreateProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarproveedor/:id', component: EditProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'proveedor', component: PageProveedorComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'editarusuario/:id', component: EditUserComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'usuario', component: PageUserComponent, canActivate:[AuthGuard,RoleGuard]},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'crearusuario', component: CreateUserComponent, canActivate:[AuthGuard,RoleGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
