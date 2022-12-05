import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-domi',
  templateUrl: './page-domi.component.html',
  styleUrls: ['./page-domi.component.css']
})
export class PageDomiComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  dirigir(){
    this.router.navigate(['creardomi']);
  }

}
