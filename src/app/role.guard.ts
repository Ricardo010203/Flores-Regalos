import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AuthService} from './services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private authService: AuthService
    ){}

  canActivate(): boolean{
    if(this.authService.roled()){
      return true
    }
    
    return false
  }
  
}