import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-producto',
  templateUrl: './page-producto.component.html',
  styleUrls: ['./page-producto.component.css']
})
export class PageProductoComponent implements OnInit {

  constructor(
    public authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  dirigir(){
    this.router.navigate(['listprovee']);
  }

}
